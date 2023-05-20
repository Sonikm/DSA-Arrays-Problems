
function prefixSum(arr){

  for(let i=1; i<arr.length; i++)
  {
    arr[i] = arr[i] + arr[i-1];
  }

  return arr;
}

let arr = [1,2,3,4,5,6,7,8];  // [1,3,6,10,15,21,28,36]
let ans = prefixSum(arr);

for(let x of ans) 
{
    console.log(x);
}
