let juegos = ["Resident Evil", "God of War", "GTA San Andreas"]; /*Un arreglo definido */

juegos.splice(2, 1); /*Permite eliminar el juego en la posición 2, en este caso GTA */

juegos.splice(1,0,"The last of us"); /*Permite agregar un juego a la posición 1, moviendo los otros eleementos */

console.log(juegos);

