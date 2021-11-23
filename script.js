const numbtns = document.querySelectorAll('.num');
const output = document.querySelector('.output');
const operators = document.querySelectorAll('.operators');
const decimalbtn = document.querySelector('.decimal');

document.addEventListener('keydown', function(e){
    if (isNaN(e.key) == false || (e.key == "." && output.textContent.includes('.') == false)){
        if (firstnum == true){
            output.textContent = "";
            firstnum = false;
            changeDisplay(e.key);
        }else {
            changeDisplay(e.key);
        }
    }

    switch (e.key){
        case '+':
            mainFunction('add');
            break;
        case '-':
            mainFunction('subtract');
            break;
        case '*':
            mainFunction('multiply');
            break;
        case '/':
            mainFunction('divide');
            break;
        case 'Enter':
        case '=':
            mainFunction("equals");
            break;
        case 'Backspace':
        case 'Delete':
            mainFunction('backspace');
            break;
        case 'C':
        case 'c': 
            mainFunction("clear"); 
            break;
    }

})

let num1;
let num2;
let operation = "";
let firstnum = true;
let btnequals = false;

numbtns.forEach((button)=>{
    button.addEventListener('click', function(e){
        if (firstnum == true){
            output.textContent = "";
            firstnum = false;
            changeDisplay(e.target.id);
        }else {
            changeDisplay(e.target.id);
        }
        
    })
})

decimalbtn.addEventListener('click', function(e){
    if (output.textContent.includes('.') == false){
        if (num1 == undefined || isNaN(num1)){
            changeDisplay(e.target.id);
        } else {
            if (firstnum == true){
                output.textContent = "";
                firstnum = false;
                changeDisplay(e.target.id);
            }else {
                changeDisplay(e.target.id);
            }
        }
    }
})


operators.forEach((button)=>{
    button.addEventListener('click', function(e){
        mainFunction(e.target.className);
    })
})



function mainFunction(operator){
    if (operator !== "equals" && operator !== "backspace" && operator !=="clear"){
        if (num1 == undefined){
            num1 = getValue();
            
            if (operation == ""){
                operation = operator;
            }else{
                
            }

        }else{
            num2 = getValue();
            output.textContent = "";
            if (operation == ""){
                operation = operator;
            }
            operate(operation, num1, num2);
            operation = operator;
        }
    }

    switch (operator){
        case "clear":
            output.textContent = "";
            num1 = undefined;
            num2 = undefined;
            operation = "";
            firstnum = true;
            break;

        case "backspace":
            // I DONT KNOW HOW TO DO THIS YET
            deleteChar();
            break;

        case "equals":
            num2 = getValue();
            if (isNaN(num1) || isNaN(num2)){break;}
            output.textContent = "";
            btnequals = true;
            operate(operation, num1, num2);
            operation = "";
            firstnum = true;
            break;

        default: 
            firstnum = true;
            break;
            
    }
    // if (operator !== "equals" && operator !== "backspace" && operator !=="clear"){
    //     if (isNaN(num1) == true){
    //         num1 = getValue();
    //         console.log("NO OPERATION");
    //     }else {
    //         num2 = getValue();
    //         output.textContent = "";
    //         firstnum = true;
    //         console.log("OPERATION")
    //         operate(operation, num1, num2);
    //     }  
    // }

}


function operate (oper, a, b){
    switch (oper){
        case "add":
            changeDisplay(+parseFloat(add(a, b).toFixed(8)));
            break;
        case "subtract":
            changeDisplay(+parseFloat(subtract(a, b).toFixed(8)));
            break;
        case "multiply":
            changeDisplay(+parseFloat(multiply(a, b).toFixed(8)));
            break;
        case "divide": 
            if (b == 0){ 
                output.textContent = "Cant do that buddy"
            }else {
                changeDisplay(+parseFloat(divide(a, b).toFixed(8)));
            }
            break;
        default:
            console.log("Invalid Operator: " + oper)
    }
    (btnequals) ? num1 = undefined : num1 = getValue();
    
    btnequals = false;
    num2 = undefined;
    firstnum = true;
    console.log("FirstNum: " + firstnum);
    console.log("OPERATION RESET");
}

function deleteChar()
{
    let text = output.textContent;
    if (text !== ""){
        output.textContent = text.slice(0, -1);    
    } 
}

function add(a, b) {return a+b;}
function subtract (a, b) {return a-b;}
function multiply (a, b) {return a*b;}
function divide (a, b) {return a/b;}


function changeDisplay (value){
    output.textContent += value;
}

function getValue (){
    return parseFloat(output.textContent);
}
