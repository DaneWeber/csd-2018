import { VendingMachine } from "../../lib/vending/vending-machine";

let vendingMachine: VendingMachine = null;

describe("VendingMachine", () => {
  beforeEach(done => {
    vendingMachine = new VendingMachine();
    done();
  });

  describe("refundChange", () => {
    xit("refunds nothing when no money has been given", () => {
      // Arrange
      // Act
      const result = vendingMachine.releaseChange();
      // Assert
      expect(result).toEqual(0);
    });
    xit("refunds all money given", () => {
      // Arrange
      const centsInserted = 25;
      vendingMachine.insertCents(centsInserted);
      // Act
      const centsReturned = vendingMachine.releaseChange();
      // Assert
      expect(centsReturned).toEqual(centsInserted);
    });
    xit("should return 25 when too much money is inserted and product is purchased", () => {
      // Arrange
      vendingMachine.insertCents(75);
      vendingMachine.buyProduct();
      // Act
      const centsReturned = vendingMachine.releaseChange();
      // Assert
      expect(centsReturned).toEqual(25);
    });
    it("should return money only once, given multiple presses", () => {
      // Arrange
      vendingMachine.insertCents(75);
      vendingMachine.releaseChange();
      // Act
      const centsReturned = vendingMachine.releaseChange();
      // Assert
      expect(centsReturned).toEqual(0);
    });
  });

  describe("buyProduct", () => {
    it("should return nothing when no money is inserted", () => {
      // Arrange
      // Act
      const dispensedProduct = vendingMachine.buyProduct();
      // Assert
      expect(dispensedProduct).toBeFalsy();
    });
    it("should return a product when sufficient money is inserted", () => {
      // Arrange
      vendingMachine.insertCents(50);
      // Act
      const product = vendingMachine.buyProduct();
      // Assert
      expect(product).toBeTruthy();
    });
    it("should return a product when 75 cents is inserted", () => {
      // Arrange
      vendingMachine.insertCents(75);
      // Act
      const product = vendingMachine.buyProduct();
      // Assert
      expect(product).toBeTruthy();
    });
    it("should return nothing when insufficient money is inserted", () => {
      // Arrange
      vendingMachine.insertCents(25);
      // Act
      const product = vendingMachine.buyProduct();
      // Assert
      expect(product).toBeFalsy();
    });
    it("should return no product when attempting to purchase with no balance", () => {
      // Arrange
      vendingMachine.insertCents(50);
      vendingMachine.buyProduct();
      // Act
      const product = vendingMachine.buyProduct();
      // Assert
      expect(product).toBeFalsy();
    });
  });
});
