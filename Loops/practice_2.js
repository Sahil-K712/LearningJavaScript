// You are given a number, stored in a variable with the name num Find the sum of all even numbers greater than zero, and less than or equal to the value stored in num For example, if the value stored in num = 5, then all the even numbers smaller than or equal to 5, and greater than zero are 2 4 Therefore, 
// the sum becomes, sum = 2+4=6, which is the required output

num=6

{ let sum = 0
  
  
    for(i=1 ; i<=num ; i++){
  
  if(i%2===0)
    
    
    sum +=i }
    
    
    
    {console.log(sum)}
  
      // Write code here
    
  }
  

  // You are given a number, stored in a variable with the name num Find the sum of all odd numbers, greater than 0, and less than or equal to the value stored in num 
  // For example, if the value stored in num = 5 Then, all the odd numbers smaller than 5, will be Finally, print the sum 1 3 5 Therefore, the sum becomes, sum = 1+3+5=9 which is the required output

  num=7
  
  { let sum= 0

    for(i=1 ; i<=num; i++){
      
      if( i%2 !==0)
      
      sum += i
    }
    
    { console.log(sum)}
        // Write code here
        
    }

    

 // You are given a number stored in a variable with the name num Find out the value obtained from the expression i% 10, where consists of all the values from 1 to the value stored in num, including num

 num=7

 { 

    for(let i=1 ; i<=num ; i++)
    
    { console.log(i%10)}
      
      
    
        // Write code here
    }




// Write a program to count the number of even numbers from 1 to N, where N is a positive integer. Implement a function called countEvenNumbers(N) that takes an integer N (1 <= N <= 1000) as input and returns the count of even numbers from 1 to N.

N=5

{ let count = 0
  
    for(let i=1 ; i<=N ; i++) {
      
      if (i%2==0)
      
     count++}
      
      
      { console.log(count) }
    
  
    //write your code here
  }



  // You are given the first term A, common difference D and the number of terms in an arithmetic progression. Write a program to print the first N terms of the arithmetic progression


  A=2
  D=3
  N=5

  { let bag= ""
  
  
    for( i=0 ; i<N ; i++){
      
      
      bag += (A+i*D) + " "
    }
    console.log(bag) }



// You are given a positive integer N. Write a program to calculate and print the sum of the series: 1 + 3 +5+7+ +(2N-1)..

N=5 

{  let sum=0

    for( i=1 ; i<= 2*N-1 ; i++)
    
    if( i % 2==1)
    
    { sum += i }
    
    { console.log(sum)}
      //write your code here
    }



// You are given two positive integers M and N. Write a program to find and print all leap years in the range [M, N]

M=2000
N=2025


{  let result=""
  
  
    for (i=M ; i<=N ; i++) {
  
  
  if((i%100==0 && i%400==0)||(i%100!=0 && i%4==0))
    
    
    result += i + " "
  }
  
  { console.log(result)}
    //write your code here
  }


  

