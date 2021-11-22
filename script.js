const numbtns = document.querySelectorAll('.num');
const output = document.querySelector('.output');
const operators = document.querySelectorAll('.operators');

let num1;
let num2;
let operation;
let firstnum = true;

numbtns.forEach((button)=>{
    button.addEventListener('click', function(e){
        if (num1 == undefined){
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
    })
})

operators.forEach((button)=>{
    button.addEventListener('click', function(e){
        mainFunction(e.target.className);
    })
})

function changeDisplay (value){
    output.textContent += value;
}

function getValue (){
    return parseFloat(output.textContent);
}


function mainFunction(operator){

    switch (operator){

        case "clear":
            output.textContent = "";
            num1 = undefined;
            num2 = undefined;
            firstnum = true;
            break;

        case "backspace":
            // I DONT KNOW HOW TO DO THIS YET
            break;

        case "add":
            operation = "+";
            if (isNaN(num1) == false && isNaN(num2) == false ){
                output.textContent = "";
                operate(operation, num1, num2);
            }
            if (num1 == undefined){
                num1 = getValue();
            }else {
                num2 = getValue();
            }
            break;
        
        case "subtract":
            operation = "-";
            if (num1 == undefined){
                num1 = getValue();
            }else {
                num2 = getValue();
            }
            break;
        
        case "multiply":
            operation = "*";
            if (num1 == undefined){
                num1 = getValue();
            }else {
                num2 = getValue();
            }
            break;
        
        case "divide":
            operation = "/";
            if (num1 == undefined){
                num1 = getValue();
            }else {
                num2 = getValue();
            }
            break;


        case "equals":
            num2 = getValue();
            output.textContent = "";
            operate(operation, num1, num2);
            num1 = getValue();
            num2 = undefined;
            firstnum = true;
            
    }
}


function operate (oper, a, b){
    switch (oper){
        case "+":
            changeDisplay(add(a, b));
            break;
        case "-":
            changeDisplay(subtract(a, b));
            break;
        case "*":
            changeDisplay(multiply(a, b));
            break;
        case "/": 
            changeDisplay(divide(a, b));
            break;
        default:
            console.log("Invalid Operator: " + oper)
    }
}

function add(a, b) {return a+b;}
function subtract (a, b) {return a-b;}
function multiply (a, b) {return a*b;}
function divide (a, b) {return a/b;}
