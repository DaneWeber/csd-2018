"use strict";
exports.__esModule = true;
var temp_converter_1 = require("../lib/temp-converter");
describe("TempConverter", function () {
    describe("convertCtoF", function () {
        it("should return 212f given 100c (boiling)", function () {
            var result = temp_converter_1.convertCtoF(100);
            expect(result).toEqual(212);
        });
        it("should return 32f given 0c (freezing)", function () {
            var result = temp_converter_1.convertCtoF(0);
            expect(result).toEqual(32);
        });
        it("should return -40f given -40c", function () {
            var result = temp_converter_1.convertCtoF(-40);
            expect(result).toEqual(-40);
        });
    });
});
