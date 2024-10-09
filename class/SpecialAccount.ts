import { DioAccount } from "./DioAccount"

export class SpecialAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (balance: number): void => {
        super.deposit(balance + 10)
    }
}