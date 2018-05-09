import { VendingMachine } from "../../lib/vending/vending-machine";

describe("VendingMachine", () => {
  describe("refundChange", () => {
    it("refunds nothing when no money has been given", () => {
      // Arrange
      let vendingMachine = new VendingMachine();
      // Act
      const result = vendingMachine.releaseChange();
      // Assert
      expect(result).toEqual(0);
    });
    it("refunds all money given", () => {
      // Arrange
      let vendingMachine = new VendingMachine();
      const centsInserted = 25;
      vendingMachine.insertCents(centsInserted);
      // Act
      const centsReturned = vendingMachine.releaseChange();
      // Assert
      expect(centsReturned).toEqual(centsInserted);
    });
    it("should return 25 when too much money is inserted and product is purchased", () => {
      // Arrange
      let vendingMachine = new VendingMachine();
      vendingMachine.insertCents(75);
      vendingMachine.buyProduct();
      // Act
      const centsReturned = vendingMachine.releaseChange();
      // Assert
      expect(centsReturned).toEqual(25);
    });
  });

  describe("buyProduct", () => {
    it("should return nothing when no money is inserted", () => {
      // Arrange
      let vendingMachine = new VendingMachine();
      // Act
      const dispensedProduct = vendingMachine.buyProduct();
      // Assert
      expect(dispensedProduct).toBeFalsy();
    });
    it("should return a product when sufficient money is inserted", () => {
      // Arrange
      let vendingMachine = new VendingMachine();
      vendingMachine.insertCents(50);
      // Act
      const product = vendingMachine.buyProduct();
      // Assert
      expect(product).toBeTruthy();
    });
    it("should return a product when 75 cents is inserted", () => {
      // Arrange
      let vendingMachine = new VendingMachine();
      vendingMachine.insertCents(75);
      // Act
      const product = vendingMachine.buyProduct();
      // Assert
      expect(product).toBeTruthy();
    });
    it("should return nothing when insufficient money is inserted", () => {
      // Arrange
      let vendingMachine = new VendingMachine();
      vendingMachine.insertCents(25);
      // Act
      const product = vendingMachine.buyProduct();
      // Assert
      expect(product).toBeFalsy();
    });
  });
});
