
let arr = [1,2,3,4,5,6,7,8,9];

// Before reverse
// arr.forEach(e => console.log(e));

let i=0, j = arr.length-1;

while(i<j)
{
   let tmp = arr[i+1];
   arr[i+1] = arr[i];
   arr[i] = tmp;

   i +=2;
}

// After reverse
arr.forEach(e => console.log(e));