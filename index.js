//  While Loop
var i=0
while (i<10){
    console.log("I="+i);
    i++;
}
// do while
var i=2
do{
    console.log("I="+i)
    i++
}while(i<5)
// -----------------------
var docontinue=true;
while(docontinue){
    console.log("Hello");
    var Input=prompt("Please enter Y to run again or any key to stop");
    if (Input.toLowerCase()!=="y"){
        docontinue=false;
    }
}