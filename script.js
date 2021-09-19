let operators = {
    "+": function(a, b) {
        return a + b;
    },
    "-": function(a, b) {
        return a - b;
    },
    "/": function(a, b) {
        return a / b
    },
    "*": function(a, b) {
        return a * b;
    },
}
const calculate = function(val1, val2, sign) {
    if (sign in operators) {
        return operators[sign](val1, val2);
    }
};

// console.log(calculate(10, 2, "+"));

let number1 = "";
let sign = "";

let inputEnter = document.getElementById("inputEnter");

let button = document.getElementById("btnPlus");

let btnMinus = document.getElementById("btnMinus");

let btnTimes = document.getElementById("btnTimes");

let btnDivid = document.getElementById("btnDivid");

let btn7 = document.getElementById("btn7");

let btn8 = document.getElementById("btn8");

let btn9 = document.getElementById("btn9");

let btnEqual = document.getElementById("btnEqual");

let btn4 = document.getElementById("btn4");

let btn5 = document.getElementById("btn5");

let btn6 = document.getElementById("btn6");

let btn1 = document.getElementById("btn1");

let btn2 = document.getElementById("btn2");

let btn3 = document.getElementById("btn3");

let btn0 = document.getElementById("btn0");

let btnDot = document.getElementById("btnDot");

let btnClose = document.getElementById("btnClose");

btn0.addEventListener("click", function() {
    number1 = number1 + "0";
    inputEnter.value = number1;
});
btn1.addEventListener("click", function() {
    number1 = number1 + "1";
    inputEnter.value = number1;
});
btn2.addEventListener("click", function() {
    number1 = number1 + "2";
    inputEnter.value = number1;
});
btn3.addEventListener("click", function() {
    number1 = number1 + "3";
    inputEnter.value = number1;
});
btn4.addEventListener("click", function() {
    number1 = number1 + "4";
    inputEnter.value = number1;
});
btn5.addEventListener("click", function() {
    number1 = number1 + "5";
    inputEnter.value = number1;
});
btn6.addEventListener("click", function() {
    number1 = number1 + "6";
    inputEnter.value = number1;
});
btn7.addEventListener("click", function() {
    number1 = number1 + "7";
    inputEnter.value = number1;
});
btn8.addEventListener("click", function() {
    number1 = number1 + "8";
    inputEnter.value = number1;
});
btn9.addEventListener("click", function() {
    number1 = number1 + "9";
    inputEnter.value = number1;
});
btnClose.addEventListener("click", function() {
    const editedText = number1.slice(0, -1); //'abcde'
    number1 = editedText;
    inputEnter.value = number1;
});
btnDivid.addEventListener("click", function() {
    number1 = number1 + "/";
    sign = "/";
    inputEnter.value = number1;
});
btnPlus.addEventListener("click", function() {
    number1 = number1 + "+";
    sign = "+";
    inputEnter.value = number1;
});
btnDot.addEventListener("click", function() {

    number1 += ".";
    inputEnter.value = number1;
});
btnTimes.addEventListener("click", function() {
    number1 += "*";
    sign = "*";
    inputEnter.value = number1;
});
btnMinus.addEventListener("click", function() {
    number1 += "-";
    sign = "-";
    inputEnter.value = number1;
});
btnEqual.addEventListener("click", function() {
    if (sign !== "") {
        const number = number1.split(sign);
        const result = calculate(parseInt(number[0]), parseInt(number[1]), sign)

        console.log(result);
    }







    // const abantu = 'emer,shami,me'
    // const arrayYaAbantu = abantu.split(',')
    // console.log(arrayYaAbantu);
});