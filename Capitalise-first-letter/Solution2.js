function titleCase(str){
    let myArray = str.toLowerCase().split(' ');
    let len = myArray.length;
    let i;
    for(i=0; i<len; i++){
        myArray[i] = myArray[i].charAt(0).toUpperCase() + myArray[i].slice(1);
    }
    return myArray.join(' ');
}
document.getElementById("output2").innerHTML = titleCase("i'm dOING jAvaScript exercise").bold();
