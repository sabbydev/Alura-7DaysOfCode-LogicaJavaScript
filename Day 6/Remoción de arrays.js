/*
Deberás crear la opción de eliminar algún elemento de la lista, que se mostrará junto con la pregunta: “¿deseas añadir un alimento a la lista de compras?”.
A partir de ahí, si la persona elige esa opción, el programa imprimirá los elementos presentes en la lista actual, y la persona deberá escribir cuál de ellos desea eliminar.

Después de eso, el programa eliminará el elemento de la lista e imprimirá la confirmación de que el elemento realmente ya no está allí.

Finalmente, el programa volverá al ciclo inicial de preguntas.
Si, al intentar eliminar el elemento, este no se encuentra en la lista, deberás mostrar un mensaje advirtiendo de ello.
Por ejemplo: “¡No fue posible encontrar el elemento en la lista!”.
Recuerda que la opción de eliminar un elemento solo deberá estar disponible a partir del momento en que exista al menos un elemento en la lista de compras.

CONSEJO 

Puedes buscar el elemento que la persona desea eliminar de la forma que prefieras, utilizando métodos de Javascript para ello.
Existe el método .includes(elemento), que devuelve true o false si el array en cuestión contiene dicho elemento o no.
Existe también el método .indexOf(elemento), que devuelve la posición de ese elemento dentro del array, o `-1` si no lo encuentra.
 

Para la eliminación en sí, existen diferentes métodos. El método shift, por ejemplo, elimina siempre el primer elemento de la lista; el método pop elimina el último; mientras que el método splice elimina un cierto número de elementos a partir de una determinada posición. Elige el que consideres que tiene más sentido para tu pequeño programa.
*/

function mostrarListaDeCompras(lista) {
    console.log("Lista de compras:");
    for (let categoria in lista) {
        if (lista[categoria].length > 0) {
            console.log(`${categoria}: ${lista[categoria].join(", ")}`);
        }
    }
}

function agregarAlimento(lista) {
    let alimento = prompt("¿Qué alimento deseas agregar?");
    let categoria = prompt("¿En qué categoría se encaja este alimento? (Frutas, Lácteos, Congelados, Dulces)").toLowerCase();

    switch (categoria) {
        case "frutas":
            lista.frutas.push(alimento);
            break;
        case "lácteos":
        case "lacteos":
            lista.lacteos.push(alimento);
            break;
        case "congelados":
            lista.congelados.push(alimento);
            break;
        case "dulces":
            lista.dulces.push(alimento);
            break;
        default:
            alert("Categoría no válida, se agregará a 'Otros'.");
            lista.otros.push(alimento);
            break;
    }
}

function eliminarAlimento(lista) {
    let elementosDisponibles = [];
    for (let categoria in lista) {
        elementosDisponibles = elementosDisponibles.concat(lista[categoria]);
    }

    if (elementosDisponibles.length === 0) {
        alert("La lista está vacía, no hay elementos para eliminar.");
        return;
    }

    let alimentoAEliminar = prompt(`Lista actual: ${elementosDisponibles.join(", ")}\n\n¿Qué alimento deseas eliminar?`);

    for (let categoria in lista) {
        let index = lista[categoria].indexOf(alimentoAEliminar);
        if (index !== -1) {
            lista[categoria].splice(index, 1);
            alert(`${alimentoAEliminar} ha sido eliminado de la lista.`);
            return;
        }
    }

    alert("¡No fue posible encontrar el elemento en la lista!");
}

function crearListaDeCompras() {
    let listaDeCompras = {
        frutas: [],
        lacteos: [],
        congelados: [],
        dulces: [],
        otros: []
    };

    let continuar = true;

    while (continuar) {
        let accion = prompt("¿Deseas añadir un alimento a la lista de compras o eliminar un alimento existente? (añadir/eliminar/no)").toLowerCase();

        if (accion === "añadir") {
            agregarAlimento(listaDeCompras);
        } else if (accion === "eliminar") {
            eliminarAlimento(listaDeCompras);
        } else if (accion === "no") {
            continuar = false;
        } else {
            alert("Opción no válida.");
        }
    }

    mostrarListaDeCompras(listaDeCompras);
}

crearListaDeCompras();
