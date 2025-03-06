console.log(Numbers)
let pricess = [20,34,55,67,22]
const even_nums=nums.filter((num)=>num%2==0)
console.log(even_nums)

const fruits = ['mango',"banana","Apple"]
const uppercase_fruits = fruits.map((fruit)=>fruitUpperCase())
console.log(uppercase_fruits)*/

const items = [
  { name: "Bike", price: 1000000 },
  { name: "TV", price: 10000000 },
  { name: "Phone", price: 50000 }
];
const names = items.map(item => item.name);
const prices = items.map(item => item.price);
console.log(names); 
console.log(prices); 

const raw_prices = [22.4555,77.899,34.666]
Rs 22.45, Rs 77.89
const raw_prices = [22.4555, 77.899, 34.666];
const formattedPrices = raw_prices.map(price => `Rs ${price.toFixed(2)}`);
console.log(formattedPrices);

const discountedItem = [
  { name: "Bike", price: 100000 },
  { name: "TV", price: 100000 },
  { name: "Phone", price: 5000 }
const discountedItem = item.find((item)=>item.price<100000)
if (discountedItem){
console.log(discountedItem.name)
}