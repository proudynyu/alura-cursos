import { Account } from './Account'
import { Client } from './Client'

const firstClient = new Client('Igor', 111222333444)
const secondClient = new Client('Ana', 222333444)

const firstClientAccount = new Account(1001, firstClient)
firstClientAccount.deposit(500)
firstClientAccount.withdraw(100)

const secondClientAccount = new Account(102, secondClient)

const transferValue = 200
firstClientAccount.transfer(transferValue, secondClientAccount)

console.log('Ana\'s Account value is: ', secondClientAccount.accountValue)