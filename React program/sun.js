// let getmin = (arr, n, k) => {
//     arr.sort((a, b) => a - b)
//     let ans = arr[n - 1] - arr[0]
//     let teapmin, teapmax;
//     teapmin = arr[0]
//     teapmax = arr[n - 1]
//     for (let i = 0; i < arr.length; i++) {
//         teapmin = Math.min(arr[0] + k, arr[i] - k)
//         teapmax = Math.max(arr[i - 1] + k, arr[n - 1] - k)
//         ans = Math.min(teapmax - teapmin)
//     }
//     return ans
// }
// let arr = [7, 4, 8, 8, 8, 9]
// let n = 6
// let k = 6

// console.log(getmin(arr, n, k))
function getMinDiff(arr,n,k)
{
    arr.sort((a,b) => (a-b))
    let ans = arr[n - 1] - arr[0]; // Maximum possible height difference
 
    let tempmin, tempmax;
    tempmin = arr[0];
    tempmax = arr[n - 1];
 
    for (let i = 1; i < n; i++) {
        tempmin= Math.min(arr[0] + k,arr[i] - k); // Minimum element when we
                                                // add k to whole array
        tempmax = Math.max(arr[i - 1] + k, arr[n - 1] - k); // Maximum element when we
                                                         // subtract k from whole array
        ans = Math.min(ans, tempmax - tempmin);
    }
    return ans;
}
 
// Driver Code Starts
let k = 6, n = 6;
let arr = [ 7, 4, 8, 8, 8, 9 ];
let ans = getMinDiff(arr, n, k);
console.log(ans,"</br>");