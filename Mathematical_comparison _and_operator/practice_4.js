// You are given two numbers, stored in variables with the names num1 and num2 
// Print the output of the following operation num1 > num2, this prints true if num1 is great 
// After this operation is performed, another number, stored in a variable with name num3 is added to num1. After this, print the result of the following operation again num1 > num2, this prints true if numl is great

num1=4
num2=8
num3=5

{  console.log(num1>num2)
    
    num1 = num1+num3
    
    
    console.log(num1>num2)
      // Write code here  
  }


  // You are given five numbers, stored in the variables with the following name one, two, three, four, five You have to declare another variable sum1, such that sum1 = one + two + three Also, you have to declare another variable sum2, such that sum2 = four + five 
  // Finally, you have to print the output of the following operation sum1 > sum2 (This operation prints true,
  // if sumi is greater than sum2, else it prints false)

  one=1
  two=2
  three=3
  four=4
  five=5

  {  let sum1 = one + two + three
     
     sum2= four+five
     
     console.log(sum1>sum2) }

     // You are given the sides of the rectangle 1: L1 and B1 and sides of the rectangle 2: L2 and B2.
     // You need print if area of rectangle 1 is greater than rectangle 2.
     // You need print if perimeter of rectangle 1 is greater than rectangle 2.

     L1= 1
     B1= 2
     L2= 2
     B2= 3

     {  let  Area1 = L1*B1
         
        Area2 = L2*B2
         
         Perimeter1 = 2*(L1+B1)
         
         Perimeter2 = 2*(L2+B2)
         
         console.log(Area1 > Area2)
         
        console.log(Perimeter1> Perimeter2) }


    // You are given two numbers n and m, you need to check if cube of n is greater than square of m

    let n=2
    m=3

    { if(n**3 > m**2)
      { console.log("true")}
      
       else {console.log("false")} }



// You are given two numbers stored in two variables, 
// with the name, num1 and num2 Print the result of the following operations
// 1. num1 > num2 -> this operation prints true,if num1 is greater num2, otherwise it print false
// 2. num1 < num2 -> this operations prints true, if num1 is smaller than num2, otherwise it print false
// 3. num1 == num2 -> this operation print true, if num1 is equal to num2 , otherwise it print false

num1= 4
num2= 16

{ console.log(num1>num2);
    
    console.log(num1<num2);
    
    console.log(num1==num2) }
  
          
      