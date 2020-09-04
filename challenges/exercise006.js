/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (!arr) throw new Error("arr is required");
  if (!Array.isArray(arr)) throw new Error("an Array is required");
  
  let total = 0;
  arr.forEach(n => {
    if (n % 5 === 0 || n % 3 === 0) {
      total += n;
    }
  })
  return total;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (str.constructor != String) throw new Error("a string is required");

  if (str.match(/[^GCTA]/)){ //if dnaArray contains anything that isn't G,T,C,A
    return(false)
  }
  return(true)
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (str.constructor != String) throw new Error("a string is required");
  if (str.match(/[^GCTA]/)) throw new Error("string must only have characters CGTA!");

  str = str.replace(/T/g, "X");
  str = str.replace(/A/g, "T");
  str = str.replace(/X/g, "A");

  str = str.replace(/C/g, "Y");
  str = str.replace(/G/g, "C");
  str = str.replace(/Y/g, "G");

  return(str)
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  if (n.constructor != Number) throw new Error("a number is required");

  function isPrime(n) {
    // If n is less than 2 or not an integer then by definition cannot be prime.
    if (n < 2) {return false}
    if (n != Math.round(n)) {return false}
 
    // Now assume that n is prime, we will try to prove that it is not.
    var isPrime = true;
 
    // Now check every whole number from 2 to the square root of n. If any of these divides n exactly, n cannot be prime.
    for (var i = 2; i <= Math.sqrt(n); i++) {
       if (n % i == 0) {isPrime = false}
    }
 
    // Finally return whether n is prime or not.
    return isPrime;
 }
 return(isPrime(n));
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  if (n.constructor != Number) throw new Error("a number is required");
  if (fill.constructor != String) throw new Error("a string is required");
  if (n <= 0) throw new Error("n must be > 0");
  if (!Number.isInteger(n) ) throw new Error("n must be integer");

  function matrix(n, fillstr) {
    var result = []
    for(var i = 0; i < n; i++) {
        result.push(new Array(n).fill(fillstr))
    }
    return result
  }
  return(matrix(n, fill));
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  if (staff.length === 0) {
    return(false);
  }
  if (day != "Monday" && day != "Tuesday" && day != "Wednesday" && day != "Thursday"
      && day != "Friday" && day != "Saturday" && day != "Sunday") 
    throw new Error("day is not valid");
  
  count_staff = 0
  staff.forEach(n => {
    rota_days = n.rota

    if (rota_days.includes(day)) {
      count_staff += 1
    }
  })
  if (count_staff < 3) {
    return(false)
  } else {
    return(true)
  }
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
