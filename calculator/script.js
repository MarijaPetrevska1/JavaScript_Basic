const screen = document.getElementById('screen');
const numBtns = document.querySelectorAll('.btn-num');
const opBtns = document.querySelectorAll('.btn-op');
const equalBtn = document.getElementById('btn-equal');
const clearBtn = document.getElementById('btn-clear');

let firstNumber = "";
let operator = "";
let secondNumber = "";

for(let i=0; i<numBtns.length; i++)
{
    numBtns[i].addEventListener("click", function ()
     { if(screen.textContent === "0") {
        screen.textContent = this.textContent;
     } else {
        screen.textContent += this.textContent;
     }
    });
}

for(let i=0; i<opBtns.length; i++)
{
    opBtns[i].addEventListener("click", function() {
        firstNumber = screen.textContent;
        operator = this.textContent;
        screen.textContent = "0";
    })
}

equalBtn.addEventListener("click", function() {
    secondNumber = screen.textContent;
    let result = 0;

    if(operator === "+")
    {
        result = Number(firstNumber) + Number(secondNumber);
    } else if (operator === "-")
    {
        result = Number(firstNumber) - Number(secondNumber);
    } else if (operator === "*")
    {
        result = Number(firstNumber) * Number(secondNumber);
    } else if (operator === "/")
    {
        result = Number(firstNumber) / Number(secondNumber);
    }

    screen.textContent = result;
});

clearBtn.addEventListener("click", function() {
    screen.textContent = "0";
    firstNumber = "";
    operator = "";
    secondNumber = "";
});