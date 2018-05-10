export class PaymentProcessor {
  private _currentAmount = 0;

  // acceptPayment(centsInserted: number) {
  //   this._currentAmount = centsInserted;
  // }

  disburse(): number {
    const refund = this._currentAmount;
    this._currentAmount = 0;
    return refund;
  }

  // processPurchase(): boolean {
  //   if (this._currentAmount >= 50) {
  //     this._currentAmount -= 50;
  //     return true;
  //   }
  //   return false;
  // }
}
