
function checkPrefixSaffixSum(arr){

    let prefixSum = 0, saffixSum = 0, total_sum=0;

    for(let i=0; i<arr.length; i++)
    {
       total_sum += arr[i];
    }

    for(let i=0; i<arr.length; i++)
    {
      prefixSum += arr[i];
      saffixSum = total_sum - prefixSum;
      if(prefixSum == saffixSum)
      {
        return true;
      }
    }

    return false;

  }
  
  let arr = [3,5,6,2,3,5,1,7,2,5,9];  // [2,5,10,11,11,4]
  let ans = checkPrefixSaffixSum(arr);
  
   console.log(ans);
  