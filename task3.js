let numbers = prompt("Enter 5 numbers spreated by comma");


let arr = numbers.split(",");

document.write(`<h2><span style="color:red">The Numbers are </span> ${arr}</h2>`);
document.write(`<h2><span style="color:red">The decending sorting: </span> ${arr.sort((a, b) => b - a)}</h2>`);
document.write(`<h2><span style="color:red">The ascending sorting: </span> ${arr.sort((a, b) => a - b)}</h2>`);