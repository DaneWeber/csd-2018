describe("TempConverter", () => {
  describe("convertCtoF", () => {
    it("should return 212f given 100c", () => {
      expect(convertCtoF(100)).toEqual(212);
    });
  });
});
