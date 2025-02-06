// Function 1: Calculate Discount
// This function calculates the final price after applying a discount
function calculateDiscount(price, discount = 10) {
    let discountAmount = (discount / 100) * price;
    let finalPrice = price - discountAmount;
    return finalPrice;
}

console.log(calculateDiscount(300));  // Default discount 10%
console.log(calculateDiscount(300, 20));  // Custom discount 20%

// --------------------------------------------------------------------------------

// Function 2: Merge Arrays using Spread Operator
// This function merges two arrays into one using the spread operator
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const mergedArray = mergeArrays(array1, array2);
console.log(mergedArray);  // Output: [1, 2, 3, 4, 5, 6]

// --------------------------------------------------------------------------------

// Function 3: Log Arguments Using Rest Parameter
// This function logs any number of arguments passed to it
function logArguments(...args) {
    console.log(args);
}

logArguments(1, 2, 3, 4, 5);
logArguments("Hello", "World");
logArguments();  // Empty array []

// --------------------------------------------------------------------------------

// Function 4: Create Personalized Messages
// This function takes a default message and multiple names, returning an array of messages
function createMessage(defaultMessage, ...names) {
    return names.map(name => `${defaultMessage}, ${name}!`);
}

const messages = createMessage("Heyyy", "Maddy", "Abhiii", "Yash");
console.log(messages);
// Output: ["Heyyy, Henlo!", "Heyyy, Chestha!", "Heyyy, Ludwick!"]

// --------------------------------------------------------------------------------

// Function 5: Sum of Three Numbers Using Spread Operator
// This function returns the sum of three numbers
function sum(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));  // Output: 6

// --------------------------------------------------------------------------------

// Function 6: Create User Profile with Default Parameters
// This function creates a user profile with default values for age and country
function createUserProfile(username, age = 25, country = "Unknown") {
    return {
        username: username,
        age: age,
        country: country
    };
}

const user1 = createUserProfile("Sita");
console.log(user1);  
// Output: { username: 'Sita', age: 25, country: 'Unknown' }

const user2 = createUserProfile("Rama", 30, "India");
console.log(user2);
// Output: { username: 'Rama', age: 30, country: 'India' }

// --------------------------------------------------------------------------------

// Function 7: Demonstrate Function Parameters with Defaults
// This function demonstrates default function parameters
function myFunction(x, y = 7, z = 42) {
    console.log({ x, y, z });
    return x + y + z;
}

console.log(myFunction(1));  // Output: { x: 1, y: 7, z: 42 }, returns 50
