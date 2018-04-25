function hasSubString(subStr,str){
if(subStr.length> str.length){
    return false ;
    }    
let diff = str.length - subStr.length ;
checkSubString : for(let i =0; i<=diff;i++){
  let j =0;
  let k= i;
  let n = subStr.length;
  while(n-- != 0){
    if(subStr[j++] != str[k++]){
        continue checkSubString;
    }
  }
  return true;
}
return false;
}




console.log(hasSubString("bat","sdabate"))