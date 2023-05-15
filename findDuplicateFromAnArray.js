var findDuplicate = function(nums) {

    let ans = 0;
    
    for(let i=0; i<nums.length; i++)
    {
       ans = ans^nums[i];
    }
    
    for(let i=1; i<nums.length; i++)
    {
      ans = ans^i;
    }
    
    return ans;
    
    };

    let nums = [3,1,3,4,2];

    console.log(findDuplicate(nums))