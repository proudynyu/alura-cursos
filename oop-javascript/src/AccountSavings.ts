import { Account } from "./Account";
import { Client } from "./Client";

export class AccountSavings extends Account {
  static savingsAccountCount = 0;
  static savingsInitialValue = 0;
  static savingsTax = 0;

  constructor(
    private _savingsInitialValue: number = AccountSavings.savingsInitialValue,
    private _savingsClient: Client,
    private _savingsAgency: string
  ) {
    super(
      _savingsInitialValue,
      _savingsClient,
      _savingsAgency,
      AccountSavings.savingsTax
    );
    AccountSavings.savingsAccountCount += 1;
  }
}
