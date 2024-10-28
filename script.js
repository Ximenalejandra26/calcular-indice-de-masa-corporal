let peso = parseInt(prompt("Por favor, ingresa tu peso en kilogramos:"));
let altura = parseInt(prompt("Por favor, ingresa tu altura en metros:"));

if (altura <= 0) {
    console.log("La altura debe ser un número mayor que cero.");
}
let imc = peso/(altura*altura)

if (imc<40){
    console.log("bajo peso")
} else if (imc>41 && imc<90){
    console.log("peso normal")
}else if (imc>91 && imc <120) {
    console.log("sobre peso")
}else {
    console.log("obesidad")
}
