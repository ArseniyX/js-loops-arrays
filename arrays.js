// 1. function that get array of numbers and return sum of them
const sumOfArray = (array) => array.reduce((a, b) => a + b);

console.log(1, sumOfArray([2, 234, 234, 1, 2]));

// 2. average of grades
const gradesAverage = array =>
  parseFloat((array.reduce((a, b) => a + b) / array.length).toFixed(3));

console.log(2, gradesAverage([34, 98, 70, 1, 55]));

// 3. function get array of numbers and number return sum of numbers that bigger then the number
const moreThenNum = (array, num) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > num) {
      sum += array[i];
    }
  }
  return sum;
};
console.log(3, moreThenNum([12, 100, 43, 94], 55));

// 4. search function that get array and seek number and looking how much times this number includes
const searchNumber = (array, num) => array.filter((i) => num === i).length;
const array = [1, 4, 7, 9, 7, 55, 7, 6, 3];

console.log(4, searchNumber(array, 7));

// 5. function that get array and filter just even numbers

const evenNumbers = array => array.filter(i => i % 2 === 0).sort()

console.log(5, evenNumbers([4, 9, 2, 13, 7, 6, 3]))

// 6. function that get array of objects and return new object with average of grades
const students = [
  {
    firstName: "Eli",
    grades: [90, 80, 60],
  },
  {
    firstName: "Evyatar",
    grades: [95, 100, 78],
  },
];
const studentsInfo = array => {
  for (let i = 0; i < array.length; i++) {
    array[i].grades = gradesAverage(array[i].grades);
  }
  return students;
};

console.log(6, studentsInfo(students));
