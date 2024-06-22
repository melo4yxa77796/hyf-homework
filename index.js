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
