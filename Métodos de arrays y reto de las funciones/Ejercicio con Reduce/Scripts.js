let juegos = [
    { nombre: "Resident Evil", descargas: 500 },
    { nombre: "God of war", descargas: 800 },
    { nombre: "GTA San Andreas", descargas: 1200 }
]; /*Se define un arreglo con con varios elementos */

let totalDescargas = juegos.reduce((total, juego) => total + juego.descargas, 0); /*El método se encargara de sumar todas las descargas de los juegos dentro del arreglo, mediante un acumulador que empieza en 0 y va sumando las descargas en cada iteración */

console.log("Entre los 3 juegos se han descargado un total de: ", totalDescargas, "descargas"); 

