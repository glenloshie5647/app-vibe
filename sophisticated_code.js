/*
 * Filename: sophisticated_code.js
 * Description: Complex code demonstrating data manipulation and algorithmic problem-solving
 */

// Helper function to generate a random number given a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate an array of random numbers
function generateRandomArray(size, min, max) {
  const randomArray = [];
  for (let i = 0; i < size; i++) {
    randomArray.push(getRandomNumber(min, max));
  }
  return randomArray;
}

// Function to calculate the sum of an array
function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Function to find the maximum element in an array
function findMaxElement(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Function to find the minimum element in an array
function findMinElement(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// Function to sort an array in ascending order using bubble sort algorithm
function bubbleSort(arr) {
  const len = arr.length;
  let isSwapped;
  do {
    isSwapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwapped = true;
      }
    }
  } while (isSwapped);
  return arr;
}

// Generate a random array of size 100 with numbers ranging from 1 to 1000
const randomArray = generateRandomArray(100, 1, 1000);

// Calculate and print the sum of the random array
const sum = calculateSum(randomArray);
console.log("Sum of the array:", sum);

// Find and print the maximum element of the random array
const maxElement = findMaxElement(randomArray);
console.log("Maximum element in the array:", maxElement);

// Find and print the minimum element of the random array
const minElement = findMinElement(randomArray);
console.log("Minimum element in the array:", minElement);

// Sort the random array using bubble sort algorithm
const sortedArray = bubbleSort(randomArray);
console.log("Sorted array:", sortedArray);