const validacion = () => { // Array function
    const pedirN = prompt("Ingrese un numero entre 1 y 20.");
    if (pedirN < 1 || pedirN > 20) {
        alert(`El número ${pedirN} esta fuera del rango.\nPor favor ingresar un nuevo numero entre 1 y 20.`);
        return validacion();
    } else {
        return pedirN;
    }

}
const num = parseInt(validacion());
for (let i = 1; i <= num; i++) { // ciclo anidado
    let res = 1;
    for (let j = 1; j <= i; j++) {
        res = res * j;
    }
    console.log(`Factorial de ${i} es: ${res}`);
}

for (let i = 1; i <= num; i++) {
    console.log(i + " x " + num + " = " + num * i);
}