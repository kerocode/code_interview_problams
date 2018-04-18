
function mergeSortedArrays(arr1,arr2){
let idx1 = (arr1.length - arr2.length) - 1;
let idx2 = arr1.length - 1;
let i = arr2.length -1;
    while(i>=0){
    if(arr2[i]>arr1[idx1]){
        arr1[idx2] = arr2[i];
        idx2--;
        i--; 
    }else if(arr2[i]<arr1[idx1]){
        arr1[idx2]=arr1[idx1];
        idx2--;
        idx1--;
    }else{
        arr1[idx2] =arr2[i];
        arr1[idx2-1] =arr1[idx1];
        idx2 -=2;
        idx1--;
        i--;
    }
 }
}

let arr1 = [1,4,5,9,0,0,0];
let arr2 = [2,2,10];

mergeSortedArrays(arr1,arr2);
console.log(arr1);