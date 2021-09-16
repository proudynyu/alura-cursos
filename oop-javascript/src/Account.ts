import { Client } from "./Client";

export class Account {
  constructor(public accountValue: number, public client: Client) {}

  deposit(value: number) {
    return (this.accountValue = this.accountValue - value);
  }

  withdraw(value: number) {
    return (this.accountValue = this.accountValue + value);
  }

  transfer(value: number, client: Account) {
    if (client instanceof Account && this.accountValue > value) {
      client.accountValue = client.accountValue + value;
    }
  }
}
