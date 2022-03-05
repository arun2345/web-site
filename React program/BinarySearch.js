let binary_Search=(arr,l,r,x)=>
{
   let mid;
   while(r>=l)
   {
       mid=l+parseInt((r-l)/2);
       if(arr[mid]==x){
           console.log(`value ${x}found at index ${mid}`)
       }
       else if(arr[mid]>x){
            return binary_Search(arr,l,mid-1,x)
       }else{
        return binary_Search(arr,mid+1,r,x)
       }
   }
}
let arr=[2,4,6,3,7,9,3,5,7,]
let x=7
let n=arr.length
binary_Search(arr,0,n-1,n)