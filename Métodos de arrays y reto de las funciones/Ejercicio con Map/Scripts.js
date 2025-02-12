let juegos = [
    { nombre: "Resident Evil", año: 1996 },
    { nombre: "God of war", año: 2005 },
    { nombre: "God of war 2", año: 2007 },
    { nombre: "GTA San Andreas", año: 2004 },
    { nombre: "Detroit become human", año: 2020 },
    { nombre: "Mundo Gaturro", año: 2022 }
]; /*Arreglo definido con varios objetos*/

let juegosModificados = juegos.map(juego => ({
    ...juego, 
    categoria: juego.año < 2010 ? "Clásico" : "Moderno" /*Mediante el método se copia el objeto original, se establece una condición para clasificar, en este caso los juegos del array basandose en el año, genera otro array con las respectivas modificaciones*/
}));

console.log(juegosModificados);
