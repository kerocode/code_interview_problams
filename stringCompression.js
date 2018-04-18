function stringCompression (str){
    let char =str[0];
    let charCount = 1;
    let res =[];
    for (let c=1; c<str.length;c++){
        if(str[c] !== char && charCount !==0){
            res.push(char+charCount);
            char =str[c];
            charCount =1;
        }else{
            charCount++;
        }
    }
    res.push(str[str.length-1]+charCount);
    return res.join(""); 
}


console.log(stringCompression("kkeedddwwddvxxxzz"));