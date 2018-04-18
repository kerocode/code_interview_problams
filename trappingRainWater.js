/**
 * @param {number[]} height
 * @return {number}
 */
function trappingRunninWater(height){
    if(height.length<3) return 0;
    let left = 1;
    let right= height.length-2;
    let leftMax =  height[0];
    let rightMax = height[height.length-1];
    let water = 0;
    while(left<=right){
        if(leftMax<=rightMax){
            leftMax = Math.max(leftMax,height[left]);
            water += (leftMax - height[left]);
            left++;
        }else{
            rightMax = Math.max(rightMax,height[right]);
            water += (rightMax - height[right]);
            right--;
        }
    }
    return water;
}
console.log(trappingRunninWater([0,1,0,2,1,0,1,3,2,1,2,1]));