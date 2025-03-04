import { useState, useCallback } from "react";

function Button({ handleClick }) {
    return <button onClick={handleClick}>Click me</button>;
}

function Parent() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount((prev) => prev + 1);
    }, []);

    return (
        <div>
            <p>Count: {count}</p>
            <Button handleClick={handleClick} />
        </div>
    );
}
