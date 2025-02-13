function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log(`(Regular Function) ${num} es par`);
    } else {
        console.log(`(Regular Function) ${num} es impar`);
    }
}

const checkEvenOddArrow = (num) => {
    console.log(`(Arrow Function) ${num} es ${num % 2 === 0 ? 'par' : 'impar'}`);
};

// Pedir un número al usuario
const userInput = prompt("Ingrese un número para evaluar si es par o impar:");

// Convertir el input a número
const number = parseInt(userInput);

// Verificar si es un número válido antes de evaluarlo
if (!isNaN(number)) {
    checkEvenOdd(number);      // 🔹 Llamar a la función normal (Regular Function)
    checkEvenOddArrow(number); // 🔹 Llamar a la función flecha (Arrow Function)
} else {
    console.log("Por favor, ingrese un número válido.");
}




