let juegos = ["Resident Evil" , "God of war", "God of war 2", "GTA San Andreas", "Resident Evil", "God of war"]; /*Se define un arreglo*/

let ultimaPosicionResidentEvil = juegos.lastIndexOf("Resident Evil"); /*Busca en el arreglo la última posición del elemento, en este caso 4 */
console.log(ultimaPosicionResidentEvil);

let ultimaPosicionGodOfWar = juegos.lastIndexOf("God of war"); /*Busca en el arreglo la última posicion del elemento, en este caso 5 */
console.log(ultimaPosicionGodOfWar);

let ultimaPosicionGTAViceCity = juegos.lastIndexOf("GTA Vice city"); /*Busca el elemento en el array, al no estar debe retornar -1 */
console.log(ultimaPosicionGTAViceCity);

