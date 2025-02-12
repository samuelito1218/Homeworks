let juegos = ["Resident Evil", "God of War", "God of War 2", "GTA San Andreas"]; /*Arreglo definido */

// Función normal:
function clasificarJuegos(juegosArray) {
    return juegosArray.map(function(juego) {
        return juego.includes("God of War") ? juego + " - Moderno" : juego + " - Clásico"; /*Recorre el arreglo, y ejecuta la función en cada elemento, la función evalua si el título incluye "God of War" para si poder clasificarlo como moderno, en caso contrario es "clásico"*/
    });
}

console.log(clasificarJuegos(juegos));
//Funcion con flecha:
const clasificarJuegosArrow = juegosArray => juegosArray.map(juego =>
    juego.includes("God of War") ? juego + " - Moderno" : juego + " - Clásico" /*Presenta una sintaxis más corta, es una función constante, no son necesarias las {} ni el return, ya que la función tiene solamente una expresión*/
);

console.log(clasificarJuegosArrow(juegos));



