let revers=()=>
{
   arr.sort((a,b)=>b-a)
    return arr
}
let arr=[2,4,6,3,7,1]
let c=revers()
console.log(c)


//min and max

// let min_max=(arr1,n)=>
// {
//    let min,max;
//    let arr2=new Array()
//    if(n==1)
//    {
//        arr2=arr1[0]
//        arr2=arr1[0]
//        return arr2
//    }
//      if(arr1[0]>arr[1])
//      {
//          arr2.min[0]
//          arr2.max[1]
       
//      }
//      else{
//          arr2.max[0]
//          arr2.min[1]
     
//      }
//      for (i = 2; i < n; i++) {
//         if (arr1[i] > arr2.max) {
//             arr2.max = arr1[i];
//         } else if (arr1[i] < arr2.min) {
//             arr2.min = arr1[i];
//         }
//     }

//     return arr2;
// }

// /* Driver program to test above function */
 
//     var arr1 = [1000, 11, 445, 1, 330, 3000];
//     var arr_size = 6;
//     arr2 = getMinMax(arr, arr_size);
//    console.log("\nMinimum element is " ,arr2.min +"<br>");
//    console.log("\nMaximum element is " , arr2.max);

