
let nums = [3,4,6,7,1];
let targetSum = 7, cnt =0;

for(let i=0; i<nums.length; i++)
{
    for(let j=i+1; j<nums.length; j++){
       
        if(nums[i]+nums[j]==targetSum)
        {
           cnt++;
           break;
        }
    }
}

console.log("The number of target sum is: ", cnt);