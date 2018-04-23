/**
 * @param {number[]} nums
 * @returns{number[]} sortedArray
 */

function mergeSort(nums){
        let len= nums.length;
        if(len<=1) return nums;
        let a = Array(Math.floor(len/2));
        let b = Array(Math.floor(len - (len/2)));
        for (let i = 0; i < a.length; i++){
            a[i] = nums[i];
        }
        for (let i = 0; i < b.length; i++){
            b[i] = nums[i + Math.floor(len/2)];
        }
        return merge(mergeSort(a),mergeSort(b));
}

/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns{number[]} merged sortedArray
 */
function merge(a,b){
    let m = Array(a.length+b.length)
    let aPin = 0;
    let bPin = 0;
    for(let i=0;i<m.length;i++){
        if(aPin >= a.length){
            m[i] = b[bPin++];
        }else if(bPin >= b.length){
            m[i] = a[aPin++];
        }else if(a[aPin] <= b[bPin]){
            m[i] = a[aPin++];
        }else{
            m[i] = b[bPin++];
        }
    }

    return m;
}
console.log(mergeSort([1,5,2,8,7,6,2,9]))