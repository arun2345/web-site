//arrange a sequence of numbers decreasing order.Time complexity O(n^2 log n)


let print=(a,n)=>
{ let str = "";
 let len =a.length
        for (let i = 0; i <= len; i++){
     console.log(a[i] );
         str += a[i] + " ";
         
        }
     return str
     
}
     
let sort=(a,n)=>
 {   
     for (let i = n; i >= 0; i--)
        for (let j = n; j > n - i; j--)
             if (a[j] > a[j-1]){
                 let tempswap = a[j];
                 a[j] = a[j - 1];
                 a[j - 1] = tempswap;
             }
    print (a, n);
      }

 let n=7
 let a=[3,2,4,6,7,5,8,1]

 
  sort(a,n)
