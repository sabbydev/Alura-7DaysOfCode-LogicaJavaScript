/*
Por eso, hoy te voy a enseñar a desarrollar un programa simulando una de esas aplicaciones. Debe pedir al usuario responder 3 preguntas:
- ¿Cuál es tu nombre?
- ¿Cuántos años tienes?
- ¿Qué lenguaje de programación estás estudiando?
A medida que se hagan las preguntas, la persona que esté usando el programa debe responder cada una de ellas. Al final, el sistema mostrará el mensaje:

"Hola [nombre], tienes [edad] años y ya estás aprendiendo [lenguaje]!"

EJERCICIO OPCIONAL
Si deseas profundizar en el tema de hoy, tengo otro ejercicio para ti. Pero es 100% opcional.
Vas a complementar el código para que, después de mostrar el mensaje anterior, el programa pregunte:

¿Te gusta estudiar [lenguaje]? Responde con el número 1 para SÍ o 2 para NO.

Y luego, dependiendo de la respuesta, debería mostrar uno de los siguientes mensajes:
1 > ¡Muy bien! Sigue estudiando y tendrás mucho éxito.
2 > Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?
*/

const nombre = prompt("¿Cuál es tu nombre?");

let edad = prompt("¿Cuántos años tienes?");
edad = parseInt(edad);
while (isNaN(edad) || edad <= 0) {
    edad = parseInt(prompt("Por favor, ingresa una edad válida."));
}

const lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

alert(`¡Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);

let mensaje = `¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`;
let respuesta;

do {
    respuesta = prompt(mensaje);
    switch (respuesta) {
        case '1':
            alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
            break;
        case '2':
            alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
            break;
        default:
            mensaje = `Respuesta no válida. Por favor, SOLO responde con el número 1 para SÍ o 2 para NO.`;
    }
} while (respuesta !== '1' && respuesta !== '2')
