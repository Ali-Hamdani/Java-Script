// Value conversion to boolean
/* 1.Following values will be converted to false
a.null,b.NaN,c.0,d."or" 'or',e,undefined
2.All else will be converted to true*/
var a1='cat'&&'Dog'
var a2=false&&'cat'
var a3='cat'&&false
var a4=" "&&false
var a5=false&&' '
var a6=0&&1
var a7=1&&false
var a8=true&&{ }
var a9=false&&{ }
var a10='cat'&&(3==4)
var a11=undefined&&'cat'
// -------------------------------------------------------
var a1="cat"||"Dog"
var a2=false||"cat"
var a3="cat"||false
var a4=''||false
var a5=false||''
var a6=0||1
var a7=1||false
var a8=true||{ }
var a9=false||{ }
var a10='cat'||(3==4)
var a11='cat'||0
var a12=undefined||'cat'
// ---------------------------------------------------------
var a=0
var b=8
var c=true&&0&&"cat"
console.log("c="+c)
var d=" "||"cat"||0
console.log("c="+c)
var c=false&&{ }
console.log("c="+c)