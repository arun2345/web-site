let Sub_Set_Sum = (arr, n, sum) => {
    if (sum == 0) {
        return true
    }
    if (n == 0 && sum > 0) {
        return false
    }
    if (arr[n - 1] > sum) {
        return Sub_Set_Sum(arr, n - 1, sum)
    }
    else {
        return Sub_Set_Sum(arr, n - 1, sum) || Sub_Set_Sum(arr, n - 1, sum - arr[n - 1])
    }
}
let arr = [2, 4, 3, 5, 7, 1]
let sum = 11
let n = arr.length
if (Sub_Set_Sum(arr, n, sum) == true) {
    console.log("SubSet possible")
}
else {
    console.log("SubSet is not possible")
}