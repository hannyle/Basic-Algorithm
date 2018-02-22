function destroy(arr) {
    let newArray = [].slice.call(arguments);
    return arr.filter(function(x){
        return newArray.indexOf(x) < 0;
        }    
    );
}
document.getElementById("output2").innerHTML = destroy([1, 2, 3, 1, 2, 3, 3, 5, 1], 2, 3, 5);