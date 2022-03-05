let swap = (nums, j) => {
    let temp = nums[j];
    nums[j] = nums[j + 1];
    nums[j + 1] = temp;
}
//print all the values in an array
let print = (nums) => {
    //using string so that values can come in one line
    let str = "";
    for (let i = 0; i < nums.length; i++) {
        str += nums[i] + " ";
    }
    return str;
}
let BubbleSort = (nums) => {
    let n = nums.length;
    let count = 0; //to maintain pass count
    for (let i = 0; i < n - 1; i++) //n-1 because we will stop on second last value
    {
        count++;
        for (let j = 0; j < n - i - 1; j++) //n-i-1 -> because we will not compare with the values before i index
        {
            if (nums[j] > nums[j + 1]) //compare adjacent values
            {
                swap(nums, j);
            }
        }
    }
    console.log("Total Passes : " + count);
};
const nums = [64, 34, 25, 12, 22, 11, 90];
console.log("Before swap");
console.log(print(nums));
BubbleSort(nums);
console.log("After swap");
console.log(print(nums))