export class VendingMachine {
  private _currentAmount = 0;

  releaseChange() {
    const refund = this._currentAmount;
    this._currentAmount = 0;
    return refund;
  }

  insertCents(centsInserted: number) {
    this._currentAmount = centsInserted;
  }

  buyProduct(): string {
    if (this._currentAmount >= 50) {
      this._currentAmount -= 50;
      return "snickers";
    }
    return "";
  }
}
