import { IPiggyBank } from "./piggy-bank-stub";

export class PaymentProcessor {
  constructor(private piggyBank: IPiggyBank) {}

  acceptPayment(centsInserted: number) {
    this.piggyBank.deposit(centsInserted);
  }

  disburse(): number {
    const refund = this.piggyBank.balance();
    this.piggyBank.withdraw(refund);
    return refund;
  }

  isPaymentSufficient(price: number): boolean {
    return this.piggyBank.balance() >= price;
  }

  processPurchase(price: number) {
    this.piggyBank.withdraw(price);
  }
}
