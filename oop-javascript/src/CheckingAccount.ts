import { Account } from "./Account";
import { Client } from "./Client";

export class AccountChecking extends Account {
  static checkingAccountCount = 0;
  static checkingInitialValue = 0;
  static checkingTax = 1.1;

  constructor(
    private _checkingClient: Client,
    private _checkingAgency: string
  ) {
    super(
      AccountChecking.checkingInitialValue,
      _checkingClient,
      _checkingAgency,
      AccountChecking.checkingTax
    );

    AccountChecking.checkingAccountCount += 1;
  }
}
