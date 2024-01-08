var nombre="howard";
console.log(nombre);
var apellido="anti";
console.log(apellido);
var sueldo=125;
console.log(sueldo);
var casado=false;
console.log(casado);
var presupuesto=123;
console.log(presupuesto);
let gasto=50;
console.log(gasto);
const IVA=13;
console.log(IVA);
const tipoCambio=6.98;
console.log(tipoCambio);
var uni="umsa";
console.log(uni);
if(100%2===0){
	console.log('100 es par')
}
else{
	console.log('100 no es par')
}

for(let i=0;i<5;i++){
	console.log(i);
}

let contador=10;

while(contador>=0){
	console.log(contador);
	contador--;

}

let suma=5+9
let resta=8-9
let multi=6*5
let divi=8/9
let modulo=9%5

let mayorQue=8>4
let mayorIgualQue=8>=2
let igualQue=5<25
let diferenteQue=52!=8 

let and=true&&true
let or=false||true
let not=!false

const persona={
	nombre: "pedro",
	edad: 25,
	ocupacion: "dasarrollador"

}

const colores=["rojo","verde","azul"];

console.log(persona.edad);
console.log(persona);
var h="Mi nombre es"+persona.nombre

persona["apellido"]="Peres";
console.log(persona);

persona.ocupacion="Programador";
console.log(ocupacion);

persona["ci"]=16516

console.log(colores);
console.log(colores.length);
console.log()

for(let i=0;i<colores.length;i++){
	console.log("Elemento: "+colres[i]+", indice: "+i);
}

colores.push("amarillo")
console.log(colores);

colores.reverse();
console.log(colores);
colores.push("DSADSA");
colores.sort();
colores.push(453);
colores.push(true);
colores.sort();
console.log(colores);
colores.push([5,5,5]);
var elem=colores.pop();
console.log(elemento);
console.log(colores);
colores.find('sapito');

colores.push([2,4,6]);
colores,sort();



console.log(colores)


function saludar(nombre){
    return "Hola, "+nombre+"!";
}

function suma(a,b){
    let s=a+b;
    return "La suma de "+a+" y "+b+" es "+s;
}


