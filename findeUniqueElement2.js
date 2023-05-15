
let arr = [2, 3, 9, 9, 6, 5, 3, 6, 2];
let ans = 0;

for(i in arr)
{
    ans = ans^arr[i]; // Remove all duplicate elements throught xor operators
}

console.log(ans);