// 1. until number from 3
console.log("1 exercise:");
let step = 3;

const untilNum = (num) => {
  if (step <= num) {
    console.log(step);
    step += 3;
    untilNum(num);
  }
};

untilNum(9);
untilNum(17);

// 2. range of numbers
console.log("2 exercise:");
const rangeOfNumbers = (a, b) => {
  for (let i = a; i <= b; i++) {
    console.log(i);
  }
};

rangeOfNumbers(3, 8);

// 3. function that write prime numbers from 1 to ur number
console.log("3 exercise - first way");
// First way not much effective
const startNumber = 1;

const isPrimeNumber = (num) => {
  let bool = false;
  for (let i = 1; i < num; i++) {
    bool += num % i === 0;
  }
  return bool > 1 ? false : true;
};

const primeRange = (fromNumber, untilNum) => {
  for (let i = fromNumber; i <= untilNum; i++) {
    isPrimeNumber(i) && console.log(i);
  }
};

console.log("Is 14 prime number: ", isPrimeNumber(14));
console.log("From 1 to 100 range: ");
primeRange(startNumber, 100);

// Second way more effective
console.log("3 exercise - second way");
const printPrimeSeries = (start, end) => {
  for (let i = start; i < end; i++) {
    if (findPrimeOrNot(i)) {
      console.log(`The value ${i} is a prime number`);
    }
  }
};

const findPrimeOrNot = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

printPrimeSeries(1, 100);

// third way
console.log("3 exercise - third way");

var eratosthenes = function (n) {
  // Eratosthenes algorithm to find all primes under n
  var array = [],
    upperLimit = Math.sqrt(n),
    output = [];

  // Make an array from 2 to (n - 1)
  for (var i = 0; i < n; i++) {
    array.push(true);
  }

  // Remove multiples of primes starting from 2, 3, 5,...
  for (var i = 2; i <= upperLimit; i++) {
    if (array[i]) {
      for (var j = i * i; j < n; j += i) {
        array[j] = false;
      }
    }
  }

  for (var i = 2; i < n; i++) {
    if (array[i]) {
      output.push(i);
    }
  }

  return output;
};

console.log(eratosthenes(100));

// 4 exercise: check the sum
console.log("4 exercise:");

const checkTheSum = (sum, num) => sum % num === 0;

console.log(checkTheSum(12, 4));
console.log(checkTheSum(15, 4));

// 5 exercise: like not like
let count = 1;
const likeOrNotLike = (num) => {
  
  do {
    count % 2 !== 0 ? console.log("like") : console.log("not like")
    count++
  } while (count <= num);
};
likeOrNotLike(13)