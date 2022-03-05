let FindPeck=(arr,n)=>
{
   if(n==1)
   {
       console.log(`peck element  of index ${0}`)
   }else if(arr[0]>=arr[1])
   {
       console.log(`peck element ${arr[0]} and index ${0}`)
   }else if(arr[n-1]>=arr[n-2])
   {
    console.log(`peck element ${arr[n-1]} and index ${n-1}`)
   }
   for(let i=1;i<=n-2;i++)
   {
       if(arr[i]>=arr[i-1] && arr[i]>=arr[i-2])
       {
        console.log(`peck element ${arr[i]} and index ${i}`)
       }
   }
}

let arr=[10,20,5,30,25,34,12]
let n=arr.length
FindPeck(arr,n)