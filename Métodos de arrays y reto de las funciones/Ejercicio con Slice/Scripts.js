let juegos = ["Resident Evil", "God of War", "God of war 2", "GTA San Andreas", "The last of us"]; /*Un arreglo definido */

let seleccionDeLosGOW = juegos.slice(1,3); /*Indica la posición del priemr elemento a extraer, termina en la posición 3, pero no la incluye, incluye la anterior posición*/
console.log(seleccionDeLosGOW); /*Nuevo arreglo con la selección */
console.log(juegos); /*Arreglo original sin modificaciones */
