// //  Array
// var arr1=["Hello","world","Bye"];
// var arr2=[29,38,16,22];
// var arr3=[true,false,true,false,true,false];
// var arr4=[33.4,55.2,232.1,565.4]
// var arr5=[{name:"john"},{name:"jason"}];
// var arr6=[74,"Hello",true,{name:"john"}];
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)
// console.log(arr4)
// console.log(arr5)
// console.log(arr6)
// // Accessing array elements
// var foods=["Pizza","Burger","Snacks"];
// console.log(foods)
// console.log(foods[0])
// console.log(foods[1])
// console.log(foods[2])
// // If we try to access the element which does not exist.The result will be undefined.
// console.log(foods[5])
// console.log(foods[9])
// // Store result in variable or show output directly
// console.log(foods)
// var a=foods[0];b=foods[1];c=foods[2];
// console.log(a);console.log(b);console.log(c)
// console.log(foods)
// // Add or replacing element using index
// var fastfoods=[];
// fastfoods[0]="Aluwalanan"
// fastfoods[1]="pakora"
// fastfoods[2]="Samosa"
// console.log(fastfoods)
// // Replacing existing elements
// fastfoods[0]="Sandwich"
// fastfoods[1]="French Fries"
// console.log(fastfoods)
// // Length of array
// console.log(foods)
// console.log(foods.length)
// console.log(fastfoods)
// console.log(fastfoods.length)
// a=[]
// console.log(a)
// console.log(a.length)
// // Adding element by push function
// foods.push("Jalabi")
// foods.push("Roti")
// foods.push("Pakora")
// foods.push("Salan")
// foods.push(prompt("Enter the first food item"))
// foods.push(prompt("Enter the second food item"))
// foods.push(prompt("Enter the third food item"))
// console.log(foods)
// // Stack(Last in first out)
// var drinks=[ ];
// drinks.push("cola")
// drinks.push("oring juice")
// drinks.push("pepsi")
// drinks.push("water")
// console.log(drinks)
// drinks.pop()
// drinks.pop()
// drinks.pop()
// console.log(drinks)
// // Queue (First in first out)
// var sweets=[];
// sweets.push("rasgula")
// sweets.push("barfi")
// sweets.push("gulabjamun")
// console.log(sweets)
// sweets.shift()
// sweets.shift()
// sweets.shift()
// console.log(sweets)
// // ---------------------------------------------
var a=[1,2,3,4,5,6,7,8,9,10]
input=parseInt(prompt("Enter a number to find in array"))
for(i=0;i<a.length;i++){
    if (a[i]===input){
        console.log("Input number is found at index"+" "+i)
    }
}
// Adding element without deleting or replacing in Array,first is index ,second is number of deleteing 
// elements
var foods=["Pizza","Burger","Snacks"];
console.log(foods)
foods.splice(1,0,"Sandwich");
console.log(foods);
foods.splice(0,0,"sharbt")
console.log(foods)
foods.splice(3,0,"yes")
console.log(foods)
// Slicing the array emements
var ar=foods.slice(1,3);
console.log(foods)
console.log(ar)
var ad=foods.slice(0,2)
console.log(ad)
var ae=foods.slice(2,4)
console.log(ae)
// Some extra function of array,I will learn it later.Like   filter,find,indexof,lastindexof,map,reverse
// sort
at=foods.indexOf("Pizza")
console.log(at)
aaf=foods.filter()
console.log(aaf)