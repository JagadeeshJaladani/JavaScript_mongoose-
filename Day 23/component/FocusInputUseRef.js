import React from 'react'
import {useState, useRef} from 'react'
const FocusInputUseRef = () => {
    const inputRef = useRef(null)
        const handleClick = () => {
            inputRef.current.focus();
}
    return (
         <div>
        <input  type='text' placeholder='Enter your name ' ref={inputRef}    />
        <button onClick={handleClick}> Focus input</button>
        </div>
    )
};
