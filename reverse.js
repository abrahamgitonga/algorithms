
S = 'Lorem at'

// using for of
function reversedString(str) {
    let reversedStr = '';
    for( let i of str) {
        reversedStr = i + reversedStr;
    };
    return reversedStr;
};

console.log(reversedString(S))

// using for loop

function revStr (str) {
    var result = '';
    for ( i = 0; i < str.length; i++){
        result += str.split('').splice(0, 4).reverse().join('')
        str = str.slice(4);
    }
    return result;
}
console.log(revStr(S))


function reverseString(str) {
    let reversedString = '';
    for (let i = 0; i < str.length; i++) {
        reversedString = str[i] + reversedString;
    };
    return reversedString;
};

console.log(reverseString(S))



const S = 'Lorem at';
const reverseString = (S = '')=>{
    let reverse = '';
    const { length: len } =S;
    for (let i = len - 1; i >=0; i--){
        reverse += S[i];
    };
    return reverse;
};
console.log(reverseString(S));
