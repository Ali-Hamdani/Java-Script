//Alert can be used by 2 ways.window.aleart or alert.Alert only work in browser.
window.alert("hi")
alert("555")
//Alert command will not run on node js.To check the installation of node.js use command (node -v) in 
//cmd.To use javascript directly in node.js in cmd.Use these command in cmd.
/*
node
> var a=5;
undefined
>a
5  
To come out from node use command .exit */
console.log("kugjhghkhhg");
console.log("How are you? What are you doing?")
console.log("What happend?")
/* To see the console.log in  google crom browser use inspect & then see console. html file of 
console.log will only show in console tab. OR we can see javascript js file in node.js.In cmd
,first go to the location where the file is.type    node filename.js  */
 document.write("324234234")
 document.write("sdfsdfsdfsdfsdfsd")
 document.write("fjgkhghgkjhdfkjghdhg")
 /* We don't use document.write("") because it intrepte the html file. Its data will show before the
 html text*/
   /*var  is keyword to creat variable. nationality is variable name/identifier. = is assignment operator.
 Pakistan is a value.*/
 var nationality="Pakistan";
 var age=25;
 var isfeepaid=true;
 var weight=60.55;
 console.log(nationality);
 console.log(isfeepaid);
 console.log(weight);
 console.log(age);
 //alert will not run on node js
 alert(nationality)
 alert(age)
 alert(isfeepaid)
 alert(weight)
 age=55; // age is updated
 console.log(age)
 //Undefined & null values
 var width;//not initalizate so undefined
 var na="dfdf";
 na=undefined;
 console.log(width)
 console.log(na)
 // null variable
 var me=null;
 var wo="dfdfdfd";
 wo=null;
 console.log(me)
 console.log(wo)
 //Variable for String
 var Name="Mark";
 var message="It is alright";
 console.log(Name)
 console.log(message)
 Name="john"; //Name is updated
 console.log(Name)
 console.log(message)
 // Variable for numbers
 age=34; // Updated agian 
 var count=56;
 var sum=3+5
 var a=6;
 var b=9;
 var c=a+b;
 console.log(age)
 console.log(count)
 console.log(sum)
 console.log(a)
 console.log(b)
 console.log(c)
 //Variable for booleans
 var isfeepaid=true;
 var exampassed=false;
 console.log(isfeepaid);
 console.log(exampassed);
 /*Javascript data types are dynamic.Javasvript has dynamic types.This means that the same variable can 
be used to hold different data types.*/
var age=34;
console.log(age);
age="Hello";
console.log(age)
age=true;
console.log(age)
//typeof
var Name="Hello";
var isfeepaid=false;
console.log(typeof age)
console.log(typeof Name)
console.log(typeof isfeepaid)
alert(typeof age)
alert(typeof Name)
alert(typeof isfeepaid)
 //Statement and Expressions
 //Each line below is a statement.
 var a=4;                           //Statement 1
 var b=2;                           //Statement 2
 var c=0;                           //Statement 3
 c=a+b;                             //Statement 4
 alert(a)                           //Statement 5
 console.log(c);                    //Statement 6
 //Expression
 /*An expression is a combination of values variables.Function calls and operator,which computes to a 
 value. The computation is called an evaluation.
 a+b;
 4/3
 var a=5;
 a*4;
 "john" " "+"Doe";*/

//Arithmetic Operators
var a=4;
var b=2;
var c=a+b;
var d=a-b;
var e=a*b;
var f=a/b;
var g=a%b;
var h=a**b;
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
//Assignment Operators
//Example;                                           //Same as
a+=5;                                                 a=a+5;
a-=5;                                                 a=a-5;
a*=5;                                                 a=a*5;
a/=5;                                                 a=a/5;
a%=5;                                                 a=a%5;
a**=5;                                                a=a**5;
 /*BODMAS
 B  Brackets first
 O  orders(i.e. Powers ans square roots,etc)
DM  Division and Multiplication(left_to_right)
AS  Addition and Subtraction(left_to.right)*/
//Concatenating
var a="6"+2;
var b=3+"6";
var c="Hello"+2;
var d =2+"Hello";
var e="Hello"+3+4;
var f=3+4+"Hello"
var g="Hello"+(3+4);
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)
var Name=prompt("What is your name?");
console.log(Name)
// Default value
var age=prompt("What is your age?","29");
console.log(age)
var newage=age+334;
console.log(newage)

//  Comparision operators
var a="5";
var b=5;
console.log(a==b)
console.log(a===b)
console.log(a!=b)
console.log(a>b);
console.log(a<b)
console.log(a>=b)

console.log(a<=b)
// Logical operators
// &&(AND).In this if there is only one side is false && operator will return false.
console.log(true&&true)
console.log(false&&true)
console.log(true&&false)
console.log(false&&false)
var a=34
var b=a>32&&a<45
console.log(b)
var c=a<3&&a>30
console.log(c)
var d=a<3434&&a>98
console.log(d)
var e=a<32&&a>37
console.log(e)
// ||(or).In this if there is only one side is true || operator will return true.
console.log(true||true)
console.log(false||true)
console.log(true||false)
console.log(false||false)
var a=60;
var b=a<50||a>70
console.log(b)
c=80
var d=c<50||c>70;
console.log(d)
var a=5;
var b=6;
var c=a<10||a>20;
console.log(c)
// !(NOT).This operator will change true into false and false into true.
console.log(!true)
console.log(!false)
a=60
var b=!(a<50);
console.log(b)
var c=80;
var d=!(c>50);
console.log(d)
var a=60
var b=a>100;
var c=!b;
var d=!(a>100);
var e=!true;
console.log("A="+a)
console.log("B="+b)
console.log("c="+c)
console.log("D="+d)
console.log("E="+e)
console.log(!1)
console.log(!0)
console.log(!!1)
console.log(!!0)
var a=6;
var b=!a;
var c=!!a;
console.log("A="+a)
console.log("b="+b)
console.log("c="+c)

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