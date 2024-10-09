import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.setDoc_id(111)
peopleAccount.deposit(100)
console.log(peopleAccount.getBalance())
console.log(peopleAccount.getDoc_id())

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(200)
console.log(companyAccount)
console.log(companyAccount.getBalance())

const specialAccount: SpecialAccount = new SpecialAccount('Hudson', 123)
specialAccount.deposit(300)
console.log(specialAccount.getBalance())