//import React from "react";

function myfxn(val) {
    console.log("This is a function");
    callback();
}

function callback() {
    console.log("I am a callback fxn");
}

myfxn(callback);