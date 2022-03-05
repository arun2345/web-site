let sort =(arr,i,j)=>
{
    let temp =arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}

let sortwave=(arr)=>
{
   let num= arr.sort((a,b)=>a-b)
    
   let len =arr.length
   for(let i=0;i<len-1;i=i+2)
   {
       sort(arr,i,i+1)
   }

}
 
let print=(arr)=>
{
    
    let str=" "
    for(let i=0;i<arr.length;i++)
    {
        str+=arr[i]+" "
    }
 
    console.log(`sort wave form :`)
    console.log(str)
}
let arr=[3,5,2,6,7,9,1,4]
 sortwave(arr)
 print(arr)