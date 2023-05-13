

function findUniqueNumber(arr){
    let cnt = 0;

    for(let i=0; i<arr.length; i++)
    {
        cnt=0;
        for(let j=0; j<arr.length; j++)
        {
            if(arr[i] == arr[j] && i!=j)
            {
                cnt++;
                break;
            }
        }
    
        // This case will apply when we have given only 1 unique element
        if(cnt==0) return arr[i];
    }
    
}

let arr = [2,4,7,4,5,2,7];

console.log(findUniqueNumber(arr));

