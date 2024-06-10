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

