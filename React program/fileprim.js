         //Least prime factor of numbers till n
   function leastPrimeFactor( n)
   {
    
       let least_prime = Array(n+1).fill(0);
    
      
       least_prime[1] = 1;
    
       for (let i = 2; i <= n; i++)
       {
           if (least_prime[i] == 0)
           {
    
               least_prime[i] = i;
               for (let j = i*i; j <= n; j += i)
                   if (least_prime[j] == 0)
                      least_prime[j] = i;
           }
       }
    
       for (let i = 1; i <= n; i++)
         console.log( "Least Prime factor of "+ i + ": " + least_prime[i] + "<br/>");
   }
    
       let n = 10;
       leastPrimeFactor(n);
        
