// let FirstAndLast=(arr,n,x)=>
// {
//   let first=-1
//   let last =-1
//   for(let i=0;i<n;i++)
//   {
//       if(x==arr[i])
//       {
//           if(first==-1)
//           {
//               first =i
//           }
//           last=i
//       }
//   }
//   if(first!=-1)
//   {
//     console.log(`First occurrence of ${x} is ${first}`)
//     console.log(`Last occurrence of ${x} is ${last}`)  
//   }
//   else{
     
//       console.log("Value is not found")
//   }

// }
// let arr=[1,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4]
// n=arr.length
// FirstAndLast(arr,n,1)
// FirstAndLast(arr,n,2)
// FirstAndLast(arr,n,3)
// FirstAndLast(arr,n,4)
// FirstAndLast(arr,n,6)
 console.log("*****First and Last*****")

// let First =(arr,l,r,n,x)=>
// {
//    if(r>=l)
//    {
//       let mid=l+(parseInt(r-l)/2)
//       if((mid==0 || arr[mid-1]<x)&& arr[mid]==x)
//       {
//           return mid
//       }
//       else if(arr[mid]<x)
//       {
//           return First(arr,mid+1,r,n,x)
//       }else{
//         return First(arr,l,mid-1,n,x)
//       }
//    }
//    return -1
// }

// let Last =(arr,l,r,n,x)=>
// {
//    if(r>=l)
//    {
//       let mid=l+(parseInt(r-l)/2)
//       if((mid==n-1 || arr[mid+1]>x)&& arr[mid]==x)
//       {
//           return mid
//       }
//       else if(arr[mid]>x)
//       {
//           return Last(arr,l,(mid-1),n,x)
//       }else{
//         return Last(arr,(mid+1),r,n,x)
//       }
//    }
//    return -l
// }
// let arr=[1,1,1,1,1,3,3,3,3,4,4,4,4,4,5,5,5,5,8,8,8,8]
// let n=arr.length
// console.log(`First occurrence of 1 is ${ First(arr,0,n-1,n,1)}`)
// console.log(`First occurrence of 1 is ${ Last(arr,0,n-1,n,1)}`)
// console.log(`First occurrence of 2 is ${ First(arr,0,n-1,n,2)}`)
// console.log(`First occurrence of 2 is ${ Last(arr,0,n-1,n,2)}`)
// console.log(`First occurrence of 3 is ${ First(arr,0,n-1,n,3)}`)
// console.log(`Last occurrence of 3 is ${Last(arr, 0, n-1, n, 3)}`);
// First(arr, 0, n-1, n, 8) == -1 ? console.log("Value not found") : 
// console.log(`First occurrence of 8 is ${First(arr, 0, n-1, n, 8)}`);
// Last(arr, 0, n-1, n, 8) == -1 ? console.log("Value not found") : 
// console.log(`Last occurrence of 8 is ${Last(arr, 0, n-1, n, 8)}`)

let First = (arr, l, h, n, x) =>
{
if(h >= l)
{
let mid = l + parseInt((h-l)/2);
if((mid == 0 || arr[mid-1] < x ) && arr[mid] == x)
{
return mid;
}
else if(arr[mid] < x) //search in second half of the array
{
return First(arr, mid+1, h, n, x);
}
else //search in first half of the array
{
return First(arr, l, mid-1, n, x);
}
}
return -1;
}
let Last = (arr, l, h, n, x) =>
{
if(h >= l)
{
let mid = l + parseInt((h-l)/2);
if((mid == n-1 || arr[mid+1] > x ) && arr[mid] == x)
{
return mid;
}
else if(arr[mid] > x) //search in second half of the array
{
return Last(arr, l, (mid - 1), n, x);
}
else //search in first half of the array
{
return Last(arr, (mid + 1), h, n, x);
}
}
return -1;
}
const arr = [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 4, 5, 6, 7, 
10];
let n = arr.length;
//Binary Search
console.log("Through Binary Search");
console.log(`First occurrence of 1 is ${First(arr, 0, n-1, n, 1)}`);
console.log(`Last occurrence of 1 is ${Last(arr, 0, n - 1, n, 1)}`);
console.log(`First occurrence of 2 is ${First(arr, 0, n-1, n, 2)}`);
console.log(`Last occurrence of 2 is ${Last(arr, 0, n-1, n, 2)}`);
console.log(`First occurrence of 3 is ${First(arr, 0, n-1, n, 3)}`);
console.log(`Last occurrence of 3 is ${Last(arr, 0, n-1, n, 3)}`);
First(arr, 0, n-1, n, 8) == -1 ? console.log("Value not found") : 
console.log(`First occurrence of 8 is ${First(arr, 0, n-1, n, 8)}`);
Last(arr, 0, n-1, n, 8) == -1 ? console.log("Value not found") : 
console.log(`Last occurrence of 8 is ${Last(arr, 0, n-1, n, 8)}`);