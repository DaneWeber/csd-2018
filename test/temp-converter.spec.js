describe("TempConverter", function () {
    describe("convertCtoF", function () {
        it("should return 212f given 100c", function () {
            expect(convertCtoF(100)).toEqual(212);
        });
    });
});
