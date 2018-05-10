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
        it("should disburse the sum of multiple payments", function () {
            // Arrange
            var processor = new payment_processor_1.PaymentProcessor();
            var expectedRefund = 100;
            // Act
            processor.acceptPayment(25);
            processor.acceptPayment(25);
            processor.acceptPayment(25);
            processor.acceptPayment(25);
            var refund = processor.disburse();
            // Assert
            expect(refund).toEqual(expectedRefund);
        });
    });
    describe("processPurchase", function () {
        it("should disburse remainder after a purchase", function () {
            // Arrange
            var processor = new payment_processor_1.PaymentProcessor();
            // Act
            processor.acceptPayment(75);
            processor.processPurchase(50);
            var refund = processor.disburse();
            // Assert
            expect(refund).toEqual(25);
        });
    });
    describe("isPaymentSufficient", function () {
        it("should be true if there are enough current funds", function () {
            // Arrange
            var processor = new payment_processor_1.PaymentProcessor();
            // Act
            processor.acceptPayment(75);
            var check = processor.isPaymentSufficient(50);
            // Assert
            expect(check).toEqual(true);
        });
    });
});
