//Exercise 1

function userData(){
    let userName = prompt("UserName: ");
        if(userName === null || userName.trim() === ""){
            userName = "undefined"
        }
    let age = prompt ("Your age:");
        if(age === null || age.trim() === ""){
            age = "undefined"
        }

    let moviesInput = prompt("Enter yout favourite movies, please separated by commas ( , )");
        if(moviesInput === null || moviesInput.trim() === ""){
            moviesInput = "undefined";
        }
    const movies = moviesInput.split(`,`).map(movie => movie.trim());
// alt + 92 para diagional invertida (\)
// \n en las cadenas de texto, se usa para dividir el texto en varias líneas
    let result = `Hello\nThis is your user profile!\nUser name: ${userName}\nAge: ${age}\nYour favourite movies are:\n`;
    movies.forEach(movie => {
    result += `The film '${movie}' is one of your favourite.\n`;
    });

    console.log(result);
}

userData();

//Exercise 2
    // Función para solicitar 10 números y encontrar el mayor de dichos numeros. 
function encontrarMayor() {
    // Inicializamos un array para almacenar los números
    const numeros = [];
    
    // Solicitar 10 números al usuario. Se utiliza el bucle for para abrir el prompt 10 veces que son la cantidad de # que debe ingresar. 
    for (let i = 0; i < 10; i++) {
        let numero = prompt(`Ingrese el número ${i + 1}:`);
        
        // Cuando se utiliza como función, Number(value)convierte una cadena u otro valor al tipo Número. Si el valor no se puede convertir, devuelve NaN.
        numero = Number(numero);
        
        // Esta se pone para verificar si la entrada es un número válido.
        
            numeros.push(numero);
        } 
            // El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
        
    
    
    // Para encontrar el número mayor se utiliza Math.max()
    const mayor = Math.max(...numeros);
    
    console.log(`El mayor de los números ingresados es: ${mayor}`);
}

encontrarMayor();

//Exercise 3

let seconds =parseInt(prompt("Enter the number of seconds until the alarm runs:"), 10);
// Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada. comprueba el primer argumento, una cadena, e intenta devolver un entero de la base especificada. Por ejemplo, una base de 10 indica una conversión a número decimal, 8 octal, 16 hexadecimal, y así sucesivamente.
let message = prompt("Enter the message you want to display when the alarm sounds: ");
// isNaN intenta convertir el parámetro pasado a un número. Si el parámetro no se puede convertir, devuelve true; en caso contrario, devuelve false.
if (isNaN(seconds) || seconds <= 0){
    alert("Please, enter a valud number of seconds.");
    //The alert() method displays an alert box with a message and an OK button.
    //alert() method is used when you want information to come through to the user.
} else {
    function showMessage(){
        alert(message);
    }
    setTimeout(showMessage, seconds * 1000);
}


//Esercise 4
let input = prompt("Enter a word or sentence: ");
if (isAPalindrome(input)){
    alert("The input is a palindrome.");
} else {
    alert("The input is not a palindrome.");
}

function cleanText(text){
    return text
    .toLowerCase()
    .replace(/[^a-z0-9]/g,'');
}
//El toLowerCase()método convierte una cadena en letras minúsculas.El método no cambia la cadena original.
// [^a-zA-Z0-9] es una expresión regular que coincide con cualquier carácter que no sea una letra (a-zA-Z) o un número (0-9). La bandera g asegura que se reemplacen todas las ocurrencias de caracteres no deseados en la cadena.
function isAPalindrome(text){
    let textclean= cleanText(text);
    let inversetext = textclean.split('').reverse().join('');
    return textclean === inversetext;
}
//El reverse()método invierte el orden de los elementos de una matriz.Sobreescribe la matiz  original
//textoLimpio.split(''): Esta parte del código toma la cadena textoLimpio y la divide en un array de caracteres individuales. Por ejemplo, si textoLimpio es "hola", split('') devolverá ['h', 'o', 'l', 'a'].

/*.reverse(): Este método invierte el orden de los elementos en el array. Siguiendo con el ejemplo anterior, reverse() cambiará ['h', 'o', 'l', 'a'] a ['a', 'l', 'o', 'h'].

/*.join(''): Finalmente, este método une los elementos del array de vuelta en una cadena, sin ningún separador (es decir, usando una cadena vacía '' como separador). Entonces, join('') convertirá ['a', 'l', 'o', 'h'] de nuevo en "aloh".*/


//Exercise 5

const n = parseInt(prompt("Enter a positive and integer number:"));
const result = factorial(n);
console.log(`Factorial of ${n} is ${result}`);

function factorial(n) {
    if (n < 1) {
        console.log("The number must be greater than or equal to 1.");
        return;
    }
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

//Exercise 6

// Ejemplo: Matriz anidada
let multiDimension = [1, [2, 3, [4, 5, [6]]]];
// Se itera sobre cada elemento del array [1, [2, 3, [4, 5, [6]]]] y se llama a aplanar para cada uno.
function arrFlat(matriz) {
    let result = [];
    
    function flat(item) {
        if (Array.isArray(item)) {
            for (let i = 0; i < item.length; i++) {
                flat(item[i]); 
            }
/*Se usa recursividad para para cada nivel de la matriz anidada. Si encuentra un array, lo descompone y llama a sí mismo para procesar los elementos internos. Si encuentra un elemento que no es un array, lo agrega al array resultado*/
        } else {
            result.push(item); 
        }
    }
    
    flat(matriz);
    return result;
}



let matrizFlat = arrFlat(multiDimension);
console.log(matrizFlat);
