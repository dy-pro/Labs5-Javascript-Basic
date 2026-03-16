// Subtask 2.1 Declare Variables
var studentName = "Ardyan Satya Perkasa";
let studentAge = 33;
const learningTrack = "Fullstack Developer (MERN)";

// Subtask 2.2 Display Variable Values
console.log(studentName);
console.log(studentAge);
console.log(learningTrack);

let elName = document.getElementById("display-name");
let elAge = document.getElementById("display-age");
let elTrack = document.getElementById("display-track");
elName.innerText = `Nama Siswa: ${studentName}`;
elAge.innerText = `Usia: ${studentAge}`;
elTrack.innerText = `Learning Track: ${learningTrack}`;


// Subtask 3.1 Use Different Data Types
let myString = "This is string";
let myNumber = 100;
let myBool = true;
let myArray = [10, 20, 30, 40, 50];
let myObject = {
    name : "Ardyan Satya",
    age : 33,

    greeting() {
        conxole.log("Hello my name " + this.name);
    }
}

// Subtask 3.2 Check Data Types
console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof myBool);
console.log(typeof myArray);
console.log(typeof myObject);

// Subtask 4.1 Use Arithmetic Operators
let mySum = 5 + 5;
let mySubs = 10 - 5;
let myMult =  2 * 3;
let myDiv = 20 / 5;

console.log("5 + 5 = " + mySum);
console.log("10 - 5 = " + mySubs);
console.log("2 x 3 = " + myMult);
console.log("20 : 5 = " + myDiv);


// Subtask 4.2 Use Comparison and Logical Operators
let umur = 20;
let bawaKTP = true;
let cuacaBadai = false;

// Aturan: Harus umur 17+ DAN bawa KTP DAN cuaca TIDAK badai
if (umur >= 17 && bawaKTP === true && !cuacaBadai) {
    console.log("Izin Mendaki Diterbitkan: Selamat mendaki!");
} else {
    console.log("Izin Ditolak: Cek kembali persyaratan atau cuaca.");
}
