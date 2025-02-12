let ciudades1 = ["Cali", "Medellin", "New York"]; /*Se define un arreglo con ciertos elementos*/ 
let ciudades2= ["Madrid", "Ciudad de Mexico", "Paris"]; /*Se define un segudo arreglo*/

let ciudades3 = ciudades1.concat(ciudades2); /*Mediante el método se permite la creación de otro arreglo, usando los elementos de ambos arreglos */
console.log("Antes de aplicar el reverse: ",ciudades3);

ciudades3.reverse(); /*Se indica que arreglo va a cambiar, permitiendo que el orden ahora sea diferente, poniendo todos los elementos de atrás para adelante */
console.log("Después de aplicar el reverse: ",ciudades3);