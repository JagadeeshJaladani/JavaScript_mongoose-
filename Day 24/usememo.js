import { useState, useMemo } from "react";

function ExpensiveCalculation({ num }) {
    const factorial = useMemo(() => {
        console.log("Calculating...");
        return num <= 1 ? 1 : num * factorial(num - 1);
    }, [num]);

    return <p>Factorial: {factorial}</p>;
}
