// You are given five numbers, stored in the variables with the following names
// one, two, three, four, five Find the value of sum1 and sum2, such that sum1 one + two sum2 three + four 
// If the value of sum1 or sum2 is greater than the value stored in variable five, print Yes, else print No

let one=1
two=2
three=3
four=4
five=5


{ if ((one>two)&&(three>four))
    {console.log("Yes")}
    
    else { console.log("No")}
    
      // Write code here
      
  }

  // You are given six numbers, stored in the variables with the following names one, two, three, four, five, six 
  // Find the value of sum1 and sum2, such that sum1 one + two 
  // sum2 = four + five  If both the following two conditions are true, print else print No sum1 > three sum2 > six Yes

   one=1
  two=2
  three=3
  four=4
  five=5
  six=6

  {
    let sum1 = one + two
    let sum2 = four + five 
    
    if ((sum1>three)&&(sum2 >six))
    
   { console.log("Yes")}
    
    else { console.log("No")}
      // Write code here
  }

  // You are given two numbers, stored in the variable with the following names one, two If both the values are Even, print Both, else print No

  one=4
  two=7

  {
    if ((one%2===0)&&(two%2===0))
    {console.log("Both")}
    
    else { console.log("No")}
      // Write code here
  }


  // You are given two numbers, stored in the variable with the following names: one , two
  // if both the values are even, print Even Else if both the values are odd, print Odd else print even-odd


  one=3
  two=6

  { if((one%2===0)&&(two%2===0))
    { console.log("Even")}
    
    else if ((one%1===1)&&(two%1===1))
    {console.log("Odd")}
    
    else { console.log("Even-Odd")}
        // Write code here
    }

    
// You are given a number, stored in the variable, with the name num Print the required value according to the following conditions
//  if num = 1, print "Monday" num = 2, print "Tuesday" num = 3, print "Wednesday" num = 4, print "Thursday" num = 5, print "Friday" num = 6, print "Saturday" num = 7, print "Sunday"
  
num= 2
 if (num === 1) {
      console.log("Monday");
    } else if (num === 2) {
      console.log("Tuesday");
    } else if (num === 3) {
      console.log("Wednesday");
    } else if (num === 4) {
      console.log("Thursday");
    } else if (num === 5) {
      console.log("Friday");
    } else if (num === 6) {
      console.log("Saturday");
    } else if (num === 7) {
      console.log("Sunday");
    }



    // You are given a number stored in a variable with the name num
    // Find the value of, such that x = num % 10
    // Print the answer according to the following conditions If
    // x = 0 print 'zero`  
    //x = 1 print 'one' x = 2 print 'two' x = 3 print 'three' x = 4 print 'four' x = 5 print 'five' x = 6 print 'six' x = 7 print 'seven'
    // x = 8, print 'eight' x = 9, print 'nine'

    num=12

    { let x=num%10


        if (x===0) { console.log("zero")}
        
        else if (x===1) { console.log("one")}
        
        else if (x===2) { console.log("two")}
        
        else if (x===3) { console.log("three")}
        
        else if (x===4) { console.log("four")}
        
        else if (x===5) { console.log("five")}
        
        else if (x===6) { console.log("six")}
        
        else if (x===7) { console.log("seven")}
        
        else if (x===8){console.log("eight")}
        
        else if (x===9) {console.log("nine")}
    }