function checkPalindrome (str) {
    let str1 = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    let len = str1.length;

    let i, j;
    for(i=0; i<len/2; i++) {
        j= len-1-i;
        if(str1[i] === str1[j]) {}
        else {
            return false;
        }                
    }
    return true;    
}
document.getElementById("output2").innerHTML = checkPalindrome("everythingtsnihtyreve");