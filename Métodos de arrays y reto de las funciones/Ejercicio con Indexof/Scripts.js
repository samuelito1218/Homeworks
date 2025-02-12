let juegos = ["Resident Evil" , "God of war", "God of war 2", "GTA San Andreas"]; /*Arreglo definido, con varios elementos*/

let posicionResidentEvil = juegos.indexOf("Resident Evil"); /*Devuelve la posición de este ekemento del array, en este caso sería 0 */
console.log(posicionResidentEvil);

let posicionGodOfWar = juegos.indexOf("God of war"); /*Devuelve la posición de este elemento del array, en este caso 1 */
console.log(posicionGodOfWar);

let posicionGTAViceCity = juegos.indexOf("Gta Vice City"); /*Busca este elemento en el array, al no existir dentro del arreglo, retorna -1 */
console.log(posicionGTAViceCity);