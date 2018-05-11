import { PaymentProcessor } from "./payment-processor";

export class VendingMachine {
  // @ts-ignore
  constructor(private payments = new PaymentProcessor()) {}

  releaseChange() {
    const refund = this.payments.disburse();
    return refund;
  }

  insertCents(centsInserted: number) {
    this.payments.acceptPayment(centsInserted);
  }

  buyProduct(): string {
    if (this.payments.isPaymentSufficient(50)) {
      this.payments.processPurchase(50);
      return "snickers";
    }
    return "";
  }
}
