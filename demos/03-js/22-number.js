const amountToTransferStr = '1500.50';
const amountToTransferNum = parseFloat(amountToTransferStr);
const amountToTransferInt = parseInt(amountToTransferStr);
const amount = +amountToTransferStr; // easiest way

console.log(amountToTransferNum);
console.log(amountToTransferInt);
console.log(amount);

const num = 3.14159;
console.log(num.toFixed(4));