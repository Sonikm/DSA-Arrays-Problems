
let arr = [1,2,3,4,5,6,7,8,9];

// Before reverse
arr.forEach(e => console.log(e));

let i=0, j = arr.length-1;

while(i<j)
{
   let tmp = arr[i];
   arr[i] = arr[j];
   arr[j] = tmp;

   i++, j--;
}

// After reverse
arr.forEach(e => console.log(e));