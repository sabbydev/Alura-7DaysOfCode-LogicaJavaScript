/*
Para el ejercicio de hoy: ¿te has detenido a pensar cómo funciona una calculadora?
Te pide que ingreses un número, luego seleccionas un tipo de operación, otro número, y ella sola realiza el cálculo para mostrarte el resultado. ¡Increíble, verdad?
En este último desafío, mi propuesta para ti es: crea tu propia calculadora, pero con un detalle muy importante: cada operación debe ser una función diferente en tu código.

Primero, la persona debe elegir una opción de operación impresa por el programa en la pantalla.

Luego, debe ingresar los dos valores que desea utilizar, y el programa imprimirá el resultado de la operación en cuestión.

Las opciones disponibles deben ser: suma, resta, multiplicación, división, y salir. En esta última, el programa debe detenerse y mostrar un mensaje "Hasta la próxima".

CONSEJO 
Cada operación debe tener una función diferente en tu código, que recibirá los valores ingresados como parámetros y devolverá el resultado de la operación.
No olvides usar estructuras de repetición para que la calculadora imprima la elección de operación hasta que la persona desee detener el programa.
Recuerda también que, además de if y else, también tenemos switch, que es muy interesante de utilizar en casos como este, de múltiples opciones.
*/

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "No se puede dividir por cero.";
    } else {
        return a / b;
    }
}

function calculadora() {
    let continuar = true;

    while (continuar) {
        let operacion = prompt("Elige una operación: suma, resta, multiplicación, división, salir").toLowerCase();

        if (operacion === "salir") {
            alert("Hasta la próxima");
            continuar = false;
            break;
        }

        let num1 = parseFloat(prompt("Ingresa el primer número:"));
        let num2 = parseFloat(prompt("Ingresa el segundo número:"));
        let resultado;

        switch (operacion) {
            case "suma":
                resultado = sumar(num1, num2);
                break;
            case "resta":
                resultado = restar(num1, num2);
                break;
            case "multiplicación":
            case "multiplicacion":
                resultado = multiplicar(num1, num2);
                break;
            case "división":
            case "division":
                resultado = dividir(num1, num2);
                break;
            default:
                alert("Operación no válida.");
                continue;
        }

        alert(`El resultado de la ${operacion} es: ${resultado}`);
    }
}

calculadora();