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

// console.log(numbersGreaterThan25, numbersDivisibleBy5);


/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

3) Create a new array that contains each number squared.
4) Create a new array that contains each number multiplied by 2.
******************************************************************/

const numbersSquared = numbers.map((number) => number ** 2)
const numbersDoubled = numbers.map((number) => number * 2);

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

5) Filter the numbers that are greater than or equal to 20 and then square each of them.
6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/

const numbersGreaterThan20Squared = numbers.filter((number) => (number > 20)).map((number) => number ** 2);

console.log(numbersGreaterThan20Squared);