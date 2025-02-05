function createAccount(accNumber, initialAmount) {
    return { accNumber: accNumber, balance: initialAmount };
}

function deposit(account, amount) {
    account.balance += amount;
    console.log(`Deposited ${amount} into account ${account.accNumber}. New balance: ${account.balance}`);
}

function withdraw(account, amount) {
    if (amount > account.balance) {
        console.log(`Insufficient funds for account ${account.accNumber}`);
    } else {
        account.balance -= amount;
        console.log(`Withdrawn ${amount} from account ${account.accNumber}. New balance: ${account.balance}`);
    }
}

function runBankingOperations() {
    const account1 = createAccount("12200526", 1000);
    deposit(account1, 500);
    deposit(account1, 400);
    withdraw(account1, 600);

    document.getElementById("bank-output").innerText = `Account ${account1.accNumber} Final Balance: $${account1.balance}`;
}

// Customer Testimonials Scrolling
document.addEventListener('DOMContentLoaded', () => {
    const testimonialsContainer = document.getElementById('testimonials-container');
    const testimonies = testimonialsContainer.querySelectorAll('.testimony');
    let currentIndex = 0;

    function scrollTestimony() {
        testimonies[currentIndex].style.animation = 'none';
        currentIndex = (currentIndex + 1) % testimonies.length;
        testimonies[currentIndex].style.animation = 'scrollTestimony 4s ease-out forwards';
        setTimeout(scrollTestimony, 4000);
    }

    testimonies[currentIndex].style.animation = 'scrollTestimony 4s ease-out forwards';
    setTimeout(scrollTestimony, 4000);
});

// Testing JavaScript Basics
console.log("Welcome to Digital Banking!");
let institution = "LPU Bank";
console.log(institution);

const myBank = "LPU Bank";
console.log(myBank);
