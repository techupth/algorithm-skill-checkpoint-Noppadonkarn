// Problem
// Write a function getTop2MaxNumbers that takes an array of numbers as input
// and returns an array containing the top two maximum numbers
// from the input array and if there are duplicated numbers, please remove them

// Examples:
// getTop2MaxNumbers([10, 40, 20, 2, 9, 19]) === [40, 20]
// getTop2MaxNumbers([-10, -40, -20, -2, -9, -19]) === [-2, -9]
// getTop2MaxNumbers([10, 40, 20, 2, 40, 9, 19]) === [40, 20]

export const getTop2MaxNumbers = (numbers) => {
  const sortNumber = numbers.sort((a, b) => b - a);
  const newSortArrayNumber = [];
  for(let i=0; i<sortNumber.length; i++){
    if (!newSortArrayNumber.includes(sortNumber[i])) {
      newSortArrayNumber.push(sortNumber[i]);
    }
  }
  const top2MaxNumber = newSortArrayNumber.splice(0,2)

  return top2MaxNumber;
};

console.log(getTop2MaxNumbers([10, 40, 20, 2, 9, 19]));
console.log(getTop2MaxNumbers([-10, -40, -20, -2, -9, -19]));
console.log(getTop2MaxNumbers([10, 40, 20, 2, 40, 9, 19]));
