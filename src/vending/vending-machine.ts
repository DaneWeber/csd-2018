import { PaymentProcessor } from "./payment-processor";

export class VendingMachine {
  constructor(private payments = new PaymentProcessor()) {}

  releaseChange() {
    const refund = this.payments.disburse();
    return refund;
  }

  insertCents(centsInserted: number) {
    this.payments.acceptPayment(centsInserted);
  }

  buyProduct(): string {
    if (this.payments.processPurchase()) {
      return "snickers";
    }
    return "";
  }
}
