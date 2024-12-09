//*The User Name
let userName = prompt("Enter your name");
while (!isNaN(userName) || userName == "") {
    userName = prompt("Please Enter a Valid name (characters only)");
}

console.log(userName);

//*The User Phone
let userPhone = prompt("Enter your phone number");
while (isNaN(+userPhone) || userPhone.length !== 8) {
    userPhone = prompt("Please Enter a Valid phone number (8 numbers only)");
}

console.log(userPhone);

//*The User Mobile
let userMobile = prompt("Enter your mobile number");
const mobileRegex = /^(010|011|012)\d{8}$/; // the regExp
while (!mobileRegex.test(userMobile)) {
    userMobile = prompt("Please Enter a Valid mobile number (11 numbers only)");
}

console.log(userMobile);

//*The User Email
let userEmail = prompt("Enter your email");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // the regExp
while (!emailRegex.test(userEmail)) {
    userEmail = prompt("Please Enter a Valid email");
}

console.log(userEmail);

// *making the user choose The color

let userColor = prompt("Enter your favorite color (red | green |blue) or skip for random color?");

if (userColor == "red" || userColor == "green" || userColor == "blue") {
    userColor = userColor;
} else {
    userColor = Math.floor(Math.random() * 3);
    if (userColor == 0) {
        userColor = "red";
    } else if (userColor == 1) {
        userColor = "green";
    } else {
        userColor = "blue";
    }
}

console.log(userColor);




// * The User Info


document.write("<h1>Entering User Info</h1>");
document.write("<hr>");
document.write(`<h1 style="color:${userColor}">Welcome Dear Guest <span style="color:black">${userName}</span></h1>`);
document.write(`<h1 style="color:${userColor}">Your Telephone Number is <span style="color:black">${userPhone}</span></h1>`);
document.write(`<h1 style="color:${userColor}">Your Mobile Number is <span style="color:black">${userMobile}</span></h1>`);
document.write(`<h1 style="color:${userColor}">Your Email is <span style="color:black">${userEmail}</span></h1>`);
