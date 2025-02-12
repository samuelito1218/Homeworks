let ciudades = ["Cali", "Medellín", "Bogotá", "New york", "Londres", "Ginebra"]; /*Arreglo con distintas ciudades*/

let ciudadesConE = ciudades.filter(ciudad => ciudad.includes("e")); /*Uso del método, se pide que busque en el arreglo inicial todas aquellas ciudades que incluyan la letra e (meidante el includes) y las retorne en un nuevo arreglo*/ 
console.log(ciudadesConE);