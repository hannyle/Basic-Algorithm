function chunkArrayInGroups(arr, size) {    
    let i;
    let newArray = [];
    let subArray1 = [];
    let subArray2 = [];
    
    for(i=0; i<arr.length; i+=size){
      if(arr.slice(i).length >= size) {
        subArray1 = arr.slice(i, i+size); 
        newArray.push(subArray1);
      }
      else{
        subArray2 = arr.slice(i);
        newArray.push(subArray2);
      }    
    }
    return newArray;  
    console.log(newArray); 
  }
  
  document.getElementById("output").innerHTML = chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g", "h"], 3);
 