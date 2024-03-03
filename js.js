function add (num1,num2) {
    return num1 + num2
}

function subtract (num1,num2) {
    return num1 - num2 
}

function multiply (num1,num2) {
    return (num1*num2)
}

function divide (num1,num2) {
    return num1/num2
}

const input =  document.querySelector("input");
const equal = document.querySelector("#equal");
const pluss = document.querySelector("#plus");
const minuss = document.querySelector("#minus");
const multiplyy = document.querySelector("#multi");
const dividee = document.querySelector("#divd");
const resultDisplay = document.querySelector("#display >p");
const currentDisplay = document.querySelector(".current");

const numbs= document.querySelectorAll(".numbs");
numbs.forEach (function(numb) {
    numb.addEventListener("click", () => {
        input.value += numb.textContent
    })
})

const numlist= [];
equal.addEventListener("click", () => {
createOperator();
operate(numlist)
console.log(numlist)
resultDisplay.textContent = numlist
})

pluss.addEventListener ("click", ()=> {
    createOperator();
    numlist.push("+")})
minuss.addEventListener ("click", ()=> {
    createOperator();
    numlist.push("-")})
multiplyy.addEventListener ("click", ()=> {
    createOperator(); 
    numlist.push("*")})
dividee.addEventListener ("click", ()=> {
    createOperator();
    numlist.push("/")})



function createOperator() {
    if (input.value === "") {

    }
    else {
numlist.push(input.value)};
input.value = null;
console.log(numlist)

}

function operate (arr) {
    for (let i=0; i<arr.length; i++){
        if (arr[i]==="*") {
            let num1 =parseFloat(arr[i-1]);
            let num2 =parseFloat(arr[i+1]);
            let result = multiply(num1,num2);
            arr.splice(i-1, 3, result)
        }
    }
    for (let a=0; a<arr.length; a++){
        if (arr[a]==="/") {
            let num1 =parseFloat(arr[a-1]);
            let num2 =parseFloat(arr[a+1]);
            if (num2 === 0) { 
                let result = "undefined";
                arr.splice(a-1, 3, result)
            }else {
            let result = divide(num1,num2)
            arr.splice(a-1, 3, result)};
            
        }
    }
    for (let b=0; b<arr.length; b++){
        if (arr[b]==="+") {
            let num1 =parseFloat(arr[b-1]);
            let num2 =parseFloat(arr[b+1]);
            let result = add(num1,num2);
            arr.splice(b-1, 3, result)
        }
    }
    for (let c=0; c<arr.length; c++){
        if (arr[c]==="-") {
            let num1 =parseFloat(arr[c-1]);
            let num2 =parseFloat(arr[c+1]);
            let result = subtract(num1,num2);
            arr.splice(c-1, 3, result)
        }
    }
}

