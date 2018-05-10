export interface IPiggyBank {
  deposit(money: number): void;
  withdraw(money: number): number;
  balance(): number;
}
