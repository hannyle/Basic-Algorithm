function rot13(str) {  
  var letterStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var letterArr = letterStr.split('');  
  
  var arr = str.split(' '); 
  var i, j, encodeWord, encodeNum, decodeLetter, decodeNum, encodeArr;
  var newStr ='';
  var newArr = []; 
  
  for(i=0; i< arr.length; i++){
    encodeWord = arr[i];    
    encodeArr = encodeWord.split('');
    
    for(j=0; j<encodeArr.length; j++){      
      if(encodeArr[j].match(/[A-Z]/g)){
      encodeNum = letterArr.indexOf(encodeArr[j]);     
       if(encodeNum <13) {
          decodeNum = encodeNum + 13;          
        } 
        else {
          decodeNum = encodeNum - 13;          
        }               
        decodeLetter = letterStr.charAt(decodeNum);
        encodeArr.splice(j,1,decodeLetter);
     }
    }
      newStr = encodeArr.join('');
      newArr.push(newStr);
    
  }
   return newArr.join(' ');
}
document.getElementById("output").innerHTML = rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK?!");
