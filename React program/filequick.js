 // 1. Write a program to find the Kth largest element in the array using quick select.

let print = (nums) => {
    let str = "";
    for (let i = 0; i < nums.length; i++) {
        str += nums[i] + " ";
    }
    return str;
}
let swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
let Partition = (arr, low, high) => {
    let pivot = arr[high];
    let i = low - 1;

    for (let j =low; j <=high-1; j++) {
        if (arr[j] < pivot) {
            i++; 
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1;
}
let QuickSort = (arr, low, high) => {
    if (low < high) {
        let pi = Partition(arr, low, high);
        QuickSort(arr, low, pi - 1);
        QuickSort(arr, pi + 1, high);
    }
}
function kthlargest(nums,  k)
{
    print(nums)
    return nums[k];
}
let k=4
const nums = [20, 15, 11, 5, 1,9,6, 7];
console.log("Before swap");
console.log(print(nums));
QuickSort(nums, 0, nums.length - 1);
console.log("After swap");
console.log(print(nums));
console.log(("K'th largest element is : " + kthlargest(nums,k)));


// 2. program to sort the element in the array by descending order using random.

let print=(a,n)=>
{ let str = "";
 let len =a.length
        for (let i = 0; i <= len; i++){
     console.log(a[i] );
         str += a[i] + " ";
         
        }
     return str
     
}
     
let sort=(a,n)=>
 {   
     for (let i = n; i >= 0; i--)
        for (let j = n; j > n - i; j--)
             if (a[j] > a[j-1]){
                 let tempswap = a[j];
                 a[j] = a[j - 1];
                 a[j - 1] = tempswap;
             }
    print (a, n);
      }

 let n=7
 let a=[3,2,4,6,7,5,8,1]
 sort(a,n)