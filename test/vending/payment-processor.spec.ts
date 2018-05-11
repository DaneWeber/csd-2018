import { PaymentProcessor } from "../../lib/vending/payment-processor";

describe("PaymentProcessor", () => {
  let piggyBankMock;
  let payProc;

  beforeEach(done => {
    piggyBankMock = jasmine.createSpyObj("piggyBank", [
      "withdraw",
      "deposit",
      "balance"
    ]);
    payProc = new PaymentProcessor(piggyBankMock);
    done();
  });

  describe("disburse", () => {
    it("should disburse nothing when the piggyBank is empty", () => {
      // Arrange
      piggyBankMock.balance.and.returnValue(0);
      // Act
      const refund = payProc.disburse();
      // Assert
      expect(refund).toEqual(0);
    });
    it("should disburse whatever amount is in the piggyBank", () => {
      // Arrange
      const coinsInserted = 25;
      piggyBankMock.balance.and.returnValue(coinsInserted);
      // Act
      const refund = payProc.disburse();
      // Assert
      expect(refund).toEqual(coinsInserted);
      expect(piggyBankMock.withdraw).toHaveBeenCalledWith(coinsInserted);
    });
  });
  describe("acceptPayment", () => {
    it("should send payment to the piggyBank", () => {
      // Arrange
      const centsInserted = 25;
      // Act
      payProc.acceptPayment(centsInserted);
      // Assert
      expect(piggyBankMock.deposit).toHaveBeenCalledWith(centsInserted);
    });
  });
  describe("processPurchase", () => {
    it("should withdraw purchase price", () => {
      // Arrange
      const price = 50;
      // Act
      payProc.processPurchase(price);
      // Assert
      expect(piggyBankMock.withdraw).toHaveBeenCalledWith(price);
    });
  });
  describe("isPaymentSufficient", () => {
    it("should be true if there are more than enough funds", () => {
      // Arrange
      const price = 50;
      const coinsInserted = 75;
      piggyBankMock.balance.and.returnValue(coinsInserted);
      // Act
      const check = payProc.isPaymentSufficient(price);
      // Assert
      expect(check).toEqual(true);
    });
    it("should be true if there are exact funds", () => {
      // Arrange
      const price = 50;
      const coinsInserted = 50;
      piggyBankMock.balance.and.returnValue(coinsInserted);
      // Act
      const check = payProc.isPaymentSufficient(price);
      // Assert
      expect(check).toEqual(true);
    });
    it("should be false if there are insufficient funds", () => {
      // Arrange
      const price = 50;
      const coinsInserted = 25;
      piggyBankMock.balance.and.returnValue(coinsInserted);
      // Act
      const check = payProc.isPaymentSufficient(price);
      // Assert
      expect(check).toEqual(false);
    });
  });
});
