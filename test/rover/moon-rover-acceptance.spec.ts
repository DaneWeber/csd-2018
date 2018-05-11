import { Rover } from "../../lib/rover/rover";

describe("MoonRoverAcceptance", () => {
  let moonRover;
  let distressSignal;

  beforeEach(done => {
    distressSignal = jasmine.createSpyObj("transmitter", ["transmit"]);
    moonRover = new Rover(distressSignal);
    done();
  });

  describe("Primary Acceptance Test", () => {
    it("Moves forward 5 spots, turns right, forward 2 spots, turn right,\
    forward 3 spots, turn left, backwards 1 spot, and turns right.\
    Result should be location 1,2; direction S.", () => {
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
      const xPosition = moonRover.getXCoordinate();
      const yPosition = moonRover.getYCoordinate();
      const direction = moonRover.getDirection();
      expect(xPosition).toEqual(1);
      expect(yPosition).toEqual(2);
      expect(direction).toEqual("S");
    });
  });
});
