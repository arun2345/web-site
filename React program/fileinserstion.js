let print =(arr)=>
{

    let str=" "
    for(let i =0;i<arr.length;i++)
    {
        str+=arr[i]+" "
    }
    return str
}

// let sort =(arr,i,j)=>
// {
//    let temp =arr[i]
//    arr[i]=arr[j]
//    arr[j]=temp
// }
let insertion =(arr)=>
{
    let key,n=arr.length,j
    for(let i=0;i<n;i++)
    {
        key =arr[i]
        j=i-1
        while(j>=0 && arr[j]>key)
        {
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=key
    }

}
let arr=[24,5,7,33,6,5,3,2,4]
console.log("Before swap")
console.log(print(arr))
insertion(arr)
console.log("After swap")
console.log(print(arr))