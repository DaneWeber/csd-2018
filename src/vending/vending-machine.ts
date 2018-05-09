export class VendingMachine {
  private _currentAmount = 0;

  releaseChange() {
    return this._currentAmount;
  }

  insertCents(centsInserted: number) {
    this._currentAmount = centsInserted;
  }

  buyProduct(): string {
    if (this._currentAmount > 0) {
      return "snickers";
    }
    return "";
  }
}
