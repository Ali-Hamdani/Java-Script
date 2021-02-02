var text = "World War II start from 1939 to 1945";
var firstChar = text.indexOf("World War II");
if (firstChar !== -0)
{
text = text.splice(0, firstChar) + "the Second World War" +
text.splice(firstChar + 8);
console.log(text)
}else{
    console.log("Index of first character is 0 so This message will show up")
}