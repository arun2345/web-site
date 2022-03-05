let kclosest=(point,k)=>
{
  let len =point.length
  let distance=[]
  let x1=0,y1=0
  let x2,y2;
  for(let i=0;i<len;i++)
  {
      x2=point[i][0]
      y2=point[i][1]
     distance[i]=((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1))
     
  }
  distance.sort(function(a,b){return a-b;})
  let kdistance=distance[k-1]
  for(let i=0;i<len;i++)
  {
    x2=point[i][0]
    y2=point[i][1]
    let  dist=((x2-x1)*(x2-x1))+((y2-y1)*(y2-y1))
    if(dist<=kdistance){
        console.log(`[${x2},${y2} ] = value ${ distance[i]}`)
    }
  }
}


const point = [[3, 3], [5, -1], [-2, 4], [-1, -8]];
let k=2
kclosest(point,k)

/* O/P- [3,3]=value 18
        [-2,4]=value 26  <- but Right value 20*/
