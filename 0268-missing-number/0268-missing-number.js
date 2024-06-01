/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
// Get the length of the array
    const n = nums.length;
    
    // Calculate the expected sum of numbers from 0 to n using the formula
    const expectedSum = n * (n + 1) / 2;
    
    // Calculate the actual sum of the numbers in the array
    const actualSum = nums.reduce((acc, num) => acc + num, 0);
    
    // The missing number is the difference between the expected sum and the actual sum
    return expectedSum - actualSum;
}