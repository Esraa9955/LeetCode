/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Initialize a stack to keep track of opening brackets
    const stack = [];
    
    // Create a mapping of closing brackets to their corresponding opening brackets
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    // Iterate through each character in the string
    for (let char of s) {
        // If the character is a closing bracket
        if (bracketMap[char]) {
            // Pop the top of the stack or use a dummy value if the stack is empty
            const topElement = stack.length ? stack.pop() : '#';
            
            // Check if the popped element is the matching opening bracket
            if (topElement !== bracketMap[char]) {
                return false;
            }
        } else {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }
    
    // If the stack is empty, all opening brackets had matching closing brackets
    return stack.length === 0;
};