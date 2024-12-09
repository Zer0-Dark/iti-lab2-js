
let theString = prompt("Enter a Sentence !");

function biggestWord(str) {
    let biggestWord = "";
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (biggestWord.length < arr[i].length) {

            biggestWord = arr[i];
        }
    }

    return biggestWord;

}

document.write(`<h3>The Sentence is <span style="color:blue"> ${theString} </span> <br><hr><br> The biggest Word is <span style="color:red">${biggestWord(theString)}</span> </h3> `);