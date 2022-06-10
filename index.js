

//Display Name and personal information.

document.getElementById('name').innerHTML= "Maria Estrella";

//Function that identify two numbers from user
//and call the function sum to add two numbers.

function theTwoNumbers(){
    var x, y;
    x = document.getElementById('num1').value;  
    y = document.getElementById('num2').value;
    console.log("Funcion Two Numbers: ", parseFloat(x) + parseFloat(y));
    sumTwoNumbers(parseFloat(x), parseFloat(y));
    return x, y;    
}

// function that sum two numbers
function sumTwoNumbers(numero1, numero2){
    var suma = numero1 + numero2;
    document.getElementById("sum").innerHTML = suma;
        
}