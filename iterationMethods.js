//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
1) Create a new array containing numbers that are greater than or equal to 25.
2) Create a new array containing numbers that are divisible by 5.
******************************************************************/

const numbersGreaterThan25 = numbers.filter((number) => (number > 25));
const numbersDivisibleBy5 = numbers.filter((number) => (number % 5 === 0));

console.log(numbersGreaterThan25, numbersDivisibleBy5);
