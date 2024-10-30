let original = document.getElementById("original").innerHTML = "I Love My Country Pakistan<br>I Love My City Faisalabad<br>I Love My Homeland";
let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Sheikhupura", "Kashmir"];

// -------------convert to lower case -----------
function clower() {
    let lowerCaseText = original.toLowerCase();

    document.getElementById("result").innerHTML = lowerCaseText;

}

// uppercase 

function upcase() {
    let upcaseText = original.toUpperCase();
    document.getElementById("result").innerHTML = upcaseText;
}

// capitalize 

function capitalize() {
    // let Cap = '<span style=" text-transform: capitalize; ">' + original + '</span>';
    // document.getElementById("result").innerHTML = Cap ;
    document.getElementById("result").style.textTransform = " capitalize";
    document.getElementById("result").innerHTML = original;
}

// betterFormating
function btr() {
    let text = document.getElementById("input").value;
    if (text === "") {
        alert("Please FILL Input Field");
        return;
    }

    text = text.toLowerCase();
    document.getElementById("result").style.textTransform = " capitalize";
    document.getElementById("result").innerHTML = text;

}

// PRINT ALL CITIES 
function prntCities() {

    document.getElementById("result").innerHTML = "";
    for (let i = 0; i < cities.length; i++) {
        document.getElementById("result").innerHTML += i + 1 + " ) " + cities[i] + "<br>";
    }
}

// Add city 
function add() {
    let add = document.getElementById("input").value;
    if (add === "") {
        alert("please Add new city ");
        return;
    }
    else if (add.length < 3) {
        alert("please Enter city Name above two characters ! ")
        return;
    }

    // let cityFirstLetter = add.slice(0,1).toUpperCase();
    // console.log(cityFirstLetter);
    // let cityallletter = add.slice(1).toLowerCase();
    // console.log(cityallletter);

    let cityFirstLetter = add.charAt(0).toUpperCase();
    let cityallletter = add.slice(1).toLowerCase();
    let cityAllWordsInCapitalize = cityFirstLetter + cityallletter;
    // console.log(cityAllWordsInCapitalize);

    let cityFound = false;
    for (let i = 0; i < cities.length; i++) {
        if (cities[i] === cityAllWordsInCapitalize) {
            cityFound = true;
            let html = '<span style="color:red; font-size:20px ;">"' + cityAllWordsInCapitalize + "</span> is Already Exist";
            document.getElementById("result").innerHTML = html;
        }
    }

    if (cityFound === false) {
        cities.push(cityAllWordsInCapitalize);
        let html = '<span style="color:green; font-size:20px ;">"' + cityAllWordsInCapitalize + "</span> Has been Successfuly Added";
        document.getElementById("result").innerHTML = html;
    }

}

// check city in list 
function chkCity() {

    let add = document.getElementById("input").value;
    if (add === "") {
        alert("please Add new city ");
        return;
    }
    else if (add.length < 3) {
        alert("please Enter city Name above two characters ! ")
        return;
    }
    let cityFirstLetter = add.charAt(0).toUpperCase();
    let cityallletter = add.slice(1).toLowerCase();
    let cityAllWordsInCapitalize = cityFirstLetter + cityallletter;

  let cityFound = false;
    for (let i = 0; i < cities.length; i++) {
        if (cities[i] === cityAllWordsInCapitalize) {
            cityFound = true;
            let html = '<span style="color:red; font-size:20px ;">"' + cityAllWordsInCapitalize + '' + "</span> is Already Exist " ;
            document.getElementById("result").innerHTML = html;
        }
    }

    if (cityFound === false) {
       
        let html = '<span > sorry we colud not find your city <br>"' + cityAllWordsInCapitalize + "</span> </br> please click on Add cities button to add Your city";
        document.getElementById("result").innerHTML = html;
    }
}

// Find word section start 
function findword()
{

//     let sometext = "my Name Is Imtiaz";
//     sometext = sometext.toLowerCase();

//     let wordOfInput = "Nae";
//     wordOfInput = wordOfInput.toLowerCase();

// let findWord = sometext.indexOf(wordOfInput);
// console.log(wordOfInput.length);
// console.log(findWord);


// if(findWord !== -1)
// {
//     alert("word found at index : " + findWord)
// }
// else{
//     alert("word not found")
// }

    // let myname = "IMtiaz";
    // myname = myname.toUpperCase();
    // console.log(myname);

    let NewOriginalText = original.toLowerCase();
    let word = document.getElementById("input").value;
    if(!word)
    {
        alert("Please type word for find");
        return;
    }
    word = word.toLowerCase();
    let findWord = NewOriginalText.indexOf(word);
    // console.log(findWord);
    if(findWord !== -1)
    {
        let html = '<span style="color:green; font-size:20px ;">"' + word + "'</span> Found at index :  " + findWord ;
        document.getElementById("result").innerHTML = html;
    }

    else{
        let html = '<span style="color:green; font-size:20px ;"> SORRY! "' + word + "'</span> is NOT Found  ";
        document.getElementById("result").innerHTML = html;
    }

}

// Replace Word 
function replace()
{
    // let cnic = "32301-7373768-5"
    // let word= "-";
    // let repaceWith = "";
    // word = new RegExp(word , 'g');
    // let cnicWithoutDashes = cnic.replace(word , repaceWith)
    // console.log(cnicWithoutDashes);


    // console.log(cnicWithoutDashes);

let NewOriginalText = original.toLowerCase();
let word = document.getElementById("input").value;
if(!word)
{
    alert("please type word in input field!");
    return;
}

let replaceWith = prompt("Please type a word which you want to replace with input word")
if(!replaceWith)
{
    alert("please type a word to replace with  " + word + " .")
    return;
}



word = word.toLowerCase();
word = new RegExp(word , 'g');
replaceWith = replaceWith.toLowerCase();

let newWordAfterReplace = NewOriginalText.replace(word , replaceWith)
document.getElementById("result").innerHTML = newWordAfterReplace;


}



