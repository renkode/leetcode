/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 1. Two Sum
// iterate thru array, setting i as a "target", then test the sum with the rest of the array elements on this target
var twoSum = function (nums, target) {
  let currentNum;
  let indices;
  for (let i = 0; i <= nums.length; i++) {
    if (indices) break;
    currentNum = nums[i];
    nums.forEach((n, index) => {
      if (i === index) return;
      if (currentNum + n === target) {
        indices = [i, index]; // god please don't forget that indexOf returns the index of the first repeating element
      }
    });
  }
  //if (indices) indices.sort((a,b) => a - b);
  return indices;
};

/**
 * @param {string} s
 * @return {number}
 */
// 2. Roman to Integer
// priority system? CM > CD > XC > XL > IX > IV > M > D > C > L > X > V > I
// put above in array of objects? then iterate thru array to count how many times each type of roman numeral shows up
// slice from string each count, also check if string is empty, if so, break
const romanNums = [
  (CM = {
    name: "CM",
    value: 900,
    occurrence: 0,
  }),
  (CD = {
    name: "CD",
    value: 400,
    occurrence: 0,
  }),
  (XC = {
    name: "XC",
    value: 90,
    occurrence: 0,
  }),
  (XL = {
    name: "XL",
    value: 40,
    occurrence: 0,
  }),
  (IX = {
    name: "IX",
    value: 9,
    occurrence: 0,
  }),
  (IV = {
    name: "IV",
    value: 4,
    occurrence: 0,
  }),
  (M = {
    name: "M",
    value: 1000,
    occurrence: 0,
  }),
  (D = {
    name: "D",
    value: 500,
    occurrence: 0,
  }),
  (C = {
    name: "C",
    value: 100,
    occurrence: 0,
  }),
  (L = {
    name: "L",
    value: 50,
    occurrence: 0,
  }),
  (X = {
    name: "X",
    value: 10,
    occurrence: 0,
  }),
  (V = {
    name: "V",
    value: 5,
    occurrence: 0,
  }),
  (I = {
    name: "I",
    value: 1,
    occurrence: 0,
  }),
];

var romanToInt = function (s) {
  let tempS = s; // don't mutate input bruh
  resetToZero();
  romanNums.forEach((rn) => {
    if (tempS.length <= 0) return;
    if (tempS.includes(rn.name)) {
      // interestingly saves speed
      while (tempS.includes(rn.name)) {
        rn.occurrence += 1;
        tempS = tempS.replace(rn.name, "");
      }
    }
  });
  return sumRomanNumerals();
};

const resetToZero = () => {
  romanNums.forEach((rn) => (rn.occurrence = 0));
};

const sumRomanNumerals = () => {
  let sum = 0;
  romanNums.forEach((rn) => {
    if (rn.occurrence > 0) sum += rn.value * rn.occurrence;
  });
  return sum;
};

/**
 * @param {string[]} strs
 * @return {string}
 */
// 3. Longest Common Prefix
var longestCommonPrefix = function (strs) {
  let shortestWord = strs[0];
  strs.forEach((str) => {
    if (shortestWord.length > str) shortestWord = str;
  });
  let prefix = "";
  for (let i = 0; i < shortestWord.length; i++) {
    if (strs.every((str) => str[i] === shortestWord[i])) {
      prefix += shortestWord[i];
    } else {
      break;
    }
  }
  return prefix;
};
