// Base Class: BankAccount
class BankAccount {
    #accountNo;
    #accountHolder;
    #balance;

    constructor(accountNo, accountHolder, balance = 0) {
        this.#accountNo = accountNo;
        this.#accountHolder = accountHolder;
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposit successful. New balance: $${this.#balance}`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrawal successful. New balance: $${this.#balance}`);
        } else {
            console.log('Insufficient balance or invalid amount.');
        }
    }

    displayBalance() {
        console.log(`Account Balance: $${this.#balance}`);
        return this.#balance;
    }

    // Getter methods for encapsulated properties
    getAccountNo() {
        return this.#accountNo;
    }

    getAccountHolder() {
        return this.#accountHolder;
    }
}

// Subclass: SavingAccount
class SavingAccount extends BankAccount {
    #interestRate;
    #withdrawalLimit;
    #penaltyFee;

    constructor(accountNo, accountHolder, balance = 0, interestRate = 0.02, withdrawalLimit = 1000, penaltyFee = 50) {
        super(accountNo, accountHolder, balance);
        this.#interestRate = interestRate;
        this.#withdrawalLimit = withdrawalLimit;
        this.#penaltyFee = penaltyFee;
    }

    addInterest() {
        let interest = super.displayBalance() * this.#interestRate;
        this.deposit(interest);
        console.log(`Interest added: $${interest}`);
    }

    withdraw(amount) {
        if (amount > this.#withdrawalLimit) {
            console.log(`Withdrawal exceeds the limit. Penalty of $${this.#penaltyFee} will be applied.`);
            amount += this.#penaltyFee;
        }
        super.withdraw(amount);
    }
}

// UI Implementation
document.addEventListener('DOMContentLoaded', () => {
    const account = new SavingAccount('123456', 'John Doe', 500);

    document.getElementById('depositBtn').addEventListener('click', () => {
        const amount = parseFloat(document.getElementById('amount').value);
        account.deposit(amount);
        updateBalance();
    });

    document.getElementById('withdrawBtn').addEventListener('click', () => {
        const amount = parseFloat(document.getElementById('amount').value);
        account.withdraw(amount);
        updateBalance();
    });

    document.getElementById('addInterestBtn').addEventListener('click', () => {
        account.addInterest();
        updateBalance();
    });

    function updateBalance() {
        document.getElementById('balanceDisplay').innerText = `Balance: Rs${account.displayBalance()}`;
    }

    updateBalance();
});
