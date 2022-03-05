

let code=(arr)=>{
   let positive=[]
   let negative=[]
   let len =arr.length
   for(let i=0;i<len;i++)
   {
       arr.sort()
       if(arr[i]>=0)
       {
           positive.push(arr[i])
       }else
       {
           negative.push(arr[i])
       }
   }
return(negative.concat(positive))
}
let arr=[1,3,5,-2,0,2,4,-5,-6,-2]
console.log(code(arr))