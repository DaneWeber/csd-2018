"use strict";
exports.__esModule = true;
var payment_processor_1 = require("../../lib/vending/payment-processor");
describe("PaymentProcessor", function () {
    var piggyBankMock;
    var payProc;
    beforeEach(function (done) {
        piggyBankMock = jasmine.createSpyObj("piggyBank", [
            "withdraw",
            "deposit",
            "balance"
        ]);
        payProc = new payment_processor_1.PaymentProcessor(piggyBankMock);
        done();
    });
    describe("disburse", function () {
        it("should disburse nothing when the piggyBank is empty", function () {
            // Arrange
            piggyBankMock.balance.and.returnValue(0);
            // Act
            var refund = payProc.disburse();
            // Assert
            expect(refund).toEqual(0);
        });
        it("should disburse whatever amount is in the piggyBank", function () {
            // Arrange
            var coinsInserted = 25;
            piggyBankMock.balance.and.returnValue(coinsInserted);
            // Act
            var refund = payProc.disburse();
            // Assert
            expect(refund).toEqual(coinsInserted);
        });
    });
    describe("acceptPayment", function () {
        it("should send payment to the piggyBank", function () {
            // Arrange
            var centsInserted = 25;
            piggyBankMock.deposit;
            // Act
            payProc.acceptPayment(centsInserted);
            // Assert
            expect(piggyBankMock.deposit).toHaveBeenCalledWith(centsInserted);
        });
    });
    describe("processPurchase", function () {
        it("should withdraw purchase price", function () {
            // Arrange
            var price = 50;
            piggyBankMock.withdraw;
            // Act
            payProc.processPurchase(price);
            // Assert
            expect(piggyBankMock.withdraw).toHaveBeenCalledWith(price);
        });
    });
    describe("isPaymentSufficient", function () {
        it("should be true if there are more than enough funds", function () {
            // Arrange
            var price = 50;
            var coinsInserted = 75;
            piggyBankMock.balance.and.returnValue(coinsInserted);
            // Act
            var check = payProc.isPaymentSufficient(price);
            // Assert
            expect(check).toEqual(true);
        });
        it("should be true if there are exact funds", function () {
            // Arrange
            var price = 50;
            var coinsInserted = 50;
            piggyBankMock.balance.and.returnValue(coinsInserted);
            // Act
            var check = payProc.isPaymentSufficient(price);
            // Assert
            expect(check).toEqual(true);
        });
        it("should be false if there are insufficient funds", function () {
            // Arrange
            var price = 50;
            var coinsInserted = 25;
            piggyBankMock.balance.and.returnValue(coinsInserted);
            // Act
            var check = payProc.isPaymentSufficient(price);
            // Assert
            expect(check).toEqual(false);
        });
    });
});
