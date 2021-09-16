import { Client } from "./Client";

export class Account {
  constructor(
    private _accountValue: number = 0, 
    private _client: Client,
    private _agency: string,
    private _tax: number = 0
  ) {
  }

  set client(newClient) {
    if (newClient instanceof Client) {
      this._client = newClient;
    }
  }

  set accountValue(value: number) {
    this._accountValue = value;
  }

  get client() {
    return this._client;
  }

  get accountValue() {
    return this._accountValue;
  }

  deposit(value: number) {
    return (this._accountValue = this._accountValue + value);
  }

  withdraw(value: number) {
    const tax = this._tax * value
    if (this._accountValue >= (value + tax)){
      return (this._accountValue = this._accountValue - value - tax);
    }
  }

  transfer(value: number, client: Account) {
    if (client instanceof Account && this._accountValue > value) {
      client.accountValue = client.accountValue + value;
    }
  }
}
