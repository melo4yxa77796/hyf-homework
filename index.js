 javascript-javascript1-week3
//Item array removal
const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

// Write some code here
const index = names.indexOf(nameToRemove);
if (index !== -1) {
  names.splice(index, 1);
}

// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

//When will we be there??
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
function calculateTravelTime(travelInformation) {
  const speed = travelInformation.speed;
  const destination = travelInformation.destinationDistance;
  let time = destination / speed;
  const hours = Math.floor(time);
  const minutes = Math.round((time - hours) * 60);
  return `${hours} hours and ${minutes} minutes`;
}

const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes

//Series duration of my life
const seriesDurations = [
  {
    title: "Game of Thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "The Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
  {
    title: "Vikings",
    days: 2,
    hours: 17,
    minutes:16
  }
];

function calculatePercentageOfLife(days, hours, minutes, totalMinutesInLife) {
  const seriesDurationMinutes = (days * 24 * 60) + (hours * 60) + minutes;
  return (seriesDurationMinutes / totalMinutesInLife) * 100;
}

function logOutSeriesText() {
  const averageLifespanYears = 80;
  const totalMinutesInLife = averageLifespanYears * 365.25 * 24 * 60; // converting years to minutes
  
  let totalPercentage = 0;
  seriesDurations.forEach(series => {
    const percentageOfLife = calculatePercentageOfLife(series.days, series.hours, series.minutes, totalMinutesInLife);
    totalPercentage += percentageOfLife;
    console.log(`${series.title} took ${percentageOfLife.toFixed(3)}% of my life`);
  });

  console.log(`In total that is ${totalPercentage.toFixed(3)}% of my life`);
}

logOutSeriesText();

//Save a note
const notes = [];

function saveNote(content, id) {
  notes.push({ content, id });
}

function getNote(id) {
  if (typeof id !== 'number') {
    console.error('Error: ID must be a number.');
    return;
  }

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }

  console.error('Note not found.');
  return;
}

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(`The note with id: ${notes[i].id}, has the following note text: "${notes[i].content}".`);
  }
}

// Test the functions
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

logOutNotesFormatted(); 
// Should log:
// The note with id: 1, has the following note text: "Pick up groceries".
// The note with id: 2, has the following note text: "Do laundry".

function getFullname(firstname,surname){
  return firstname + " " + surname;
 
}

console.log(getFullname("Benjamin","Hughes"));

let fullname1 = getFullname("Benjamin", "Hughes");
let fullname2 = getFullname("Emma", "Smith");

console.log(fullname1); // returns "Benjamin Hughes"
console.log(fullname2); // returns "Emma Smith"


//Second 
function getFullname(firstname, surname, useFormalName = false, gender = "female") {
  let title = "";
  let fullname = "";

  if (useFormalName) {
      if (gender.toLowerCase() === "male") {
          title = "Lord ";
      } else {
          title = "Lady ";
      }
  }

  fullname += title + firstname;
  if (surname !== "") {
    fullname += " " + surname;
}

return fullname;
}

// Example usage:
var fullname5 = getFullname("Benjamin", "Hughes", true, "male");
var fullname6 = getFullname("Emma", "Smith", true, "female");
var fullname3 = getFullname("Chris", "Evans", true, "MALE"); // case-insensitive check
var fullname4 = getFullname("Alice", "Johnson", true, "FEMALE"); // case-insensitive check

console.log(fullname5); // returns "Lord Benjamin Hughes"
console.log(fullname6); // returns "Lady Emma Smith"
console.log(fullname3); // returns "Lord Chris Evans"
console.log(fullname4); // returns "Lady Alice Johnson"
//Event application

function getEventWeekday(daysFromToday) {
  // Array of weekdays
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Get today's date and weekday
  const today = new Date();
  const todayWeekday = today.getDay(); // 0 (Sunday) to 6 (Saturday)

  // Calculate the future weekday
  const eventWeekday = (todayWeekday + daysFromToday) % 7;

  // Return the name of the weekday
  return weekdays[eventWeekday];
}

// Example usage:
console.log(getEventWeekday(9)); // Logs out the weekday 9 days from today
console.log(getEventWeekday(2)); // Logs out the weekday 2 days from today



//Weather wear
;
function clothingAdvice(temperature){
   if(temperature <= 0){
    return "Sweater and hat and warm jacket";
   }else if(temperature >0 && temperature <= 15){
    return "Sweater and jacket"
   }else if(temperature >15 && temperature <= 20){
    return "T-shirt and jacket"
   } else if(temperature >20 && temperature <=25){
    return  "T-shirt and pants"
   }else{return "T-shirts and shorts"}

}
  const clothesToWear = clothingAdvice(15);
console.log(clothesToWear);



//Student manager
let class07Students = [];

function addStudentToClass(studentName) {
    if (studentName === "") {
        console.log("Cannot add an empty string as a student name.");
        return;
    }

    if (class07Students.includes(studentName)) {
        console.log(`Student ${studentName} is already in the class`);
        return;
    }

    if (class07Students.length >= 6 && studentName !== "Queen") {
        console.log("Cannot add more students to class 07");
        return;
    }

    class07Students.push(studentName);
    console.log(class07Students);
}

function getNumberOfStudents() {
  return class07Students.length;
}

// Example usage:
addStudentToClass("Benjamin"); // Adds Benjamin to the class
addStudentToClass("Alice");    // Adds Alice to the class
addStudentToClass("");         // Logs: Cannot add an empty string as a student name.
addStudentToClass("Alice");    // Logs: Student Alice is already in the class
addStudentToClass("John");
addStudentToClass("Jane");
addStudentToClass("Mariya");
addStudentToClass("Jerry");    // Logs: Cannot add more students to class 07
addStudentToClass("Queen");    // Always adds Queen even if the class is full


 console.log(getNumberOfStudents());
  
//Candy helper optional

let boughtCandyPrices=[]
function pricePerGramOfCandy(candyType) {
  switch (candyType) {
      case "sweet":
          return 0.5;
      case "chocolate":
          return 0.7;
      case "toffee":
          return 1.1;
      case "chewing-gum":
          return 0.03;
      default:
          console.log("Unknown candy type");
          return 0; // Return 0 for unknown candy types to avoid incorrect calculations
  }
}


function addCandy(candyType,weight){
  let pricePerGram = pricePerGramOfCandy(candyType);
  boughtCandyPrices.push(pricePerGram * weight)
 }
addCandy("sweet",20);
console.log(boughtCandyPrices);

let amountToSpend=Math.random() * 100;
function canBuyMoreCandy(){
  let totalSpent = 0;

  for (let i = 0; i < boughtCandyPrices.length; i++) {
      //totalSpent += boughtCandyPrices[i];
  }

  if (totalSpent < amountToSpend) {
      //console.log("You can buy more, so please do!");
      //return true;
  } else {
      //console.log("Enough candy for you!");
      //return false;
  }
}

// Example usage
addCandy("sweet", 20);  // Adds the price of 20 grams of sweets to the array
addCandy("chocolate", 30); // Adds the price of 30 grams of chocolate to the array
addCandy("toffee", 10); // Adds the price of 10 grams of toffee to the array
addCandy("chewing-gum", 50); // Adds the price of 50 grams of chewing-gum to the array

// Check if more candy can be bought
canBuyMoreCandy();

