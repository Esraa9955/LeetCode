/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
     let totalSum = nums.reduce((acc, num) => acc + num, 0);
    
    // Initialize left sum as 0
    let leftSum = 0;
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Check if left sum equals right sum
        if (leftSum === totalSum - leftSum - nums[i]) {
            return i;
        }
        
        // Update left sum
        leftSum += nums[i];
    }
    
    // If no pivot index found, return -1
    return -1;
    
};