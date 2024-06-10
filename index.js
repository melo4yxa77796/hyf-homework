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

  if (useFormalName) {
      if (gender.toLowerCase() === "male") {
          title = "Lord ";
      } else {
          title = "Lady ";
      }
  }

  return title + firstname + " " + surname;
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
function youCreateThisFunctionName(temperature){
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
  const clothesToWear = youCreateThisFunctionName(15);
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
  
