//test de nivel
var start=document.getElementById("placement_test")
function startTest (){
start.style.display=("block")
}

/*function hidePrevious (){
    start.style.display=("none")
}
var question02=document.getElementById("question02")
function showNext (){
question02.style.display=("block")
}*/

// Pasar input a mayuscula

function pasarUpper() {
    let input01 = document.getElementById("answer01");
    input01.value = input01.value.toUpperCase();
  }

//funciones para asignar puntaje a las respuestas correctas

var score=0;

function responderA (rta) 
{if (rta== "A" || rta=="a"){
     score = score + 10;
    }
    else {
     score = score + 0;
    };
return score;
}


function responderB (rta) 
{if (rta== "B" || rta=="b"){
    score = score + 10;
    }
    else {
    score = score + 0;
    };
return score;
}

function responderC (rta) {if (rta== "C" || rta=="c"){
    score = score + 10;
    }
    else {
    score = score + 0;
    };
return score;
    }

// tomar datos de las respuestas

let rta01=document.getElementById=("answer01").value 
responderC(rta01);
console.log(score);

let rta02=document.getElementById=("answer02").value 
responderB(rta02);
console.log(score);

let rta03=document.getElementById=("answer03").value 
responderA(rta03);
console.log(score);

let rta04=document.getElementById=("answer04").value 
responderC(rta04);
console.log(score);

let rta05=document.getElementById=("answer05").value 
responderA(rta05);
console.log(score);


//Cursos disponibles


class Cursos {

    constructor(id,horas,nivel,tema,precio,cantidad){

        this.id=id;

        this.horas=horas;

        this.nivel=nivel;

        this.tema=tema;

        this.precio=precio;

        this.cantidad=cantidad;

    }

}



const curso1= new Cursos(1,10,"elemental","profesional tecnologia",8500,1);
const curso2= new Cursos(2, 36, "principiante", "ingles general", 12000, 1);
const curso3= new Cursos(3, 10, "avanzado", "clinica de pronunciacion", 8500, 1);
const curso4= new Cursos(4, 4, "intermedio", "entrevista de trabajo", 5000, 1);

const listaDeCarrito = [];

function agregarAListaCarrito1() {
    listaDeCarrito.push(curso1);
}
function agregarAListaCarrito2() {
    listaDeCarrito.push(curso2);

}function agregarAListaCarrito3() {
    listaDeCarrito.push(curso3);

}function agregarAListaCarrito4() {
    listaDeCarrito.push(curso4);
}

function verListaCarrito() {
    let total = 0;
    for (elemento of listaDeCarrito) {
        console.log("ID: " + elemento.id + " Producto: " + elemento.producto);
        total += elemento.precio;
    }
    console.log("Son " + listaDeCarrito.length + " cursos\n  Total de la compra: $" + total);
}
