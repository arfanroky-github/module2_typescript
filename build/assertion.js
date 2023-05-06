"use strict";
let emni;
emni = "alsfjasd";
// 1
emni.length;
//2 
emni.length;
function kgToGram(param) {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return value;
    }
    if (typeof param === "number") {
        const value = param * 1000;
        return value;
    }
}
const result = kgToGram(100);
const result2 = kgToGram("324");
try {
}
catch (error) {
    console.log(error.message);
}
