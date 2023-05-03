
let nums1 = [1,2,2,4,6];
let nums2 = [3,2,4,6];

let ans = [];
let obj = {};

// Initialising each unquie keys with 1 value
for(let i in nums1){
    obj[nums1[i]] = 1;
}

// check whether it is avalible in nums2 or not
for(let i in nums2){
   if(obj[nums2[i]] == 1){
       ans.push(nums2[i]);
       obj[nums2[i]] = 0;
   }
} 

for(let x of ans){
    console.log(x);
}

