function checkPalindrome (str) {
    //method replace() to remove any characters which are not alphanumeric characters
    let str1 = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    //method split() to convert string object to array object
    //method reverse() to reverse the order of an array
    //method join() to convert array object to string object
    let str2 = str1. split('').reverse().join('');
    if(str1 === str2) {
        return true;
    } else {
        return false;
    }
}
document.getElementById("output1").innerHTML = checkPalindrome("happy_^^yppah");