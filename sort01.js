
function sort01(arr){

    let i=0, j=arr.length-1;

    while(i <= j){
       if(arr[i]==0 && arr[j]==1)
       {
        i++, j--;
       }
       else if(arr[i]==1 && arr[j]==0) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
        i++, j--;
       }
       else if(arr[i]==0){
        i++;
       }
       else {
        j--; 
       }
    }

   return arr;
}

let arr = [0, 1, 0, 1, 0, 1, 0,0,0,1,1,0,1,0];
let sortedList = sort01(arr);

for(let x of sortedList){
    console.log(x);
}