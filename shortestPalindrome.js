function shortestPalindrome(s){
    let i = 0;
    let end = s.length - 1;
    let j = end; 
    
    while(i < j) {
         if (s[i] === s[j]) {
             i++; 
             j--;
         } else { 
             i = 0; 
             end--; 
             j = end;
         }
    }
    let reverseStr = s.substring(end+1).split("").reverse();
    return reverseStr.join("") + s;
}
console.log(shortestPalindrome("abc"));