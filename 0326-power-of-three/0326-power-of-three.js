/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    // Special case for non-positive numbers
    if (n <= 0) {
        return false;
    }
    
    // Check if n is a power of three
    while (n > 1) {
        if (n % 3 !== 0) {
            return false;
        }
        n = n / 3;
    }
    
    // If we have divided n down to 1, then n is a power of three
    return true;

    
};