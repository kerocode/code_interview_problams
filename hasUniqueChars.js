function hasUniqueChar(s){
let str = s.toLowerCase();    
let checker = 0;
let a = 'a'.charCodeAt(0);
for(let char of str){
    let n = char.charCodeAt(0) - a;
    if((checker & (1<<n))>0){
        return false;
    }
    checker |= (1<<n);
 }
 return true;
}


console.log(hasUniqueChar("kerok"));
console.log(hasUniqueChar("kero"));