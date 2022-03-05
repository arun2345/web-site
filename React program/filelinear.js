let linearSearch =(arr,n)=>
{
   if(n==0)
   {
       return true
   }
   for(let i=0;i<n;i++)
   {
   if(arr[i]==x)
   {
       console.log(`value ${x} found index ${i}`)
       return;
   }
}
       console.log("value is not found")
}
let arr=[3,2,5,6,89,7]
let x=8
let n=arr.length
linearSearch(arr,n,x)

console.log("******Globle linearSearch******")
//Globle linearSearch
let linearSearchs=(nums,len,a)=>
{
   if(len==0)
   {
       return true
   }
   let find=false;
   for(let i=0;i<len;i++)
   {
       if(nums[i]==a)
       {
           console.log(`value ${a} is found index ${i}`)
           find=true
       }
   }
   if(find==false)
   {
       console.log("value is not found")
   }
}
let nums=[2,4,6,3,3,6,7,9,7]
let a=6
let len =nums.length
linearSearchs(nums,len,a)
