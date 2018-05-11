"use strict";
exports.__esModule = true;
var rover_1 = require("../../lib/rover/rover");
describe("Rover", function () {
    var moonRover;
    var distressSignal;
    beforeEach(function (done) {
        distressSignal = jasmine.createSpyObj("transmitter", ["transmit"]);
        moonRover = new rover_1.Rover(distressSignal);
        done();
    });
    describe("getDirection", function () {
        it("should default to North.", function () {
            // Arrange
            // Act
            var direction = moonRover.getDirection();
            // Assert
            expect(direction).toEqual("N");
        });
    });
    describe("getXCoordinate", function () {
        it("should default to an X of 0.", function () {
            // Arrange
            // Act
            var xPosition = moonRover.getXCoordinate();
            // Assert
            expect(xPosition).toEqual(0);
        });
    });
    describe("getYCoordinate", function () {
        it("should defaults to a Y of 0.", function () {
            // Arrange
            // Act
            var yPosition = moonRover.getYCoordinate();
            // Assert
            expect(yPosition).toEqual(0);
        });
    });
    describe("turnLeft", function () {
        it("should turn to the left 90 degrees.", function () {
            // Arrange
            // Act
            moonRover.turnLeft();
            var direction = moonRover.getDirection();
            // Assert
            expect(direction).toEqual("W");
        });
        it("should turn to the left 180 degrees.", function () {
            // Arrange
            // Act
            moonRover.turnLeft();
            moonRover.turnLeft();
            var direction = moonRover.getDirection();
            // Assert
            expect(direction).toEqual("S");
        });
        it("should turn to the left 270 degrees.", function () {
            // Arrange
            // Act
            moonRover.turnLeft();
            moonRover.turnLeft();
            moonRover.turnLeft();
            var direction = moonRover.getDirection();
            // Assert
            expect(direction).toEqual("E");
        });
        it("should turn to the left 360 degrees.", function () {
            // Arrange
            // Act
            moonRover.turnLeft();
            moonRover.turnLeft();
            moonRover.turnLeft();
            moonRover.turnLeft();
            var direction = moonRover.getDirection();
            // Assert
            expect(direction).toEqual("N");
        });
    });
    describe("turnRight", function () {
        it("should turn to the right 90 degrees.", function () {
            // Arrange
            // Act
            moonRover.turnRight();
            var direction = moonRover.getDirection();
            // Assert
            expect(direction).toEqual("E");
        });
        it("should turn to the right 180 degrees.", function () {
            // Arrange
            // Act
            moonRover.turnRight();
            moonRover.turnRight();
            var direction = moonRover.getDirection();
            // Assert
            expect(direction).toEqual("S");
        });
        it("should turn to the right 270 degrees.", function () {
            // Arrange
            // Act
            moonRover.turnRight();
            moonRover.turnRight();
            moonRover.turnRight();
            var direction = moonRover.getDirection();
            // Assert
            expect(direction).toEqual("W");
        });
        it("should turn to the right 270 degrees.", function () {
            // Arrange
            // Act
            moonRover.turnRight();
            moonRover.turnRight();
            moonRover.turnRight();
            moonRover.turnRight();
            var direction = moonRover.getDirection();
            // Assert
            expect(direction).toEqual("N");
        });
    });
    describe("moveForward", function () {
        it("should move in default direction 1.", function () {
            // Arrange
            // Act
            moonRover.moveForward(1);
            var yPosition = moonRover.getYCoordinate();
            // Assert
            expect(yPosition).toEqual(1);
        });
        it("should move in default direction 2.", function () {
            // Arrange
            // Act
            moonRover.moveForward(2);
            var yPosition = moonRover.getYCoordinate();
            // Assert
            expect(yPosition).toEqual(2);
        });
        it("should move east 2.", function () {
            // Arrange
            moonRover.turnRight();
            // Act
            moonRover.moveForward(2);
            var xPosition = moonRover.getXCoordinate();
            var yPosition = moonRover.getYCoordinate();
            // Assert
            expect(xPosition).toEqual(2);
            expect(yPosition).toEqual(0);
        });
        it("should move west 3.", function () {
            // Arrange
            moonRover.turnLeft();
            // Act
            moonRover.moveForward(3);
            var xPosition = moonRover.getXCoordinate();
            var yPosition = moonRover.getYCoordinate();
            // Assert
            expect(xPosition).toEqual(-3);
            expect(yPosition).toEqual(0);
        });
        it("should move south 4.", function () {
            // Arrange
            moonRover.turnLeft();
            moonRover.turnLeft();
            // Act
            moonRover.moveForward(4);
            var xPosition = moonRover.getXCoordinate();
            var yPosition = moonRover.getYCoordinate();
            // Assert
            expect(xPosition).toEqual(0);
            expect(yPosition).toEqual(-4);
        });
    });
    describe("moveBackward", function () {
        it("should move in default direction -1.", function () {
            // Arrange
            // Act
            moonRover.moveBackward(1);
            var yPosition = moonRover.getYCoordinate();
            // Assert
            expect(yPosition).toEqual(-1);
        });
        it("should move east 5.", function () {
            // Arrange
            moonRover.turnLeft();
            // Act
            moonRover.moveBackward(5);
            var xPosition = moonRover.getXCoordinate();
            var yPosition = moonRover.getYCoordinate();
            // Assert
            expect(xPosition).toEqual(5);
            expect(yPosition).toEqual(0);
        });
        it("should move west 6.", function () {
            // Arrange
            moonRover.turnRight();
            // Act
            moonRover.moveBackward(6);
            var xPosition = moonRover.getXCoordinate();
            var yPosition = moonRover.getYCoordinate();
            // Assert
            expect(xPosition).toEqual(-6);
            expect(yPosition).toEqual(0);
        });
        it("should move north 7.", function () {
            // Arrange
            moonRover.turnRight();
            moonRover.turnRight();
            // Act
            moonRover.moveBackward(7);
            var xPosition = moonRover.getXCoordinate();
            var yPosition = moonRover.getYCoordinate();
            // Assert
            expect(xPosition).toEqual(0);
            expect(yPosition).toEqual(7);
        });
    });
    describe("Neverland Conditions", function () {
        it("should not send transmission at default location", function () {
            // Arrange
            // Act
            // Assert
            expect(distressSignal.transmit).not.toHaveBeenCalled();
        });
        it("should not send transmission at 0, 1", function () {
            // Arrange
            // Act
            moonRover.moveForward(1);
            // Assert
            expect(distressSignal.transmit).not.toHaveBeenCalled();
        });
        it("should not send transmission at 1, 0", function () {
            // Arrange
            moonRover.turnRight();
            // Act
            moonRover.moveForward(1);
            // Assert
            expect(distressSignal.transmit).not.toHaveBeenCalled();
        });
        it("should transmit at -1, 0", function () {
            // Arrange
            moonRover.turnLeft();
            // Act
            moonRover.moveForward(1);
            // Assert
            expect(distressSignal.transmit).toHaveBeenCalled();
        });
        it("should transmit at 0, -1", function () {
            // Arrange
            // Act
            moonRover.moveBackward(1);
            // Assert
            expect(distressSignal.transmit).toHaveBeenCalledWith("Entered Neverland!", 0, -1);
        });
    });
});
