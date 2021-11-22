const numbtns = document.querySelectorAll('.num');
const output = document.querySelector('.output');
const operators = document.querySelectorAll('.operators');

numbtns.forEach((button)=>{
    button.addEventListener('click', function(e){
        changeDisplay(e.target.id);
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
let num1;
let num2;
let operation;


function mainFunction(operator){

    switch (operator){
        case "clear":
            output.textContent = "";
            break;
        case "backspace":
            // I DONT KNOW HOW TO DO THIS YET
            break;
        case "add":
            console.log("ADD")
            operation = "+";
            if (isNaN(num1)){
                num1 = getValue();
            }else{
                num2 = getValue();
                console.log("NUM  " + num2);
                operate(operation, num1, num2);
            }

            output.textContent = "";
            
            
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
            console.log("Invalid Operator")
    }
}

function add(a, b) {return a+b;}
function subtract (a, b) {return a-b;}
function multiply (a, b) {return a*b;}
function divide (a, b) {return a/b;}
