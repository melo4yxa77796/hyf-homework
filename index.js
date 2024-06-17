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
