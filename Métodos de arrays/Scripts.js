//Ejemplo con shift
let juegosEjemploShift = ["Resident Evil" , "God of war", "God of war 2", "GTA San Andreas"]; /*Arreglo originalmente de 4 elementos*/
juegosEjemploShift.shift(); /*Mediante el método se  elimina el primer elemento del arreglo, y se muestra el resultado final por consola*/
console.log(juegosEjemploShift);

//Ejemplo con unshift
let juegosEjemploUnshift = ["Resident Evil" , "God of war", "God of war 2", "GTA San Andreas"]; /*Arreglo originalmente de 4 elementos*/
juegosEjemploUnshift.unshift("Dragon ball Xenoverse", "Detroit become human"); /*Mediante el método se agrega uno o más elementos al inicio del array, cambiando el array original, por lo tanto el tamaño del mismo*/
console.log(juegosEjemploUnshift);

//Ejemplo con splice

let juegosEjemploConSplice = ["Resident Evil", "God of War", "GTA San Andreas"]; /*Un arreglo definido */

juegosEjemploConSplice.splice(2, 1); /*Permite eliminar el juego en la posición 2, en este caso GTA */

juegosEjemploConSplice.splice(1,0,"The last of us"); /*Permite agregar un juego a la posición 1, moviendo los otros elementos */

console.log(juegosEjemploConSplice);

//Ejemplo con Sort
let ciudadesEjemploSort = ["Cali", "Madrid", "Paris", "New york", "Ciudad de méxico"]; /*Se define un arreglo*/
ciudadesEjemploSort.sort(); /*El método cambia el orden del arreglo original, ordenando todos los elementos de forma alfabética*/
console.log(ciudadesEjemploSort);

//Ejemplo con Slice

let juegosEjemploSlice = ["Resident Evil", "God of War", "God of war 2", "GTA San Andreas", "The last of us"]; /*Un arreglo definido */

let seleccionDeLosGOW = juegosEjemploSlice.slice(1,3); /*Indica la posición del primer elemento a extraer, termina en la posición 3, pero no la incluye, incluye la anterior posición*/
console.log(seleccionDeLosGOW); /*Nuevo arreglo con la selección */
console.log(juegosEjemploSlice); /*Arreglo original sin modificaciones */

//Ejercicio con Reduce

let juegosEjemploReduce = [
    { nombre: "Resident Evil", descargas: 500 },
    { nombre: "God of war", descargas: 800 },
    { nombre: "GTA San Andreas", descargas: 1200 }
]; /*Se define un arreglo con con varios elementos */

let totalDescargas = juegosEjemploReduce.reduce((total, juego) => total + juego.descargas, 0); /*El método se encargara de sumar todas las descargas de los juegos dentro del arreglo, mediante un acumulador que empieza en 0 y va sumando las descargas en cada iteración */

console.log("Entre los 3 juegos se han descargado un total de: ", totalDescargas, "descargas"); 

//Ejercicio con push y length

let juegosEjemploConPushYlength = ["Resident Evil" , "God of war", "God of war 2"]; /*Arreglo originalmente de 3 elementos*/
juegosEjemploConPushYlength.push("GTA San Andreas"); /*Mediante el método se agrega el 4 elemento y se muestra por consola*/
console.log(juegosEjemploConPushYlength);
console.log(juegosEjemploConPushYlength.length) /*Mediante el método se permite conocer la cantidad de elementos que hay en el array seleccionado */

//Ejercicio con pop

let juegosEjemploConPop = ["Resident Evil" , "God of war", "God of war 2", "GTA San Andreas"]; /*Arreglo originalmente de 4 elementos*/
juegosEjemploConPop.pop(); /*Mediante el método se  elimina el último elemento del arreglo, y se muestra el resultado final por consola*/
console.log(juegosEjemploConPop);

//Ejercicio con map

let juegosEjemploConMap = [
    { nombre: "Resident Evil", año: 1996 },
    { nombre: "God of war", año: 2005 },
    { nombre: "God of war 2", año: 2007 },
    { nombre: "GTA San Andreas", año: 2004 },
    { nombre: "Detroit become human", año: 2020 },
    { nombre: "Mundo Gaturro", año: 2022 }
]; /*Arreglo definido con varios objetos*/

let juegosModificados = juegosEjemploConMap.map(juego => ({
    ...juego, 
    categoria: juego.año < 2010 ? "Clásico" : "Moderno" /*Mediante el método se copia el objeto original, se establece una condición para clasificar, en este caso los juegos del array basandose en el año, genera otro array con las respectivas modificaciones*/
}));

console.log(juegosModificados);

//Ejercicio con lastindexof

let juegosEjemploConLasIndexOf = ["Resident Evil" , "God of war", "God of war 2", "GTA San Andreas", "Resident Evil", "God of war"]; /*Se define un arreglo*/

let ultimaPosicionResidentEvil = juegosEjemploConLasIndexOf.lastIndexOf("Resident Evil"); /*Busca en el arreglo la última posición del elemento, en este caso 4 */
console.log(ultimaPosicionResidentEvil);

let ultimaPosicionGodOfWar = juegosEjemploConLasIndexOf.lastIndexOf("God of war"); /*Busca en el arreglo la última posicion del elemento, en este caso 5 */
console.log(ultimaPosicionGodOfWar);

let ultimaPosicionGTAViceCity = juegosEjemploConLasIndexOf.lastIndexOf("GTA Vice city"); /*Busca el elemento en el array, al no estar debe retornar -1 */
console.log(ultimaPosicionGTAViceCity);

//Ejemplo con Join

let juegosEjemploJoin = ["Resident Evil", "God of War", "GTA San Andreas","The last of us"]; /*Un arreglo definido */

let resultado = juegosEjemploJoin.join(",") /*El método permite separar los elementos del arreglo teniendo en cuenta la "," como delimitador */
 
console.log(resultado);

//Ejemplo con indexof

let juegosEjemploConIndexOf = ["Resident Evil" , "God of war", "God of war 2", "GTA San Andreas"]; /*Arreglo definido, con varios elementos*/

let posicionResidentEvil = juegosEjemploConIndexOf.indexOf("Resident Evil"); /*Devuelve la posición de este elemento del array, en este caso sería 0 */
console.log(posicionResidentEvil);

let posicionGodOfWar = juegosEjemploConIndexOf.indexOf("God of war"); /*Devuelve la posición de este elemento del array, en este caso 1 */
console.log(posicionGodOfWar);

let posicionGTAViceCity = juegosEjemploConIndexOf.indexOf("Gta Vice City"); /*Busca este elemento en el array, al no existir dentro del arreglo, retorna -1 */
console.log(posicionGTAViceCity);

//Ejemplo con foreach

let ciudadesEjemploConForEach = ["Cali", "Medellín", "Bogotá", "New york", "Londres", "Ginebra"]; /*Arreglo con distintas ciudades*/

ciudadesEjemploConForEach.forEach((ciudad, indice)=>{
    console.log(`Índice: ${indice}, ciudad: ${ciudad}`) /*Recorre cada elemento del arreglo, y retorna una salida con el indice y nombre de cada uno de los elementos*/
    
});

//Ejemplo con find y findIndex

let ciudadesEjemploConFindYFindIndex = ["Cali", "Medellín", "Bogotá", "New york", "Londres", "Ginebra"]; /*Arreglo con distintas ciudades*/

let primeraCiudadConE = ciudadesEjemploConFindYFindIndex.find(ciudad => ciudad.includes("e")); /*Uso del método, busca en todo el arreglo las ciudades que contegan la letra "e", y retorna la primera que cumpla con la condición*/
console.log(primeraCiudadConE);

let indiceDePrimeraCiudadConE = ciudadesEjemploConFindYFindIndex.findIndex(ciudad => ciudad.includes("e")); /*recorre el array, y devuelve el índice del primer elemento que cumpla con la condición, en este caso 1*/
console.log(indiceDePrimeraCiudadConE)

let primeraCiudadConZ = ciudadesEjemploConFindYFindIndex.find(ciudad=> ciudad.includes("z")); /*Uso del método, busca en todo el arreglo las ciudades que contegan la letra "z", en este caso retorna undefined, ya que ningún elemento posee esa letra*/

console.log(primeraCiudadConZ)

let indiceDePrimeraCiudadConZ = ciudadesEjemploConFindYFindIndex.findIndex(ciudad => ciudad.includes("z")); /*recorre el array, y devuelve el índice del primer elemento que cumpla con la condición, en este caso, como ningún elemento posee la letra, retorna -1*/
console.log(indiceDePrimeraCiudadConZ)

//Ejercicio con filter e includes

let ciudadesEjemploFilerEIncludes = ["Cali", "Medellín", "Bogotá", "New york", "Londres", "Ginebra"]; /*Arreglo con distintas ciudades*/

let ciudadesConE = ciudadesEjemploFilerEIncludes.filter(ciudad => ciudad.includes("e")); /*Uso del método, se pide que busque en el arreglo inicial todas aquellas ciudades que incluyan la letra e (meidante el includes) y las retorne en un nuevo arreglo*/ 
console.log(ciudadesConE);

//Ejercicio con concat y reverse

let ciudades1 = ["Cali", "Medellín", "New York"]; /*Se define un arreglo con ciertos elementos*/ 
let ciudades2= ["Madrid", "Ciudad de Mexico", "Paris"]; /*Se define un segudo arreglo*/

let ciudades3 = ciudades1.concat(ciudades2); /*Mediante el método se permite la creación de otro arreglo, usando los elementos de ambos arreglos */
console.log("Antes de aplicar el reverse: ",ciudades3);

ciudades3.reverse(); /*Se indica que arreglo va a cambiar, permitiendo que el orden ahora sea diferente, poniendo todos los elementos de atrás para adelante */
console.log("Después de aplicar el reverse: ",ciudades3);