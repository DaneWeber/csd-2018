"use strict";
exports.__esModule = true;
var payment_processor_1 = require("../../lib/vending/payment-processor");
fdescribe("PaymentProcessor", function () {
    describe("disburse", function () {
        it("should disburse nothing when no payment has been given", function () {
            // Arrange
            var processor = new payment_processor_1.PaymentProcessor();
            // Act
            var refund = processor.disburse();
            // Assert
            expect(refund).toEqual(0);
        });
    });
});
