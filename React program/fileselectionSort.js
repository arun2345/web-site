let sort=(nums,i,j)=>
{
    let temp =nums[i]
    nums[i]=nums[j]
    nums[j]=temp
}
let print =(nums)=>
{
    let str=" "
    for(let i=0;i<nums.length;i++)
    {
        str+=nums[i]+" "

    }
    return str
}
let selectionSort =(nums)=>
{
    let min;
    let n= nums.length
    for(let i=0;i<n-1;i++){
     min =i
     for(let j=i+1;j<n;j++)
     {
         if(nums[j]<nums[min])
         {
             min=j
         }
     }
     sort(nums,min,i)
    }
}
let nums=[13,4,35,3,68,32,7,1]
console.log("Before swap")
console.log(print(nums))
selectionSort(nums)
console.log("After swap")
console.log(print(nums))