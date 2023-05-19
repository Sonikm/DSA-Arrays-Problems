
function sortOddEvenNumber(arr){
    let left=0, right=arr.length-1;
    let even,odd;
    
    while(left<right)
    {
      even = arr[left]%2;
      odd = arr[right]%2;
      if(even!=0 && odd==0)
      {
        let temp = arr[left];
        arr[left++] = arr[right];
        arr[right--] = temp;
      }
      else if(even == 0) left++;
      else right--;
    }

    return arr;
}

let arr = [1,2,3,4,5,6,7,8,3,4,4,2,9];
let newArray = sortOddEvenNumber(arr);

for(x of newArray){
    console.log(x);
}