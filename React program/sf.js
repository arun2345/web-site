let sort=(arr,i,j)=>
{ 
    let str =" "
    let temp =arr[i]
    arr[i]=arr[j]
    arr[j]=temp
    for(let i=0;i<arr.length;i++)
    {
        str+=arr[i]+" "
    }
}
let partition= (arr,low,high)=>
{
    let x=arr[high]
    let i=low-1
    for( let j=low;j<high-1 ;j++){
        if(arr[j]<=x)
        {
            i=i+1
            sort(arr,i,j)
        }
        
    }
    sort(arr,i+1,high )
        return (i+1)
}



let quicksort=(arr,low,high)=>
{
    if(low<high)
    {
        let q=partition(arr,low,high)
        quicksort(arr,low,q-1)
        quicksort(arr,q+1,high)
    }
}

//  let printarr = (arr, size) => {
//      for ( i = 0; i < size; i++)
//      {
//          console.log(arr[i] + " ")
//      }
//  }

// let arr = [22, 45, 33, 1, 5, 67, 8, 7] 
// let len = arr.length
//  quicksort(arr, 0, len - 1)
// console.log("Sorted array")
// printarr(arr, len)
 let printarr=(arr,size)=>
 {
     for(i=0;i<size;i++){
        console.log(arr[i]+" ")
    }
 }
let arr =[2,42,51,12,4,7,85,3]
let len=arr.length
quicksort(arr,0,len-1)
console.log("Sorted Array: ")
printarr(arr,len)
