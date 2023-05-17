
let arr1 = [1,2,3,4,4,5,7];
let arr2 = [2,2,5,6, 7];

let ans = [];

let i=0, j=0;

while(i<arr1.length && j<arr2.length)
{
    if(arr1[i] == arr2[j])
    {
      ans.push(arr1[i]);
      i++,j++;
    }
    else if(arr1[i] < arr2[j])
    {
        i++;
    }
    else {
        j++;
    }
}

for(let x of ans){
    console.log(x);
}