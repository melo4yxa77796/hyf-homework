
const args = process.argv.slice(2);


const calculateAverage = (numbers) => {
  
const numbers = args
  .map(arg => parseFloat(arg)) 
  .filter(num => !isNaN(num)); 

  if (numbers.length === 0) return 'No numbers provided';

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return (sum / numbers.length).toFixed(2); 
};




if (numbers.length === 0) {
  console.log('No valid numbers provided');
} else {
  const average = calculateAverage(numbers);
  console.log(average);
}
