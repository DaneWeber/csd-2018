export interface IRover {
  moveForward(spots: number): void;
  moveBackward(spots: number): void;
  turnLeft(): void;
  turnRight(): void;
  getDirection(): string;
  getXCoordinate(): number;
  getYCoordinate(): number;
}

export class Rover implements IRover {
  private currentDirection: number;
  private xPos: number;
  private yPos: number;
  private static readonly DIRECTIONS = ["N", "W", "S", "E"];
  private static readonly FULL_TURN = 4;
  private static readonly LEFT_TURN = 1;
  private static readonly RIGHT_TURN = 3;

  constructor(private emergencyTransmitter: EmergencyTransmitter) {
    this.currentDirection = 0;
    this.xPos = 0;
    this.yPos = 0;
  }

  moveForward(spots: number): void {
    // TODO: Replace this if-else with multiplying a tuple by spots and adding to xPos & yPos
    if (this.currentDirection === 0) {
      this.yPos += spots;
    } else if (this.currentDirection === 2) {
      this.yPos -= spots;
    } else if (this.currentDirection === 3) {
      this.xPos += spots;
    } else if (this.currentDirection === 1) {
      this.xPos -= spots;
    }
    this.neverlandCheck();
  }

  private neverlandCheck(): void {
    if (this.xPos < 0 || this.yPos < 0) {
      this.emergencyTransmitter.transmit(
        "Entered Neverland!",
        this.xPos,
        this.yPos
      );
    }
  }

  moveBackward(spots: number): void {
    this.moveForward(0 - spots);
  }
  turnLeft(): void {
    this.currentDirection =
      (this.currentDirection + Rover.LEFT_TURN) % Rover.FULL_TURN;
  }
  turnRight(): void {
    this.currentDirection =
      (this.currentDirection + Rover.RIGHT_TURN) % Rover.FULL_TURN;
  }
  getDirection(): string {
    return Rover.DIRECTIONS[this.currentDirection];
  }
  getXCoordinate(): number {
    return this.xPos;
  }
  getYCoordinate(): number {
    return this.yPos;
  }
}

export interface IEmergencyTransmitter {
  transmit(msg: string, xCoordinate: number, yCoordinate: number): void;
}

export class EmergencyTransmitter implements IEmergencyTransmitter {
  transmit(msg: string, xCoordinate: number, yCoordinate: number): void {
    throw new Error("Method not implemented.");
  }
}
