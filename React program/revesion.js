let sort =(arr,i,j)=>
{
    let temp =arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}
let SortWave =(arr)=>
{
   let num= arr.sort((a,b)=>a-b)
   let n=arr.length
   for(let i=0;i<n-1;i=i+2)
   {
     sort(arr,i,i+1)
   }
}
let print=()=>
{
    let str =" "
    for(let i=0;arr.length;i++)
    {
        str+=arr[i]+" "
    }
    console.log(str)
}
let arr=[3,2,5,4,1,6,7,9]
SortWave(arr)
print(arr)



