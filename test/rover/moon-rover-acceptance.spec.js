"use strict";
exports.__esModule = true;
var rover_1 = require("../../lib/rover/rover");
describe("MoonRoverAcceptance", function () {
    var moonRover;
    var distressSignal;
    beforeEach(function (done) {
        distressSignal = jasmine.createSpyObj("transmitter", ["transmit"]);
        moonRover = new rover_1.Rover(distressSignal);
        done();
    });
    describe("Primary Acceptance Test", function () {
        it("Moves forward 5 spots, turns right, forward 2 spots, turn right,\
    forward 3 spots, turn left, backwards 1 spot, and turns right.\
    Result should be location 1,2; direction S.", function () {
            // Arrange
            // Act
            moonRover.moveForward(5);
            moonRover.turnRight();
            moonRover.moveForward(2);
            moonRover.turnRight();
            moonRover.moveForward(3);
            moonRover.turnLeft();
            moonRover.moveBackward(1);
            moonRover.turnRight();
            // Assert
            var xPosition = moonRover.getXCoordinate();
            var yPosition = moonRover.getYCoordinate();
            var direction = moonRover.getDirection();
            expect(xPosition).toEqual(1);
            expect(yPosition).toEqual(2);
            expect(direction).toEqual("S");
        });
    });
});
