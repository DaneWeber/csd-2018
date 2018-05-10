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
      // Act
      processor.acceptPayment(75);
      processor.processPurchase();
      const refund = processor.disburse();
      // Assert
      expect(refund).toEqual(25);
    });
  });
});
