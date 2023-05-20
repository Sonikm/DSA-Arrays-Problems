

function sumOfGivenRange(arr, l, r){

    let total_sum=0;

    for(let i=l-1; i<r; i++)
    {
       total_sum += arr[i];
    }

    return total_sum;

  }
  
//   let arr = [3,5,6,2,3,5,1,7,2,5,9]; 
  let arr = [5,1,2,3,4]; 
  let ans = sumOfGivenRange(arr, 2,5);
  
   console.log(ans);
  