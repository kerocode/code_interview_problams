function factorialZeros(n){
    if (n < 0)
       return -1;
 let num = n;
 let count =0;
 while(num>5){
    count += Math.floor(num/5);
    num /=5;
 }
 return count;
}
function trailingZeroes(n) {
	if (n < 0)
		return -1;
 
	let count = 0;
	for (let i = 5; n / i >= 1; i *= 5) {
		count += Math.floor(n / i);
	}
 
	return count;
}
console.log(factorialZeros(100));
console.log(trailingZeroes(100));