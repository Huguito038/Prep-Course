// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
let individual=[]
let matriz=[]
matrizo=Object.keys(objeto)
numeros=Object.values(objeto)

for (i=0;i<numeros.length;i++){
    individual.push(matrizo[i],numeros[i])
    matriz.push(individual)
    individual=[]
}
return matriz
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
let caja={}
  for(i=0;i<string.length;i++){
    if (caja[string[i]]>0){
        caja[string[i]]=caja[string[i]]+1
    }else{
        caja[string[i]]=1  
    }
  }
  return caja
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
let mayus=""
let minus=""
var cadena=""
 for (i in s){
    if (s[i]===s[i].toUpperCase()){
    mayus=mayus+s[i]
 }else{
    minus=minus+s[i]
 }
}
cadena= mayus+minus
return cadena
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let frase=str.split(" ")
  var nueva=""
  var p=" "
  var indi=""
    for (i=0;i<frase.length;i++){
      for (y in frase[i]){
      p=frase[i].charAt(y)
      indi= p + indi
      }
      nueva=nueva+" "+indi
      indi=""
    }
  return nueva.trimStart()
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  const revertido= numero. toString(). split(""). reverse(). join("");
  if (numero==revertido){
    return "Es capicua"
  }else{return "No es capicua"}
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
var nueva= cadena.replace(/(a)/gm,"")
nueva= nueva.replace(/(b)/gm,"")
nueva= nueva.replace(/(c)/gm,"")
return nueva
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
arr.sort((a,b)=>{
  a= a.length
  b= b.length
  if(a==b){
      return 0
  }
  if (a<b){
      return -1
  }
  return 1
  })
  return arr
}




function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
let vnueva=[]
var anterior=0
for (i=0;i<arreglo1.length;i++){
  for (y=0;y<arreglo2.length;y++){
      if (arreglo1[i]==arreglo2[y] && (arreglo1[i]!=anterior || arreglo2[y]!=anterior)){
          vnueva.push(arreglo1[i])
          anterior=arreglo1[i]
      }
    }
  }
  return vnueva
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

