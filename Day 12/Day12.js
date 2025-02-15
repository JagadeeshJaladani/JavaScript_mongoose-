import React, { createContext, useContext, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const AppContext = createContext();
export default function App() {
  const [state, setState] = useState({
    currentPage: "home",
    productPage: "list", 
    selectedProduct: null,
  });
  return (
    <AppContext.Provider value={{ state, setState }}>
      <Card className="w-full max-w-md mx-auto mt-10">
        <CardHeader>
          <h1 className="text-xl font-bold text-center">Home</h1>
        </CardHeader>
        <CardContent>
          {state.currentPage === "home" && <Home />}
          {state.currentPage === "profile" && <Profile />}
          {state.currentPage === "cart" && <Cart />}
          {state.currentPage === "product" && <Product />}
        </CardContent>
      </Card>
    </AppContext.Provider>
  );
}
function Home() {
  const { setState } = useContext(AppContext);

  return (
    <div className="flex flex-col gap-4">
      <Button onClick={() => setState((prev) => ({ ...prev, currentPage: "product" }))}>
        Go to Product
      </Button>
      <Button onClick={() => setState((prev) => ({ ...prev, currentPage: "profile" }))}>
        Go to Profile
      </Button>
      <Button onClick={() => setState((prev) => ({ ...prev, currentPage: "cart" }))}>
        Go to Cart
      </Button>
    </div>
  );
}
function Profile() {
  const { setState } = useContext(AppContext);
  return (
    <div>
      <h2 className="text-lg font-semibold">Profile</h2>
      <Button className="mt-4" onClick={() => setState((prev) => ({ ...prev, currentPage: "home" }))}>
        Back to Home
      </Button>
    </div>
  );
}
function Cart() {
  const { setState } = useContext(AppContext);
  return (
    <div>
      <h2 className="text-lg font-semibold">Cart</h2>
      <Button className="mt-4" onClick={() => setState((prev) => ({ ...prev, currentPage: "home" }))}>
        Back to Home
      </Button>
    </div>
  );
}
function Products() {
  const { state, setState } = useContext(AppContext);

  const products = [
    { id: 1, name: "Product 1", details: "Details about Product 1" },
    { id: 2, name: "Product 2", details: "Details about Product 2" },
  ];

  if (state.productPage === "details" && state.selectedProduct) {
    return (
      <div>
        <h2 className="text-lg font-semibold">{state.selectedProduct.name}</h2>
        <p>{state.selectedProduct.details}</p>
        <Button
          className="mt-4"
          onClick={() => setState((prev) => ({ ...prev, productPage: "list", selectedProduct: null }))}
        >
          Back to Product List
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Product List</h2>
      {products.map((product) => (
        <Button
          key={product.id}
          onClick={() =>
            setState((prev) => ({
              ...prev,
              productPage: "details",
              selectedProduct: product,
            }))
          }
        >
          {product.name}
        </Button>
      ))}
      <Button className="mt-4" onClick={() => setState((prev) => ({ ...prev, currentPage: "home" }))}>
        Back to Home
      </Button>
    </div>
  );
}
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