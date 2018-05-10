import { PaymentProcessor } from "../../lib/vending/payment-processor";

describe("PaymentProcessor", () => {
  describe("disburse", () => {
    it("should disburse nothing when no payment has been given", () => {
      // Arrange
      const processor = new PaymentProcessor();
      // Act
      const refund = processor.disburse();
      // Assert
      expect(refund).toEqual(0);
    });
    it("should disburse nothing after the first disbursement", () => {
      // Arrange
      const processor = new PaymentProcessor();
      processor.acceptPayment(25);
      processor.disburse();
      // Act
      const refund = processor.disburse();
      // Assert
      expect(refund).toEqual(0);
    });
  });
  describe("acceptPayment", () => {
    it("should disburse all payment accepted", () => {
      // Arrange
      const processor = new PaymentProcessor();
      const centsInserted = 25;
      // Act
      processor.acceptPayment(centsInserted);
      const refund = processor.disburse();
      // Assert
      expect(refund).toEqual(centsInserted);
    });
    it("should disburse the sum of multiple payments", () => {
      // Arrange
      const processor = new PaymentProcessor();
      const expectedRefund = 100;
      // Act
      processor.acceptPayment(25);
      processor.acceptPayment(25);
      processor.acceptPayment(25);
      processor.acceptPayment(25);
      const refund = processor.disburse();
      // Assert
      expect(refund).toEqual(expectedRefund);
    });
  });
  describe("processPurchase", () => {
    it("should disburse remainder after a purchase", () => {
      // Arrange
      const processor = new PaymentProcessor();
      processor.acceptPayment(75);
      // Act
      processor.processPurchase(50);
      const refund = processor.disburse();
      // Assert
      expect(refund).toEqual(25);
    });
  });
  describe("isPaymentSufficient", () => {
    it("should be true if there are more than enough funds", () => {
      // Arrange
      const processor = new PaymentProcessor();
      // Act
      processor.acceptPayment(75);
      const check = processor.isPaymentSufficient(50);
      // Assert
      expect(check).toEqual(true);
    });
    it("should be true if there are exact funds", () => {
      // Arrange
      const processor = new PaymentProcessor();
      // Act
      processor.acceptPayment(50);
      const check = processor.isPaymentSufficient(50);
      // Assert
      expect(check).toEqual(true);
    });
    it("should be false if there are insufficient funds", () => {
      // Arrange
      const processor = new PaymentProcessor();
      // Act
      processor.acceptPayment(25);
      const check = processor.isPaymentSufficient(50);
      // Assert
      expect(check).toEqual(false);
    });
  });
});
