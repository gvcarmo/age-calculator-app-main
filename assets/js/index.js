const btn = document.getElementsByClassName('btn');

const allInputs = document.querySelectorAll('.allInputs');

const requiredMessage = document.querySelectorAll('.required');

const mustBeValid = document.querySelectorAll('.no-valid');

const yearCalc = document.querySelector('.year-calc');
const monthCalc = document.querySelector('.month-calc');
const dayCalc = document.querySelector('.day-calc');

const actualDate = new Date();
const currentYear = actualDate.getFullYear();
const currentMonth = actualDate.getMonth() + 1; 
const currentDay = actualDate.getDate(); 

btn[0].addEventListener('click', () => {
    let input1 = allInputs[0].value;
    let input2 = allInputs[1].value;
    let input3 = allInputs[2].value;

    if(!input1) {
        allInputs[0].classList.add("required-field");
        requiredMessage[0].classList.add("no-text");
        mustBeValid[0].classList.remove("not-ok");
    } else if(input1 > 31 || input1 < 1) {
        allInputs[0].classList.add("required-field");
        mustBeValid[0].classList.add("not-ok");
        requiredMessage[0].classList.remove("no-text");
    } else if(input1 < 32 || input1 > 0) {
        allInputs[0].classList.remove("required-field");
        mustBeValid[0].classList.remove("not-ok");
        requiredMessage[0].classList.remove("no-text");

        dayCalc.innerText = currentDay - input1;

        if(currentDay - input1 < 0){
            dayCalc.innerText = currentDay - input1 + 31;
        }
    }

    if(!input2) {
        allInputs[1].classList.add("required-field");
        requiredMessage[1].classList.add("no-text");
        mustBeValid[1].classList.remove("not-ok");
    } else if(input2 > 12 || input2 < 1) { 
        allInputs[1].classList.add("required-field");
        mustBeValid[1].classList.add("not-ok");
        requiredMessage[1].classList.remove("no-text");
    } else if(input2 > 0 || input2 < 13) {
        allInputs[1].classList.remove("required-field");
        mustBeValid[1].classList.remove("not-ok");
        requiredMessage[1].classList.remove("no-text");

        monthCalc.innerText = currentMonth - input2;

        if(currentDay - input1 < 0) {
            monthCalc.innerText = currentMonth -input2 -1;
        }
        
    }

    if(!input3) {
        allInputs[2].classList.add("required-field");
        requiredMessage[2].classList.add("no-text");
        mustBeValid[2].classList.remove("not-ok");
    } else if(input3 > 2024 || input3 < 1) { 
        allInputs[2].classList.add("required-field");
        mustBeValid[2].classList.add("not-ok");
        requiredMessage[2].classList.remove("no-text");
    } else if(input3 > 0 || input3 < 13) {
        allInputs[2].classList.remove("required-field");
        mustBeValid[2].classList.remove("not-ok");
        requiredMessage[2].classList.remove("no-text");

        yearCalc.innerText = currentYear - input3;

    }
    
})