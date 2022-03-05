let Traingle =(arr,n)=>
{
   if(n<3)
   {
       return false
   }
   arr.sort()
   for(let i=0;i<n-2;i++)
   {
      if(arr[i]+arr[i+1]>arr[i+2])
     {
          return true
      }

   }
   return false
}
let arr=[11,3,2,6]
let n=arr.length

if( Traingle (arr,n)==true)
{
    console.log("Triangle possible")
}else{
console.log("Triangle not possible")
}