/*
Entonces hoy, para facilitar tu visita al supermercado, debes crear un programa en Javascript que pregunte si deseas agregar un alimento a tu lista de compras,
y debes poder responder con "sí" o "no".
A continuación, preguntará qué alimento deseas agregar, y escribirás su nombre, como por ejemplo "zanahoria".

Después, deberá preguntar en qué categoría se encaja ese alimento, con algunas opciones ya predefinidas, como frutas, lácteos, congelados, dulces y lo que más creas interesante.
Así podrás separar todo en su respectivo grupo. 

Por último, en caso de que ya no quieras agregar nada más a la lista de compras y respondas "no" a la primera pregunta,
se mostrará una lista con todos los ítems agrupados, de la siguiente manera:
    Si añades a tu lista: banana, leche en polvo, tomate, leche vegetal, chicle, gominola, manzana, uva, aguacate y leche de vaca.
    El programa debería imprimir, por ejemplo: 
        Lista de compras:
            Frutas: banana, tomate, manzana, uva, aguacate
            Lácteos: leche vegetal, leche de vaca, leche en polvo
            Congelados: 
            Dulces: chicle y gominola

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

function crearListaDeCompras() {
    let listaDeCompras = {
        frutas: [],
        lacteos: [],
        congelados: [],
        dulces: [],
        otros: []
    };

    let agregarMas = "sí";

    while (agregarMas.toLowerCase() === "sí") {
        agregarMas = prompt("¿Deseas agregar un alimento a tu lista de compras? (sí/no)").toLowerCase();

        if (agregarMas === "sí") {
            agregarAlimento(listaDeCompras);
        }
    }

    mostrarListaDeCompras(listaDeCompras);
}

crearListaDeCompras();