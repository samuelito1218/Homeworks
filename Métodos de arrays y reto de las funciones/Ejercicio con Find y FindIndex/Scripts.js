let ciudades = ["Cali", "Medellín", "Bogotá", "New york", "Londres", "Ginebra"]; /*Arreglo con distintas ciudades*/

let primeraCiudadConE = ciudades.find(ciudad => ciudad.includes("e")); /*Uso del método, busca en todo el arreglo las ciudades que contegan la letra "e", y retorna la primera que cumpla con la condición*/
console.log(primeraCiudadConE);

let indiceDePrimeraCiudadConE = ciudades.findIndex(ciudad => ciudad.includes("e")); /*recorre el array, y devuelve el índice del primer elemento que cumpla con la condición, en este caso 1*/
console.log(indiceDePrimeraCiudadConE)

let primeraCiudadConZ = ciudades.find(ciudad=> ciudad.includes("z")); /*Uso del método, busca en todo el arreglo las ciudades que contegan la letra "z", en este caso retorna undefined, ya que ningún elemento posee esa letra*/

console.log(primeraCiudadConZ)

let indiceDePrimeraCiudadConZ = ciudades.findIndex(ciudad => ciudad.includes("z")); /*recorre el array, y devuelve el índice del primer elemento que cumpla con la condición, en este caso, como ningún elemento posee la letra, retorna -1*/
console.log(indiceDePrimeraCiudadConZ)