var str="Hello World";
console.log(str.length)
//  INdexing
var j=str[0]
var b=str[1]
var c=str[2]
var d=str[3]
var e=str[4]
console.log(j)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
// Slicing
var q=str.slice(0,2)
console.log(q)
var w=str.slice(0,1)
var e=str.slice(3,6)
var r=str.slice(5,8)
console.log(w)
console.log(e)
console.log(r)
// Escape Character
var d="Hello\nworld"
// to chande line
var e="Hello\tworld"
// to Horizonta space
console.log(d)
console.log(e)
// String Functins
var food="SANDWHICH"
var updatfood=food.toLowerCase()
console.log(food)
console.log(updatfood)
var updatededfood=updatfood.toUpperCase()
console.log(updatededfood)
var food="Pizza"
var input="Pizza"
if (food.toUpperCase===input.toUpperCase){
   console.log("Match")
}else{
   console.log("not match")
}
var a="To be, or|not,to be";
// Indexof
var b=a.indexOf("be")
console.log(b)
var c=a.indexOf("e")
console.log(c)
var d=a.indexOf("n")
console.log(d)
var e=a.indexOf("be",10)
console.log(e)
var f=a.indexOf("to")
console.log(f)
var g=a.indexOf("To")
console.log(g)
var h=a.indexOf("o",2)
console.log(h)
var i=a.indexOf("o",7)
console.log(i)
// charat
var b=a.charAt(0)
console.log(b)
var c=a.charAt(3)
console.log(c)
var d=a.charAt(7)
console.log(d)
var f=a.charAt(4)
console.log(f)
// replace
var b=a.replace("be","hello")
console.log(b)
var c=a.replace("to","yes")
console.log(c)
var d=a.replace("to","up")
console.log(d)
var b=a.replace(/be/g,"hi")//To replace all the same character in string
console.log(b)
var c=a.replace(/o/g,"Yet")
console.log(c)
var d=a.replace(/e/g,"P")
console.log(d)
var b=a.replace(/to/i,"er")//To replace the initial to. i stands for initial
console.log(b)
var c=a.replace(/be/i,"gr")
console.log(c)
var d=a.replace(/o/i,"up")
console.log(d)
var b=a.replace(/to/gi,"he")
console.log(b)
var c=a.replace(/be/gi,"hee")
console.log(c)
// split
var b=a.split(" ")//To split string with space
console.log(b) 
var c=a.split(",")
console.log(c)
var d=a.split("|")
console.log(d)
