const args = process.argv.slice(2);

const calculateAverage = (numbers) => {
    if (numbers.length === 0) return 'No numbers provided';
  
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return (sum / numbers.length).toFixed(2); // Return average rounded to 2 decimal places
  };

  const numbers = args
  .map(arg => parseFloat(arg)) // Convert arguments to numbers
  .filter(num => !isNaN(num)); // Filter out NaN values

if (numbers.length === 0) {
  console.log('No valid numbers provided');
} else {
  const average = calculateAverage(numbers);
  console.log(average);
}