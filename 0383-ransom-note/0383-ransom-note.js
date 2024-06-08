/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
     // Create a map to count the frequency of each character in the magazine
    const magazineCount = {};

    // Populate the map with the frequency of characters in magazine
    for (const char of magazine) {
        if (magazineCount[char]) {
            magazineCount[char]++;
        } else {
            magazineCount[char] = 1;
        }
    }

    // Check each character in the ransomNote
    for (const char of ransomNote) {
        // If the character is not available in magazine or not enough of them, return false
        if (!magazineCount[char] || magazineCount[char] <= 0) {
            return false;
        } else {
            // Decrement the count of the character in the magazine
            magazineCount[char]--;
        }
    }

    // If we can match all characters, return true
    return true;
};