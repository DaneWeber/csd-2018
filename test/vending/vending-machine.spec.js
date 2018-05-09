"use strict";
exports.__esModule = true;
var vending_machine_1 = require("../../lib/vending/vending-machine");
describe("VendingMachine", function () {
    describe("refundChange", function () {
        it("refunds nothing when no money has been given", function () {
            var vendingMachine = new vending_machine_1.VendingMachine();
            var result = vendingMachine.releaseChange();
            expect(result).toEqual(0);
        });
        it("refunds all money given", function () {
            // Arrange
            var vendingMachine = new vending_machine_1.VendingMachine();
            var centsInserted = 25;
            vendingMachine.insertCents(centsInserted);
            // Act
            var centsReturned = vendingMachine.releaseChange();
            // Assert
            expect(centsReturned).toEqual(centsInserted);
        });
    });
    describe("buyProduct", function () {
        it("should return nothing when no money is inserted", function () {
            // Arrange
            var vendingMachine = new vending_machine_1.VendingMachine();
            // Act
            var dispensedProduct = vendingMachine.buyProduct();
            // Assert
            expect(dispensedProduct).toBeFalsy();
        });
        it("should return a product when money is inserted", function () {
            var vendingMachine = new vending_machine_1.VendingMachine();
            vendingMachine.insertCents(25);
            var product = vendingMachine.buyProduct();
            expect(product).toBe("snickers");
        });
    });
});
