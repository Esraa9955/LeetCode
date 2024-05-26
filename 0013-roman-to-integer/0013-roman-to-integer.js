/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Mapping of Roman numerals to their integer values
    const romanToIntMap ={
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }
    let total =0;
    let i =0;
    while(i < s.length){
        if (i+1 < s.length &&  romanToIntMap[s[i]]< romanToIntMap[s[i+1]] )
            {
                total += romanToIntMap[s[i+1]] - romanToIntMap[s[i]];
                i+=2;
            }
        else{
            total += romanToIntMap[s[i]];
            i++;
        }
    }
    return total;
};