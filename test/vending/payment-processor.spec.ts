import { PaymentProcessor } from "../../lib/vending/payment-processor";

fdescribe("PaymentProcessor", () => {
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
});
