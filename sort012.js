
function sort012(arr){
    let zero=0, one =0, two=0;

       // Count 0,1, and 2
   for(let i=0; i<arr.length; i++)
   {
      if(arr[i]==0) zero++;
      else if(arr[i]==1) one++;
      else two++;
   }

   // Add 0,1 and 2
   for(let i=0; i<arr.length; i++)
   {
      if(i < zero) arr[i]=0;
      else if(i < (zero+one)) arr[i]=1;
      else arr[i]=2;
   }

   return arr;
}

let arr = [0, 1, 2, 1, 2, 1, 2];

let sortedList = sort012(arr);

for(let x of sortedList){
    console.log(x);
}