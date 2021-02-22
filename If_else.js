// If-else
var age=15
if (age>18){
    console.log("Qualifies for driving");
}else{
    console.log("Does not qualify for driving");
}
 age=50
 if (age<60){
     console.log("In if age"+age);
     console.log("Hello");
 }else{
     console.log("In else Age"+age);
 }
 var score=80;
 if (score>80){
     console.log("Grade A");
 } else if (score>70){
     console.log("Grade B")
 } else if (score=60){
     console.log("Grade c")
 }else{
     console.log("failed")
 }
//  Nested if
var score=92;
if (score>80){
    console.log("Grade A");
    if(score>90){
        console.log("Reward $100")
    }else if (score>85){
        console.log("reward $50")
    }else {console.log("Reward $20");
}
}else{console.log("Failed")}