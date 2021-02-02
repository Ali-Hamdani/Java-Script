// Function
console.log("Defore function");
function showMessage(){
    console.log("Hello World");
}console.log("After function")
showMessage()
console.log("After function call")
// Passing Data to Function
function multiply(num1,num2){
    var num3=num1*num2;
    console.log("num3="+num3)
}
multiply(2,3)
multiply(2,2)
multiply(3,3)
function showMessage(name){
    console.log("Hello"+" "+name)
}
showMessage("Ali")
showMessage("Atif")
showMessage("Salina")
showMessage(45)
showMessage(true)
showMessage()
showMessage("Mike",12)
function sum(n1,n2){
    n3=n1+n2
    console.log("Sum of two numbers"+" "+n3)
}
sum(3,3)
sum(2,2)
sum(2,3)
function findgrade(score){
    if (score>80 && score<100){
        console.log("Grade A");
    }else if (score >70 && score<=80){
        console.log("Grade B");
    }else if (score>60 && score<=70){
        console.log("Grade c");
    }else {console.log("Grade F")}
}
findgrade(56)
findgrade(89)
findgrade(87)
findgrade(45)
function test(){
    return 45
}
var a=test()
var b=test("t")
console.log(a)
console.log(b)
function calculatescore(sub1,sub2,sub3){
    return(sub1+sub2+sub3)/3;
}
var score1=calculatescore(34,54,67)
var score2=calculatescore(45,36,23)
var score3=calculatescore(67,78,65)
console.log(score1)
console.log(score2)
console.log(score3)
// Function in Expressinons
function multiply(a,b){
    return a*b;
}var a=multiply(3,2)+5
// Result of multiply sum with value of b
function sum(a,b){
    return multiply(a,b)+b
}
var total=sum(3,4)+6
console.log(total)
function multiply(num1,num2){
    return num1*num2;
}function sum(a,b){
    return a+b;
}
var total=sum(multiply(3,4),2)+6
console.log(total)
var mul=multiply(8,3);
var add=sum(mul,5);
console.log("Multiply=",+mul);
console.log("Addition="+add);
// ----------------------------------
// Local Vs Global variable
var a=7; // Global variable
function sum(){
    var b=6; //Local variable
var c=a+b
console.log("C="+c)
}
sum();
console.log("A="+a)
// -----------------------------
var a=7;//Global variable
function sum(){
    var a=6 //Local variable same as global variable
    a=3+2;//Local variable a will be effected
    console.log("A="+a)//Access to local variable
}
sum();
console.log("A="+a)//Access to global variable
// --------------------------------------
var a=8;
function sum(){
    var b=6;
    a=b+5
}sum();
console.log("B="+a);
// --------------------------------------------
// Global variables without var keyword,without var still global variable
a=7;
function sum(){
    var b=6;//Local variable
    a=b+5;
    console.log("A="+a)//Accessing global variable
}sum()
console.log("A="+a)//value of a updated
// -------------------------------------------
// Function Expressions
var sum=function(a,b){// Name less function
    return a+b
}
var c=sum(4,5)
console.log(c)
var mul=function(a,b){
    return a*b
}
var d=mul(2,3)
console.log(d)
var div=function(a,b){
    return a/b
}
var f=div(10,2)
console.log(f)
// ---------------------------------------------
var square=function(num){
    return num*num
}
var b=square(4)
console.log(b)
// Function Hoisting
var total=sum(5,6);
// Function Hosting
var total=sum(5,6);
console.log("Sum="+total);
// -------------------------------------------------
// Arguments Passed by value
var num=5;
function changevalue(a){
    a=7//Change to a will not effect num
}
changevalue(num)
console.log(num)
// ---------------------------------------
// Argument passed by reference
var arr=[4,6,7,9];
function updatearray(val){//array receiced in val
val[1]=57;//updateing val will also update arr}
console.log(arr[1]);}
updatearray(arr)
console.log(arr[1])
// ------------------------------------------
var obj={name:"John",age:56};
function updateobject(val){//Object received in val
    val.age=40;//updating val will also update arr
}console.log(obj.age);
updateobject(obj)
console.log(obj.age)
// -------------------------------------------
// This one has no error,only i have to run it separately
var a=[45,5,9,2];
function test(val){
    console.log("val before="+val);
    val[2]=12;
    console.log("val before="+val[2]);
} 
test(a);
console.log("A after="+a);
//  Recursive Function
// A recursive function is a function that calls itself.
function factorial(n){
    if (n<=1){//Recursive function will stop when this condition match.
        return 1;
    }else{return n*factorial(n-1);//calling itself
    }
}
a=factorial(0.6666);
console.log(a)