///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//  _____                          _               ////////////////////
// |  __ \                        (_)              ////////////////////
// | |__) |___  ___ _   _ _ __ ___ _  ___  _ __    ////////////////////
// |  _  // _ \/ __| | | | '__/ __| |/ _ \| '_ \   ////////////////////
// | | \ \  __/ (__| |_| | |  \__ \ | (_) | | | |  ////////////////////
// |_|  \_\___|\___|\__,_|_|  |___/_|\___/|_| |_|  ////////////////////
//                                                 ////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////
// NOTE: modify the parameter list of each function as needed       ///
///////////////////////////////////////////////////////////////////////

// Problem #1

// Write a recursive method called countVowels that returns the number of vowels in a given String
// countVowels('abcedfg') ->2

var countVowels = function(str){
  var count = 0;
  if (str.length === 0) {
    return count;
  }
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.indexOf(str[0].toLowerCase()) > - 1) {
    count++;
  }
  return count += countVowels(str.slice(1));
};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #2
// Given a non-negative int n, return the sum of its digits recursively (no loops)
// sumDigits(126) → 9
// sumDigits(49) → 13
// sumDigits(12) → 3

var recursiveSum = function(n){
  var str = n.toString();
  if (str.length === 1) {
    return Number(str);
  }
  var sum = Number(str[0]);
  return sum += recursiveSum(str.slice(1));
};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #3
// Check if a given number is a power of 2
// PowerOfTwo(8) -> true
// PowerOfTwo(9) -> false

var isPowerOfTwo = function(n){
  if (n === 1 || n === 2) {
    return true;
  } else if (n === 0 || n % 2 === 1) {
    return false;
  }
  return isPowerOfTwo(n / 2);
};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #4

// Write a recursive method that takes as parameters an initial investment amount,
// an annual interest rate, and a number of years.
// The method should return the value of the investment after the given number of years,
// assuming that the interest is compounded annually.
// (For example, if the initial investment is 1000 and the interest rate is 10 percent,
// then after one year the investment will be worth 1100, after two years 1210, after three years 1331, etc.)

var invest = function(amount, rate, years){
  if (amount === 0) {
    return amount;
  }
  if (rate === 0 || years === 0) {
    return amount;
  }
  amount += (amount * rate);
  return invest(amount, rate, years - 1);
};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #5

// given a min and a max, both integers, use recursion to console.log all of the
// integers from the min to the max, and then console.log the numbers from the max
// to the min. Do not use loops! Use recursion.

// ex:
//    printRangeUpDown(4, 10);
//    console.logs: 4,5,6,7,8,9,10,9,8,7,6,5,4
var printRangeUpDown = function(min, max){
  if (min === max) {
    console.log(min);
    return;
  }

  console.log(min);
  printRangeUpDown(min + 1, max);
  console.log(min);
};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #6

// given a binary tree where each node has a
// value, a left and a right, return the sum of all of the values.
// remember, binary tree's are different from binary search trees!
// you'll need to create a binary tree constructor!

var binaryTreeSum = function(tree){

};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #7

// Given an array of integers which is sorted in increasing order
// build a binary search tree of minimal height. Height of a tree
// is the max number of edges from a node to the tree's root node.
// e.g. this tree has height 3.
//                   10
//                  /  \
//                3     30
//               / \
//              1   7
//                   \
//                    8

// you'll need to create a binary search tree constructor!
var arrayToBinarySearchTree = function(array){

};