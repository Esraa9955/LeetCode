/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length ===0){
        return "";
    }
//     let minLenght = Math.min(...strs.map(str =>str.length))
//     let longestCommonPrefix = "";
    
//     for ( let i=0; i<minLenght; i++){
//         let currentChar = strs[0][i];
//         if(strs.every(str => str[i]===currentChar))
//             {
//                 longestCommonPrefix += currentChar;
//             }else{
//                 break;
//             }}
    let prefix = strs[0]; //flower
    for ( let str of strs){ //flower   // flow  //flight
        let i =0;
        for(; i<str.length;i++){
            if(i<prefix.length && prefix[i] === str[i] )
                {
                    continue;
                }else break;
            
        }
        prefix = str.substring(0,i)
    }
    return prefix;
    
};