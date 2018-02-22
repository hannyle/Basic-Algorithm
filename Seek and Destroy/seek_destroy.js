function destroyer(arr) {
    let i, j, array1;
   
    for(i=1; i<arguments.length; i++){
      array1 = arguments[0];
      for(j=0; j<array1.length; j++) {     
        if( array1[j] == arguments[i]) {
           array1.splice(j,1);  
           j--;
        }     
      }       
    }
    return array1;
  }
  
  document.getElementById("output").innerHTML = destroyer([1, 2, 3, 1, 2, 3, 3, 5, 1], 2, 3, 5);
  