(function(){//funciones
    function buildQuiz(){
        const output = [];
    
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {
                const answers = [];
                for (letter in currentQuestion.answers){
                    answers.push(
                        `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
                </label>`
                    );
                }
                output.push(
                    `<div class="slide">
                      <div class="question"> ${currentQuestion.question} </div>
                      <div class="answers"> ${answers.join("")} </div>
                    </div>`
                  );
            }
        );
        quizContainer.innerHTML = output.join ('');
    };
    
    function showResults(){
        const answerContainers = quizContainer.querySelectorAll('.answers');
        let numCorrect = 0;
    
        myQuestions.forEach( (currentQuestion, questionNumber)=>{
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}) .value;
            
            if (userAnswer===currentQuestion.correctAnswer){
                numCorrect++;
                answerContainers[questionNumber].style.color = 'lightgreen';
            }
                else {
                    answerContainers[questionNumber].style.color='red';
                }
        });
    
        resultsContainer.innerHTML=`${numCorrect} out of ${myQuestions.length}`;
    };
    
    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if(currentSlide===0){
            previousButton.style.display='none';
        }
        else{
            previousButton.style.display='inline-block'
        }
        if(currentSlide===slides.length-1){
            nextButton.style.display='none';
            submitButton.style.display='inline-block';
        }
        else{
            nextButton.style.display='inline-block';
            submitButton.style.display='none';
        }
    };
    
    function showNextSlide(){
        showSlide(currentSlide + 1);
    }
    
    function showPreviousSlide(){
        showSlide(currentSlide-1);
    }
    
    // Variables
    
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions =[
        {
            question: "Can I park here?",
            answers: {
                a:"Sorry, I did that.",
                b:"It's the same place.",
                c:"Only for half an hour",
            },
            correctAnswer: "c"
        },
        {
            question: "What colour will you paint the children's bedroom?",
            answers: {
                a:"I hope it was right",
                b:"We can't decide",
                c:"It wasn't very difficult",
            },
            correctAnswer: "b",
        },
        {
            question:"I can't understand this email",
            answers: {
                a:"Would you like some help?",
                b:"Don't you know?",
                c:"I suppose you can",
            },
            correctAnswer: "a",
        },
        {
            question:"I'd like two tickets for tomorrow night.",
            answers: {
                a:"How much did you pay?",
                b:"Afternoon and evening",
                c:"I'll check for you.",
            },
            correctAnswer: "c",
        },
        {
            question:"Shall we go to the gym now?",
            answers:{
                a:"I'm too tired",
                b:"It's very good",
                c:"Not at all",
            },
            correctAnswer: "a"
        }
    ];
    // display quiz right away
    buildQuiz();
    
    //paginacion
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    
    // mostrar primera pregunta
    showSlide(currentSlide);
    // Event listener
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
    
    }) ();
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

