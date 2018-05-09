import { refundChange } from "../../lib/vending/vending-machine";

describe("VendingMachine", () => {
  describe("refundChange", () => {
    it("refunds nothing when no money has been given", () => {
      const result = refundChange();
      expect(result).toEqual(0);
    });
  });
});
