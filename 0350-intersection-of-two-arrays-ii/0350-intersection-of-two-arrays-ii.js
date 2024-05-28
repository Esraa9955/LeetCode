/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let counts = {};
    let result = [];
    for( let num of nums1){
        counts[num] = (counts[num]|| 0) +1;
        
    }
    
    for (let num of nums2){
        if(counts[num]>0){
            result.push(num);
            counts[num]--;
        }
    }
    return result;
};