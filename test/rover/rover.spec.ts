import { Rover } from "../../lib/rover/rover";

describe("Rover", () => {
  let moonRover;
  let distressSignal;

  beforeEach(done => {
    distressSignal = jasmine.createSpyObj("transmitter", ["transmit"]);
    moonRover = new Rover(distressSignal);
    done();
  });

  describe("getDirection", () => {
    it("should default to North.", () => {
      // Arrange
      // Act
      const direction = moonRover.getDirection();
      // Assert
      expect(direction).toEqual("N");
    });
  });

  describe("getXCoordinate", () => {
    it("should default to an X of 0.", () => {
      // Arrange
      // Act
      const xPosition = moonRover.getXCoordinate();
      // Assert
      expect(xPosition).toEqual(0);
    });
  });

  describe("getYCoordinate", () => {
    it("should defaults to a Y of 0.", () => {
      // Arrange
      // Act
      const yPosition = moonRover.getYCoordinate();
      // Assert
      expect(yPosition).toEqual(0);
    });
  });

  describe("turnLeft", () => {
    it("should turn to the left 90 degrees.", () => {
      // Arrange
      // Act
      moonRover.turnLeft();
      const direction = moonRover.getDirection();
      // Assert
      expect(direction).toEqual("W");
    });
    it("should turn to the left 180 degrees.", () => {
      // Arrange
      // Act
      moonRover.turnLeft();
      moonRover.turnLeft();
      const direction = moonRover.getDirection();
      // Assert
      expect(direction).toEqual("S");
    });
    it("should turn to the left 270 degrees.", () => {
      // Arrange
      // Act
      moonRover.turnLeft();
      moonRover.turnLeft();
      moonRover.turnLeft();
      const direction = moonRover.getDirection();
      // Assert
      expect(direction).toEqual("E");
    });
    it("should turn to the left 360 degrees.", () => {
      // Arrange
      // Act
      moonRover.turnLeft();
      moonRover.turnLeft();
      moonRover.turnLeft();
      moonRover.turnLeft();
      const direction = moonRover.getDirection();
      // Assert
      expect(direction).toEqual("N");
    });
  });
  describe("turnRight", () => {
    it("should turn to the right 90 degrees.", () => {
      // Arrange
      // Act
      moonRover.turnRight();
      const direction = moonRover.getDirection();
      // Assert
      expect(direction).toEqual("E");
    });
    it("should turn to the right 180 degrees.", () => {
      // Arrange
      // Act
      moonRover.turnRight();
      moonRover.turnRight();
      const direction = moonRover.getDirection();
      // Assert
      expect(direction).toEqual("S");
    });
    it("should turn to the right 270 degrees.", () => {
      // Arrange
      // Act
      moonRover.turnRight();
      moonRover.turnRight();
      moonRover.turnRight();
      const direction = moonRover.getDirection();
      // Assert
      expect(direction).toEqual("W");
    });
    it("should turn to the right 270 degrees.", () => {
      // Arrange
      // Act
      moonRover.turnRight();
      moonRover.turnRight();
      moonRover.turnRight();
      moonRover.turnRight();
      const direction = moonRover.getDirection();
      // Assert
      expect(direction).toEqual("N");
    });
  });

  describe("moveForward", () => {
    it("should move in default direction 1.", () => {
      // Arrange
      // Act
      moonRover.moveForward(1);
      const yPosition = moonRover.getYCoordinate();
      // Assert
      expect(yPosition).toEqual(1);
    });
    it("should move in default direction 2.", () => {
      // Arrange
      // Act
      moonRover.moveForward(2);
      const yPosition = moonRover.getYCoordinate();
      // Assert
      expect(yPosition).toEqual(2);
    });
    it("should move east 2.", () => {
      // Arrange
      moonRover.turnRight();
      // Act
      moonRover.moveForward(2);
      const xPosition = moonRover.getXCoordinate();
      const yPosition = moonRover.getYCoordinate();
      // Assert
      expect(xPosition).toEqual(2);
      expect(yPosition).toEqual(0);
    });
    it("should move west 3.", () => {
      // Arrange
      moonRover.turnLeft();
      // Act
      moonRover.moveForward(3);
      const xPosition = moonRover.getXCoordinate();
      const yPosition = moonRover.getYCoordinate();
      // Assert
      expect(xPosition).toEqual(-3);
      expect(yPosition).toEqual(0);
    });
    it("should move south 4.", () => {
      // Arrange
      moonRover.turnLeft();
      moonRover.turnLeft();
      // Act
      moonRover.moveForward(4);
      const xPosition = moonRover.getXCoordinate();
      const yPosition = moonRover.getYCoordinate();
      // Assert
      expect(xPosition).toEqual(0);
      expect(yPosition).toEqual(-4);
    });
  });

  describe("moveBackward", () => {
    it("should move in default direction -1.", () => {
      // Arrange
      // Act
      moonRover.moveBackward(1);
      const yPosition = moonRover.getYCoordinate();
      // Assert
      expect(yPosition).toEqual(-1);
    });
    it("should move east 5.", () => {
      // Arrange
      moonRover.turnLeft();
      // Act
      moonRover.moveBackward(5);
      const xPosition = moonRover.getXCoordinate();
      const yPosition = moonRover.getYCoordinate();
      // Assert
      expect(xPosition).toEqual(5);
      expect(yPosition).toEqual(0);
    });
    it("should move west 6.", () => {
      // Arrange
      moonRover.turnRight();
      // Act
      moonRover.moveBackward(6);
      const xPosition = moonRover.getXCoordinate();
      const yPosition = moonRover.getYCoordinate();
      // Assert
      expect(xPosition).toEqual(-6);
      expect(yPosition).toEqual(0);
    });
    it("should move north 7.", () => {
      // Arrange
      moonRover.turnRight();
      moonRover.turnRight();
      // Act
      moonRover.moveBackward(7);
      const xPosition = moonRover.getXCoordinate();
      const yPosition = moonRover.getYCoordinate();
      // Assert
      expect(xPosition).toEqual(0);
      expect(yPosition).toEqual(7);
    });
  });

  describe("Neverland Conditions", () => {
    it("should not send transmission at default location", () => {
      // Arrange
      // Act
      // Assert
      expect(distressSignal.transmit).not.toHaveBeenCalled();
    });
    it("should not send transmission at 0, 1", () => {
      // Arrange
      // Act
      moonRover.moveForward(1);
      // Assert
      expect(distressSignal.transmit).not.toHaveBeenCalled();
    });
    it("should not send transmission at 1, 0", () => {
      // Arrange
      moonRover.turnRight();
      // Act
      moonRover.moveForward(1);
      // Assert
      expect(distressSignal.transmit).not.toHaveBeenCalled();
    });
    it("should transmit at -1, 0", () => {
      // Arrange
      moonRover.turnLeft();
      // Act
      moonRover.moveForward(1);
      // Assert
      expect(distressSignal.transmit).toHaveBeenCalled();
    });
    it("should transmit at 0, -1", () => {
      // Arrange
      // Act
      moonRover.moveBackward(1);
      // Assert
      expect(distressSignal.transmit).toHaveBeenCalledWith(
        "Entered Neverland!",
        0,
        -1
      );
    });
  });
});
