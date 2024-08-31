// You are given two numbers, stored in the variable with the following names
//  fuel, distance Find the value of required, such that required fuel*distance If the value of required is greater than 50, print Enough, else print Go On

let fuel=1
distance=46

{ let required = fuel* distance
    if(required>50) { console.log("Enough")}
    else { console.log("Go On")}
    }


// Haren wants to change his profile picture on Facebook. Now Facebook has some restriction over the dimension of picture that we can upload
// Length of every picture uploaded should be greater than L and width should be greater than W
// if his picture passes both the criteria, print "Upload" In case it could not pass becuase of length, print "Increase Length" In all other cases, print "Increase Width"

L=12
W=14
lengthUploaded=8
widthUploaded=19

{
    if((lengthUploaded>L)&&(widthUploaded>W))
      //write your code heif( (lengthuploaded>L)&&(WidthUploaded>W))
    { console.log("Upload")}
    
    else if (lengthUploaded<L)
    { console.log("Increase Length")}
    
    else
     { console.log("Increase Width")}
      //write your code here
  
  }

  // You are given a number, stored in the variable with the name total If the following expression is true total == 100, print "A", without quotes
  // Else if the following expression is true, total >= 90, print "B", without quotes
  // Else if the following expression is true, total >= 80, print "C", without quotes Else, print "F", without quotes

  let total= 80

  { if (total==100) { console.log("A")}
   else if (total>= 90) { console.log("B")}
   else if (total>=80) { console.log("C")}
   else { console.log("F")}
  // Write code here
}


// You are given 3 parameters of two different cricket teams in World Cup Final. First parameter: Score Second parameter: Score in super over Third parameter: Total number of fours scored in the inning. 
// If first parameter of any one team is greater than other then that team wins. If first parameter of both the teams are same, then the team whose second parameter is greater wins the match. In case the second parameter is also same, then the team that has higher value of third parameter wins the game.

nzScore=241
nzSuperOver=15
nzFour=21
engScore=241
engSuperOver=15
engFour=26

{ if (nzScore>engScore)
    { console.log("New Zealand")}
    
    else if (nzSuperOver > engSuperOver)
    {console.log("New Zealand")}
    
    else if (nzFour> engFour)
    { console.log("New Zealand")}
    
    
    else { console.log("England")}
    //write your code here
  }



  // You are given four numbers stored in variables with the following names one, two, three, four 
  // If the value of both the following expression is true, print Yes, else print No 1. one > two 2. three > four

  let one=1
  two=2
  three=4
  four=3

  { if ((one>two)&&(three>four))
    {console.log("Yes")}
    
    else { console.log("No")}
    
      // Write code here
      
  }
  
