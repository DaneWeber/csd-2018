export class PaymentProcessor {
  private _currentAmount = 0;

  acceptPayment(centsInserted: number) {
    this._currentAmount += centsInserted;
  }

  disburse(): number {
    const refund = this._currentAmount;
    this._currentAmount = 0;
    return refund;
  }

  processPurchase(price: number) {
    this._currentAmount -= price;
  }

  isPaymentSufficient(price: number): boolean {
    return this._currentAmount >= price;
  }
}
