export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  getAccountNumber = (): number => {
    return this.accountNumber
  }

  deposit (balance: number): void {
    if (this.validateStatus()) {
      this.balance += balance
    }
  }

  withdraw = (balance: number): number => {
    if (this.validateStatus() && this.balance > balance) {
      this.balance -= balance;
      return balance
    }

    throw new Error('Saldo insuficiente para saque')
  }

  getBalance = (): number => {
    return this.balance
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta desativada')
  }
}
