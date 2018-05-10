"use strict";
exports.__esModule = true;
var payment_processor_1 = require("../../lib/vending/payment-processor");
describe("PaymentProcessor", function () {
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
    describe("acceptPayment", function () {
        it("should disburse all payment accepted", function () {
            // Arrange
            var processor = new payment_processor_1.PaymentProcessor();
            var centsInserted = 25;
            // Act
            processor.acceptPayment(centsInserted);
            var refund = processor.disburse();
            // Assert
            expect(refund).toEqual(centsInserted);
        });
    });
    describe("processPurchase", function () {
        it("should disburse remainder after a purchase", function () {
            // Arrange
            var processor = new payment_processor_1.PaymentProcessor();
            // Act
            processor.acceptPayment(75);
            processor.processPurchase();
            var refund = processor.disburse();
            // Assert
            expect(refund).toEqual(25);
        });
    });
});
