/*
Debes crear un pequeño programa que comience con un valor específico predefinido entre 0 y 10 para el número que vas a adivinar (por ejemplo, el 7).
A continuación, el programa te preguntará cuál es el valor que deseas adivinar y, si aciertas, te felicitará. Si te equivocas, te dará 2 intentos más.
Al final, si no aciertas en ninguno de los intentos, imprimirá cuál era el número inicial.
Después de que el programa esté funcionando, intenta usar un número aleatorio en lugar de uno predefinido.

CONSEJO 
Piensa muy bien en qué estructura de repetición utilizarás para hacer que tu programa se ejecute hasta que se agoten las 3 oportunidades o hasta que la persona acierte el número.
Recuerda que siempre puedes personalizar tu programa como desees.

Para hacer que la propia máquina elija el número a adivinar, puedes utilizar algo llamado Math.random().
Para ello, utiliza el siguiente código:
Math.floor(Math.random() * (máximo - mínimo + 1) + mínimo)
Donde, por supuesto, tendrás que cambiar los valores de mínimo y máximo por los límites inferior y superior, respectivamente.
*/

function adivinarNumero() {
    const minimo = 0;
    const maximo = 10;
    const numeroSecreto = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    let intentos = 3;
    let acertado = false;

    while (intentos > 0 && !acertado) {
        let adivinanza = parseInt(prompt(`Tienes ${intentos} intentos. ¿Cuál es el número secreto entre ${minimo} y ${maximo}?`));
        
        if (adivinanza === numeroSecreto) {
            alert("¡Felicidades! Has adivinado el número.");
            acertado = true;
        } else {
            intentos--;
            if (intentos > 0) {
                alert(`Incorrecto. Te quedan ${intentos} intentos.`);
            }
        }
    }
    
    if (!acertado) {
        alert(`Lo siento, no has adivinado el número. El número secreto era ${numeroSecreto}.`);
    }
}

adivinarNumero();