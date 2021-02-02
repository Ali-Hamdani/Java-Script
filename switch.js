 
// Switch Statment
/*
switch(expression){
    case 'value1'://same as if (expression ===value)
    // code block
    break;
    case 'valu2':
        // code block
        break;
        default:
            // code block
}*/
// --------------------------------------------
var day=6;
switch (day){
    case 6:
        console.log("Today is Saturday");
        break;
        case 0:
            console.log("Today is Sunday");
            break;
            default:
                console.log("Looking forward to the weekend")
}
// switch-Grouping of case
var day=0;
switch(day){
    case 6://No break
    console.log("Today is Saturday")
    case 0: //NO break in last casr so both will execute
    console.log("Today is Sunday");
    break;
    default:
        console.log("Looking forward to the weekend")

}//one other way is this
var day=0;
switch(day){
    case 6:
        case 0:
            console.log("Yaaaa! it's weekend");
            break;
            default:
                console.log("Looking forward to the weekend")
}
// switch -Strict comparison
var x="0";
switch(x){
    case 0:
        console.log("Off")
        break;
        case 1:
            console.log("On")
            break;
            default:
                console.log("No value found")
}
var a="f";
switch(a){
    case "A":
        console.log("A is vowel");
        break;
        case "E":
        console.log("E is vowel");
        break;
        case "I":
            console.log("I is vowel");
            break;
            case "o":
                console.log("o is vowel");
                break;
                case "u":
                    console.log("U is vowel");
                    break;
                    default:
                        console.log("Not vowel");
                        break;
}