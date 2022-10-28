import { Account } from './Account'
import { AccountSavings } from './AccountSavings'
import { AccountChecking } from './CheckingAccount'
import { Client } from './Client'

const baseAgency = 'imaginary'

const firstClient = new Client('Igor', 111222333444)
const secondClient = new Client('Ana', 222333444)

const firstClientAccount = new AccountChecking(firstClient, baseAgency)
firstClientAccount.deposit(500)
firstClientAccount.withdraw(100)

const secondClientAccount = new AccountSavings(102, secondClient, baseAgency)

const transferValue = 200
firstClientAccount.transfer(transferValue, secondClientAccount)

console.log('Ana\'s Account value is: ', secondClientAccount.accountValue)

console.log(firstClientAccount)
console.log(secondClientAccount)