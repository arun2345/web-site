let order =(arr)=>
{
   let counterzero=0,counterone=0,countertwo=0;
   for(let i=0;i<len;i++)
   {
       if(arr[i]==0)
       {
           counterzero++
       }else if(arr[i]==1)
       {
           counterone++
       }else if (arr[i]==2)
       {
           countertwo++
       }
   }
   for (let i=0;i<counterzero;i++)
   {
       arr[i]=0
   }
   for (let i=counterzero;i<len;i++)
   {
       arr[i]=1
   }
   for (let i=counterone;i<len;i++)
   {
       arr[i]=2
   }
   return arr
}
let arr=[0,1,1,1,0,0,2,2,1,2]
let len =arr.length
console.log(order(arr))
