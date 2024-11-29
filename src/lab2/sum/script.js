let bankAccount = {
    balance: 500, 
    deposit: function(amount) {
        this.balance += amount;
        return this.balance;
    },

    withdraw: function(amount) {
        if (amount > this.balance) {
            return 'Недостаточно средств на счете';
        } else {
            this.balance -= amount;
            return this.balance;
        }
    }
};

document.getElementById('bankForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const choice = document.getElementById('operation').value;

    let result;

    if (choice === "внести") {
        result = bankAccount.deposit(amount);
    } else if (choice === "снять") {
        result = bankAccount.withdraw(amount);
    }

    document.getElementById('result').textContent = `Результат: ${result}`;
});
