Sub1t=parseInt(prompt("What are the total marks in English"))
Sub1o=parseInt(prompt("What are the obtaining marks in English"))
var p1=(Sub1o/Sub1t)*100
Sub2t=parseInt(prompt("What are the total marks in Math"))
Sub2o=parseInt(prompt("What are the obtaining marks in Math"))
var p2=(Sub2o/Sub2t)*100
Sub3t=parseInt(prompt("What are the total marks in Computer"))
Sub3o=parseInt(prompt("What are the obtaining marks in Computer"))
var p3=(Sub3o/Sub3t)*100
if (p1>=80){
    document.write("Your percentage in English is"+" "+p1+"% and your Grede=A-plus. Remarks:Excelent<br/>");
}else if(p1>=70){
    document.write("Your percentage in English is"+" "+p1+"% and your Grede=A. Remarks:Good <br/>");
}else if(p1>=60){
    document.write("Your percentage in English is"+" "+p1+"% and your Grede=B. Remarks:You need to" 
    +"improve<br/>");
}else{
    document.write("Your percentage in English is"+" "+p1+"% and your Grede=Fail. Remarks:Sorry <br/>")
}
if (p2>=80){
    document.write("Your percentage in Math is"+" "+p2+"% and your Grede=A-plus. Remarks:Excelent <br/>");
}else if(p2>=70){
    document.write("Your percentage in Math is"+" "+p2+"% and your Grede=A. Remarks:Good <br/>");
}else if(p2>=60){
    document.write("Your percentage in Math is"+" "+p2+"% and your Grede=B. Remarks:You need to" 
    +"improve<br/>");
}else{
    document.write("Your percentage in Math is"+" "+p2+"% and your Grede=Fail. Remarks:Sorry<br/>")
}
if (p3>=80){
    document.write("Your percentage in Computer is"+" "+p3+"% and your Grede=A-plus. Remarks:Excelent<br/>");
}else if(p3>=70){
    document.write("Your percentage in Computer is"+" "+p3+"% and your Grede=A. Remarks:Good<br/>");
}else if(p3>=60){
    document.write("Your percentage in Computer is"+" "+p3+"% and your Grede=B. Remarks:You need to" 
    +"improve<br/>");
}else{
    document.write("Your percentage in Computer is"+" "+p3+"% and your Grede=Fail. Remarks:Sorry<br/>")
}