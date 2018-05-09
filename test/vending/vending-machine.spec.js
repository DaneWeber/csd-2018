"use strict";
exports.__esModule = true;
var vending_machine_1 = require("../../lib/vending/vending-machine");
describe("VendingMachine", function () {
    describe("refundChange", function () {
        it("refunds nothing when no money has been given", function () {
            var result = vending_machine_1.refundChange();
            expect(result).toEqual(0);
        });
    });
});
