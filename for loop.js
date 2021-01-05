//  For Loop
for (i=0;i<3;i++){
    console.log(i)
}
// ---------------------------
console.log("Started new loop")
for (i=9;i<=12;i++){
    console.log(i)
}
// ---------------------------
console.log("Started new loop")
console.log("Infinite loop")
// for ( ; ; ){console.log("what")}
console.log("new loop")
var a=3;
for(i=1;i<=10;i++){
    console.log(a+"X"+i+"="+(a*i))
}
d=parseInt(prompt("Enter any number"))
for (i=1;i<=10;i++){
    console.log(d+"X"+i+"="+(d*i))
}
// Break
for (var i=0;i<6;i++){
    if(i===4){break;}
    console.log("This is i value"+" "+i)
}
// Continue
for (i=0;i<7;i++){
    if(i===4){continue;}
    console.log(i)
}
// Figureing out prime number
num=parseInt(prompt("Enter any number"));
for(var i=2;i<num;i++){
    var result=num%i;
    if(result===0){
        console.log("Number"+" "+num+" "+"is not a prime number")
        break;}
        else{console.log("Number"+" "+num+" "+"is prime")}
}
// Nested for loop
for (var i=0;i<3;i++){
    for (var j=0;j<2;j++){
        console.log("I="+i+"J="+j);
    }
}
var foods=["Pizza","Burger","Snacks"];
for (var i=0;i<foods.length;i++){
    console.log(foods)
}
var foods=[4,78,54,5,6]
for (var i=0;i<foods.length;i++){
    console.log(foods[i])
}
var arr=[]
for (var i=0;i<5;i++){
    arr[i]=i*4;
}
for (var j=0;j<arr.length;j++){
    console.log(arr[j])
}