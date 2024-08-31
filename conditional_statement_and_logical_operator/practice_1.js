// You are given a number, stored in the variable with the name N Print Yes, if the number is divisible by 4,
// else No 5  A number is divisible by 4, if the resultof the following expression number % 4 == 0

let N=12

{ if( N%4 === 0) { console.log("Yes");
} 
else { console.log("No") 
}
    // Write code here
}



// You are given a number, stored in a variable with the name N. 
// Check if the the number is divisible by 3 or not If its possible, 
// print "Yes" Else print "No" Hint: A number can be divided into 3 parts, if the number is completely divisible by 3, that is, the answer of the operation number % 3 is zero

 N=6

{ if( N%3 ===0) {console.log("Yes")}
else  { console.log("No")}
}


// You are given two numbers, scored in variables with the following names
// Australia, England
// If the following expression is true 
// Australia > England, print "Australia"
// else if the following expression is true Australia < England, print "England"
// else if the following expression is true Australia == England, print "Tie"


let Australia= 46
England= 67

{ if (Australia>England)
    { console.log("Australia") }
    
    else if (Australia<England)
    { console.log("England")}
    
    else if(Australia==England)
    { console.log("Tie")}
    }

    // You are given a number, stored in the variable with the name N If the number is even, print Even, 
    // else print Odd If the number is divisible by 2, the number is considered Even, else the number is considered Odd
    
    N=5
    { if( N%2 === 0)
        { console.log("Even")}
        else { console.log("Odd")} 
        }

// You are given two numbers stored in the variable with the names distance, time 
// Find the value of speed, such that, speed distance/time If the following expression is true speed > 40, print "Apply Brake" else print "Keep Going" Print the statements, without quotes

let distance=100
time=2

{ let speed = distance/time

    if(speed> 40) { console.log("Apply Brake")}
    else { console.log("Keep Going")}
    }