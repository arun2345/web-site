/* 1. Given an list of time intervals where time intervals[i] = [starti, endi],
we need to find the least number of time intervals to be removed in
 order to make the list of time intervals non overlapping*/

let merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0])
    const result=[intervals[0]]
    for(let i of intervals)
        {
            let e1=result[result.length-1][1]
            let s2=i[0]
            let e2=i[1]
            
            if(e1>=s2)
                {
                  result[result.length-1][1]=Math.max(e1,e2)  
                }else
               {
                   result.push(i)     
               }
        }
    return result;
};
const intervals=[[1,3],[2,6],[8,10],[15,18]]
console.log(merge(intervals))


/* 2.Given an array of integers with length n and we need to 
find element that occurs more than n/2 times in the array*/

function morethanNdK(a,n,k)
    {
        let x = n / k;
       
        let y=new Map();
        for (let i = 0; i < n; i++){
            if (!y.has(a[i])){
               y.set(a[i], 1);
            }
            else
            {
                let count = y.get(a[i]);
                y.set(a[i], count + 1);
            }
        }
  
       
        
        for (let [key, value] of y.entries())
        {
            let temp = value;
            if (temp > x)
                console.log(key+" ");
        }
    }
     
    let a=[1, 4, 4, 4, 5, 2, 2, 3, 1, 1,1];
    let n = 11;
    let k = 2
    morethanNdK(a, n, k);