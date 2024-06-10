console.log("Hello world");
//task one
let yearOfBirth = 1989;
let yearFuture=2027;
let age = yearFuture - yearOfBirth;
console.log(`You will be  ${age}  years old in  ${yearFuture}  .`);
//task two
let dogYearOfBirth = 2015;  
let dogYearFuture = 2027;   
let dogYear = dogYearFuture - dogYearOfBirth; // Calculate the age in human years

// Step 2: Add the extra variable
let shouldShowResultInDogYears = true;  // Change this to false to show result in human years

// Step 3: Calculate the age in dog years if needed
let ageInDogYears = dogYear * 7;

// Step 4: Log the result based on the value of shouldShowResultInDogYears
if (shouldShowResultInDogYears) {
  console.log("Your dog will be " + ageInDogYears + " dog years old in " + dogYearFuture + ".");
} else {
  console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture + ".");
}
//task 3
// Function to calculate house price
function calculateHousePrice(width, depth, height, gardenSize) {
    const volumeInMeters = width * depth * height;
    const housePrice = volumeInMeters * 2.5 * 1000 + gardenSize * 300;
    return housePrice;
  }
  
  // Peter's house details
  const peterWidth = 8;
  const peterDepth = 10;
  const peterHeight = 10;
  const peterGardenSize = 100;
  const peterActualCost = 2500000;
  
  const peterCalculatedPrice = calculateHousePrice(peterWidth, peterDepth, peterHeight, peterGardenSize);
  console.log("Peter's calculated house price: " + peterCalculatedPrice);
  console.log("Peter's actual house cost: " + peterActualCost);
  if (peterCalculatedPrice > peterActualCost) {
    console.log("Peter is paying less than the calculated price. Good deal!");
  } else {
    console.log("Peter is paying more than the calculated price. Not a good deal.");
  }
  
  // Julia's house details
  const juliaWidth = 5;
  const juliaDepth = 11;
  const juliaHeight = 8;
  const juliaGardenSize = 70;
  const juliaActualCost = 1000000;
  
  const juliaCalculatedPrice = calculateHousePrice(juliaWidth, juliaDepth, juliaHeight, juliaGardenSize);
  console.log("Julia's calculated house price: " + juliaCalculatedPrice);
  console.log("Julia's actual house cost: " + juliaActualCost);
  if (juliaCalculatedPrice > juliaActualCost) {
    console.log("Julia is paying less than the calculated price. Good deal!");
  } else {
    console.log("Julia is paying more than the calculated price. Not a good deal.");
  }
  //task 4
// Step 1: Create the arrays
const firstWords = ["Easy", "Awesome", "Corporate", "Creative", "Innovative", "Dynamic", "Smart", "NextGen", "Tech", "Green"];
const secondWords = ["Solutions", "Enterprises", "Ventures", "Technologies", "Networks", "Systems", "Hub", "Labs", "Dynamics", "Corporation"];

// Step 2: Generate random indices
const randomIndex1 = Math.floor(Math.random() * 10);
const randomIndex2 = Math.floor(Math.random() * 10);

// Step 3: Create the startup name
const startupName = firstWords[randomIndex1] + " " + secondWords[randomIndex2];

// Step 4: Log the startup name and its character count
console.log("The startup: \"" + startupName + "\" contains " + startupName.length + " characters.");
  


