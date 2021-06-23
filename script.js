$(window).on('load', function() {
    console.log("Estamos listos para arrancar");
});
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

const cursos =[{id:1, nivel:"elemental", tema:"tecnologia", horas:10, precio:8500, cantidad:1},
{id:2, nivel:"principiante", tema:"ingles general", horas:36, precio:12000, cantidad:1},
{id:3, nivel:"avanzado", tema:"clinica de pronunciacion", horas:10, precio:8500, cantidad:1},
{id:4, nivel:"intermedio", tema:"entrevista de trabajo", horas:4, precio:5000, cantidad:1},
];

//AGREGO AL DOM

let listaDeCarrito = [];

for (const curso of cursos){
    $(".cursosActivos").append(`<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Curso ${curso.tema}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Nivel ${curso.nivel}</h6>
      <p class="card-text">Este curso tiene una duracion de ${curso.horas} horas y vale $${curso.precio}</p>
      <button id="agregar${curso.id}">Agregar al carrito</button>
      <button id="ver${curso.id}">Ver carrito </button>
    </div>
  </div>`)
}

// $(`#agregar${curso.id}`).on('click', () => {
//     listaDeCarrito.push(cursos[curso.id-1]);
// });

// $(`#ver${curso.id}`).on('click', () => {
//     let total = 0;
//     for (elemento of listaDeCarrito) {
//         console.log("ID: " + elemento.id + " Producto: " + elemento.producto);
//         total += elemento.precio;
//     }
//     console.log("Son " + listaDeCarrito.length + " cursos\n  Total de la compra: $" + total);
// });

let visibilidad = true;
$("#mostrarOcultar").on('click', () => {
    visibilidad ? $(".cursosActivos").css({ display: "none" }) : $(".cursosActivos").css({ display: "inline-block" });
    visibilidad = !visibilidad;
});



