//* task 1
let radius = prompt("What is the value of your circle's radius?");

let area = Math.PI * Math.pow(Number(radius), 2);
alert(`The total area of the circle is ${area}`);


//* task2
let value = prompt("What is the value you want to calculate its square root?");

let sqrt = Math.sqrt(Number(value));
alert(`The square root of ${value} is ${sqrt}`);


//* task3
let angle = prompt("Enter an angle to calculate its cosine value:");

let cosValue = Math.cos(Number(angle) * (Math.PI / 180)); // Convert angle to radians
document.write(`<h1>cos ${angle}° is ${cosValue} </h1>`)

