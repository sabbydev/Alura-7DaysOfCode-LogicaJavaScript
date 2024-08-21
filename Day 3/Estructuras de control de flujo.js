/*
Tu desafío de hoy es crear los destinos posibles de un juego, en el que el usuario pueda elegir:

Si quiere seguir hacia el área de Front-End o seguir hacia el área de Back-End.
Si está en el área de Front-End, si quiere aprender React o aprender Vue. Si está en el área de Back-End, podrá aprender C# o aprender Java.

Después, independientemente de las elecciones anteriores, el usuario podrá elegir entre seguir especializándose en el área elegida o desarrollarse para convertirse en Fullstack.
Debes mostrar en pantalla un mensaje específico para cada elección.
Finalmente, pregunta en qué tecnologías le gustaría a la persona especializarse o conocer. Aquí, la persona puede responder N tecnologías, una a la vez.
Entonces, mientras continúe respondiendo **ok** a la pregunta:
"¿Hay alguna otra tecnología que te gustaría aprender?", sigue presentando el Prompt, para que complete el nombre de la tecnología en cuestión.
Y, justo después, presenta un mensaje comentando algo sobre la tecnología ingresada.
Lo importante es que la persona que esté jugando siempre pueda elegir qué decisión tomar para aprender y desarrollarse en el área de programación.
Además, también es esencial que, al final del juego, pueda ingresar tantas tecnologías como desee en la lista de aprendizaje.
*/

function mostrarMensaje(mensaje) {
    alert(mensaje);
}

function preguntarArea() {
    let area;
    do {
        area = prompt("¿Quieres seguir hacia el área de 'Front-End' o seguir hacia el área de 'Back-End'?").toLowerCase();
        if (area === "front-end") {
            preguntarTecnologiaFrontEnd();
        } else if (area === "back-end") {
            preguntarTecnologiaBackEnd();
        } else {
            mostrarMensaje("Opción no válida. Por favor, elige entre 'Front-End' o 'Back-End'.");
        }
    } while (area !== "front-end" && area !== "back-end");
}

function preguntarTecnologiaFrontEnd() {
    let tecnologia;
    do {
        tecnologia = prompt("¿Quieres aprender 'React' o aprender 'Vue'?").toLowerCase();
        if (tecnologia === "react") {
            mostrarMensaje("¡Genial! Vas a aprender React.");
        } else if (tecnologia === "vue") {
            mostrarMensaje("¡Genial! Vas a aprender Vue.");
        } else {
            mostrarMensaje("Opción no válida para Front-End. Por favor, elige entre 'React' o 'Vue'.");
        }
    } while (tecnologia !== "react" && tecnologia !== "vue");
}

function preguntarTecnologiaBackEnd() {
    let tecnologia;
    do {
        tecnologia = prompt("¿Quieres aprender 'C#' o aprender 'Java'?").toLowerCase();
        if (tecnologia === "c#") {
            mostrarMensaje("¡Genial! Vas a aprender C#.");
        } else if (tecnologia === "java") {
            mostrarMensaje("¡Genial! Vas a aprender Java.");
        } else {
            mostrarMensaje("Opción no válida para 'Back-End'. Por favor, elige entre 'C#' o 'Java'.");
        }
    } while (tecnologia !== "c#" && tecnologia !== "java");
}

function preguntarEspecializacion() {
    let especializacion;
    do {
        especializacion = prompt("¿Quieres seguir especializándote en el área elegida o desarrollarte para convertirte en 'Fullstack'?").toLowerCase();
        if (especializacion === "especializándote") {
            mostrarMensaje("¡Perfecto! Te seguirás especializando en el área que elegiste.");
        } else if (especializacion === "fullstack") {
            mostrarMensaje("¡Excelente! Te convertirás en un desarrollador 'Fullstack'.");
        } else {
            mostrarMensaje("Opción no válida. Por favor, elige entre 'especializándote' o 'fullstack'.");
        }
    } while (especializacion !== "especializándote" && especializacion !== "fullstack");
}

function preguntarTecnologiasAdicionales() {
    let tecnologias = [];
    let otraTecnologia = "ok";

    while (otraTecnologia === "ok") {
        let tecnologiaAdicional = prompt("¿Qué tecnología te gustaría aprender?");
        tecnologias.push(tecnologiaAdicional);
        otraTecnologia = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Responde 'ok' para agregar más o cualquier otra cosa para finalizar.").toLowerCase();
    }

    mostrarMensaje("Las tecnologías que has ingresado son:");
    console.log(tecnologias);

    for (let i = 0; i < tecnologias.length; i++) {
        mostrarMensaje("¡Genial! Estás interesado en aprender sobre " + tecnologias[i] + ".");
    }
}

preguntarArea();
preguntarEspecializacion();
preguntarTecnologiasAdicionales();