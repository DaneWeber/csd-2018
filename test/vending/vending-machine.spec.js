"use strict";
exports.__esModule = true;
var vending_machine_1 = require("../../lib/vending/vending-machine");
var vendingMachine = new vending_machine_1.VendingMachine();
describe("VendingMachine", function () {
    describe("refundChange", function () {
        it("refunds nothing when no money has been given", function () {
            // Arrange
            // let vendingMachine = new VendingMachine();
            // Act
            var result = vendingMachine.releaseChange();
            // Assert
            expect(result).toEqual(0);
        });
        it("refunds all money given", function () {
            // Arrange
            // let vendingMachine = new VendingMachine();
            var centsInserted = 25;
            vendingMachine.insertCents(centsInserted);
            // Act
            var centsReturned = vendingMachine.releaseChange();
            // Assert
            expect(centsReturned).toEqual(centsInserted);
        });
        it("should return 25 when too much money is inserted and product is purchased", function () {
            // Arrange
            // let vendingMachine = new VendingMachine();
            vendingMachine.insertCents(75);
            vendingMachine.buyProduct();
            // Act
            var centsReturned = vendingMachine.releaseChange();
            // Assert
            expect(centsReturned).toEqual(25);
        });
        it("should return money only once, given multiple presses", function () {
            // Arrange
            // let vendingMachine = new VendingMachine();
            vendingMachine.insertCents(75);
            vendingMachine.releaseChange();
            // Act
            var centsReturned = vendingMachine.releaseChange();
            // Assert
            expect(centsReturned).toEqual(0);
        });
    });
    describe("buyProduct", function () {
        it("should return nothing when no money is inserted", function () {
            // Arrange
            // let vendingMachine = new VendingMachine();
            // Act
            var dispensedProduct = vendingMachine.buyProduct();
            // Assert
            expect(dispensedProduct).toBeFalsy();
        });
        it("should return a product when sufficient money is inserted", function () {
            // Arrange
            // let vendingMachine = new VendingMachine();
            vendingMachine.insertCents(50);
            // Act
            var product = vendingMachine.buyProduct();
            // Assert
            expect(product).toBeTruthy();
        });
        it("should return a product when 75 cents is inserted", function () {
            // Arrange
            // let vendingMachine = new VendingMachine();
            vendingMachine.insertCents(75);
            // Act
            var product = vendingMachine.buyProduct();
            // Assert
            expect(product).toBeTruthy();
        });
        it("should return nothing when insufficient money is inserted", function () {
            // Arrange
            // let vendingMachine = new VendingMachine();
            vendingMachine.insertCents(25);
            // Act
            var product = vendingMachine.buyProduct();
            // Assert
            expect(product).toBeFalsy();
        });
        it("should return no product when attempting to purchase with no balance", function () {
            // Arrange
            // let vendingMachine = new VendingMachine();
            vendingMachine.insertCents(50);
            vendingMachine.buyProduct();
            // Act
            var product = vendingMachine.buyProduct();
            // Assert
            expect(product).toBeFalsy();
        });
    });
});
