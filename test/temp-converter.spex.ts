import { convertCtoF } from "../lib/temp-converter";

describe("TempConverter", () => {
  describe("convertCtoF", () => {
    it("should return 212f given 100c (boiling)", () => {
      let result = convertCtoF(100);
      expect(result).toEqual(212);
    });
    it("should return 32f given 0c (freezing)", () => {
      let result = convertCtoF(0);
      expect(result).toEqual(32);
    });
    it("should return -40f given -40c", () => {
      let result = convertCtoF(-40);
      expect(result).toEqual(-40);
    });
    it("should return 98.6f given 37c", () => {
      let result = convertCtoF(37);
      expect(result).toEqual(98.6);
    });
  });
});
