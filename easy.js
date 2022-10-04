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

/**
 * @param {string} s
 * @return {boolean}
 */
// 4. Valid Parentheses
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// let validBrackets = ["()", "{}", "[]"];

// var isValid = function(s) {
//     let temp = s;
//     let brackets = [];
//     while (temp.length > 0) {
//         brackets.push(temp.slice(0,2));
//         temp = temp.slice(2);
//     }
//     if (brackets.every(bracket => validBrackets.includes(bracket))) return true;
//     return false;
// };

// wrong, expected {[]} to be true

// let validOpenBrackets = ["(", "{", "["];
// let validClosedBrackets = [")", "}", "]"];
// let validPairings = ["()", "{}", "[]"];
// var isValid = function(s) {
//     let openBrackets = [];
//     let closedBrackets = [];
//     let pairings = [];
//     for (let i = 0; i < s.length; i++) {
//         if (validOpenBrackets.includes(s[i])) {
//             openBrackets.push(s[i]);
//         } else if (validClosedBrackets.includes(s[i])) {
//             closedBrackets.push(s[i]);
//         } else {
//             continue;
//         }
//     }
//     if (openBrackets.length !== closedBrackets.length) return false;
//     openBrackets.forEach((bracket, index) => pairings.push(bracket.concat(closedBrackets[index])));
//     console.log(pairings);
//     if (pairings.every(bracket => validPairings.includes(bracket))) return true;
//     return false;
// }

// {()} is still wrong

// if a pair exists in the string, remove it, then check again
let validPairings = ["()", "{}", "[]"];
var isValid = function (s) {
  let temp = s;
  while (validPairings.some((pairing) => temp.includes(pairing))) {
    validPairings.forEach((pairing) => {
      if (temp.includes(pairing)) temp = temp.replaceAll(pairing, "");
    });
  }
  if (temp.length > 0) return false;
  return true;
};

//412. Fizz Buzz
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    switch (
      true // don't set this to i lol
    ) {
      case i % 3 === 0 && i % 5 === 0:
        arr[i - 1] = "FizzBuzz";
        break;
      case i % 3 === 0:
        arr[i - 1] = "Fizz";
        break;
      case i % 5 === 0:
        arr[i - 1] = "Buzz";
        break;
      default:
        arr[i - 1] = i.toString();
        break;
    }
  }
  return arr;
};

// 1512. Number of Good Pairs
// Given an array of integers nums, return the number of good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

// Input: nums = [1,2,3,1,1,3]
//Output: 4
//Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let pairs = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i === nums.length - 1) break;
    for (let j = i + 1; j < nums.length; j++) {
      // i must be less than j
      if (nums[i] === nums[j]) pairs++;
    }
  }
  return pairs;
};

// 876. Middle of the Linked List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// VERY INEFFICIENT
/*var middleNode = function (head) {
  if (!head.next) return head;
  let count = 1; // for calculation purposes
  let middleIndex = 0;
  let current = head;
  while (current.next) {
    count++;
    if (current.next) current = current.next;
  }

  middleIndex = Math.floor(count / 2) + 1;
  count = 0;
  current = head;

  while (current.next) {
    console.log(count, current, middleIndex);
    count++;
    if (count === middleIndex) return current;
    if (current.next) current = current.next;
  }
  return head.next;
};*/

// BETTER (map nodes to array)
var middleNode = function (head) {
  if (!head.next) return head;
  let nodes = [];
  let current = head;
  while (current) {
    nodes.push(current);
    if (current.next) {
      current = current.next;
    } else {
      break;
    }
  }
  return nodes[Math.floor(nodes.length / 2)];
};
