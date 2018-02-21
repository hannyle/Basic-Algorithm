function titleCase(str) {
    let array1= str.toLowerCase().split(' ');
    let len = array1.length;
    let i, singleWord;
    let array2 = [];

    for(i=0; i<len; i++){
        singleWord = array1[i];
        array1[i] = singleWord.replace(singleWord[0], singleWord[0].toUpperCase());
        array2.push(array1[i]);
    }
    /* another way:
    array1= array1.map(function(word){
        return word.replace(word[0], word[0].toUpperCase());
    })
    ;*/
    return array2.join(' ');
    
}
document.getElementById("output1").innerHTML = titleCase('thE wEAThEr IS beautifuL').bold();
