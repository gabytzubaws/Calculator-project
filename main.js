const clear = document.querySelector(".clear");
const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".calc-display");
const backspace = document.querySelector(".backspace");
const operator = document.querySelectorAll(".operator");
let previous = 0;
let current = 0;
let operation = 0;
let result = 0;


//event listener for clear
clear.addEventListener("click",function(){
    document.querySelector(".calc-display").innerHTML = "0";
    current = 0;
    previous = 0;
})

//event listener for each numbers! (0-9)
for(let i = 0; i < 10; ++i)
{
    numbers[i].addEventListener("click",function(){
        if(display.innerHTML == 0) display.innerHTML =""; // handle special case
        display.innerHTML+= numbers[i].innerHTML;
    })
}
//event listener for decimal pointer
numbers[10].addEventListener("click",function(){
    if(display.innerHTML.includes('.')) return;
    display.innerHTML += '.';
})

//event listener for backspace
backspace.addEventListener("click", function(){

    if(display.innerHTML.length == 1) display.innerHTML = "0";
        else display.innerHTML = display.innerHTML.slice(0, -1);
})

//event listener for operators!
for(let i=0; i < 4; ++i)
{ // 5 operators but we don't assign this kind of event to equal(5th one)!
    operator[i].addEventListener("click", function(){
        operation = operator[i].innerHTML; // + - % or /;
        previous = Number(display.innerHTML); // store it as a number to do the operation!
        document.querySelector(".calc-display").innerHTML = current; // clear display
    })
}
//event listener for equality operator
operator[4].addEventListener("click", function(){
    current = display.innerHTML;
    switch(operation){
        case '*':
        {
            display.innerHTML = previous * current;
            previous = current;
            current = display.innerHTML;
            break;
        }
        case '-':
        {
            display.innerHTML = previous - current;
            previous = current;
            current = display.innerHTML;
            break;
        }
        case '+':
        {
            display.innerHTML = previous + current;
            previous = current;
            current = display.innerHTML;
            break;
        }
        case '%':
        {
            display.innerHTML = (previous / current);
            previous = current;
            current = display.innerHTML;
            break;
        }
    }
    operation = 0;


})
