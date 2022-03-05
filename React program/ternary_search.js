let ternarySearch=(arr,l,r ,x)=>
{
  let mid1
  let mid2
  if(l<=r)
  {
      mid1=l+parseInt(r-l)/3
      mid1=r-parseInt(r-l)/3
     if(arr[mid1]==x)
     {
       console.log(`value ${x} found at index ${mid1} `)
       return true
     }
      else if(arr[mid2]==x)
     {
       console.log(`value ${x} found at index ${mid2} `)
       return true
     }else if(x<arr[mid1])
     {
       return ternarySearch(arr,x ,l,mid1-1)
     }
     else if(x>arr[mid2])
     {
       return ternarySearch(arr ,x,mid2+1,r)
     }else{
       return ternarySearch(arr ,x,mid1+1,mid2-1)
     }
  }
}
let arr=[2,4,5,21,6,7,41,87,23,54,3,45,77,8]
let x=6
if(!ternarySearch(arr ,x,0,arr.length-1)==true)
{
    console.log("value not found")
}