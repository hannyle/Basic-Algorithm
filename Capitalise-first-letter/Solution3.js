function titleCase(str) {
    let myArray = str.toLowerCase().split(' ');
    let len = myArray.length;
    let i, word;
    let newStr ='';

    for(i=0; i<len; i++) {
        word = myArray[i];
        myArray[i] = word.replace(word[0], word[0].toUpperCase());
        newStr += myArray[i] + ' ';
    }
    return newStr.trim();
}
document.getElementById('output3').innerHTML = titleCase('Hello darknest my old friend!').bold();
