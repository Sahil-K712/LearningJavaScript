// You are given five numbers, stored in the variables with the following names- one, two, three, four, five
// All the values are doubled, that is, 
// they are multiplied by 2 Find the sum of the values stored in one, two, three, four, after the above operation are performed

one=1
two=2
three=3
four=4
five=5

{ one= one*2
    two= two*2
    three= three*2
    four= four*2
    five = five*2
    
    
    console.log(one+two+three+four+five)
        // Write code here
    }
    

    // You are given four numbers, stored in the variables with the following names one, two, three, four Perform the following operations on the four numbers 
    // The value stored in one and two is doubled, such that, if it was 2 initially, it becomes 4 The value stored in three is multiplied by 3, such that, if it was 4, it becomes 12 The value stored in four, is increased by 4, such that if it was 7 initially, it becomes 11 
    // Find the sum of the values stored in one, two, three, four, after the above operations are performed

    one=1
    two=2
    three=3
    four=4

    { one= one*2
        two= two*2
        three = three*3
        four= four+4
        
        
        
        console.log(one+two+three+four)
            // Write code here
        }


        // You are given seven numbers, stored in the variable with the following names a,b,c,d,e,f,g 
        // You have to declare two variables, sum1 and sum2 such that sum1 = (a + b) * c and sum2 = (d+e+f+g) 
        // Print the output of the following operation sum1 > sum2 Input Description The first and the only line of input contains the seven numbers stored in the variable with the names a,b,c,d,e,f,g

        a=1
        b=2
        c=3
        d=4
        e=5
        f=6
        g=7

        { let sum1 = (a+b)*c
            sum2= (d+e+f+g)
            
            
            console.log(sum1>sum2) }



 // Given a value of X, find the final value of X, if X is multiplied by 7 twice.
 
 let x=6
 {  console.log(x*7*7)  
  }


  // You are given five numbers, stored in variables with the following names one, two, three, four, five, six 
  // The value stored in the variable two, five, six has been doubled, such that if initially the value was 3, it has become 6 The value stored in the variable three, four has been increased three times, 
  // such that if initially it was 3, it has become 9 The value stored in the variable one has not been changed. Find the sum of the updated values stored in one, two, three, four, five, six
  
one= 1
two= 2
three= 3
four= 4
five= 5
six= 6

{   two= two*2
    three= three*3
    four= four*3
    five= five*2
    six=six*2
    
    console.log(one+two+three+four+five+six)
      
  }