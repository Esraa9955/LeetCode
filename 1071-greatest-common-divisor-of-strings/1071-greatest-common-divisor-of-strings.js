/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
     function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    const gcdLen = gcd(str1.length, str2.length);
    const candidate = str1.substring(0, gcdLen);
      function isDivisible(s, sub) {
        let repeated = sub.repeat(s.length / sub.length);
        return repeated === s;
    }
    if (isDivisible(str1, candidate) && isDivisible(str2, candidate)) {
        return candidate;
    } else {
        return "";
    }
};