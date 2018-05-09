import { VendingMachine } from "../../lib/vending/vending-machine";

describe("VendingMachine", () => {
  describe("refundChange", () => {
    it("refunds nothing when no money has been given", () => {
      let vendingMachine = new VendingMachine();
      const result = vendingMachine.releaseChange();
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
    it("should return a product when money is inserted", () => {
      let vendingMachine = new VendingMachine();
      vendingMachine.insertCents(25);

      const product = vendingMachine.buyProduct();
      expect(product).toBe("snickers");
    });
  });
});
