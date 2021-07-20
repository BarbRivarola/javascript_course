//componentes
const IndexComponent ={
    render:()=>{
        return `
        <main>
        <div class="prop prop__est">
            <span class="prop__box">Conocé tu nivel de inglés</span>
            <a><button type="button" id="startTest" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">¡Empecemos!</button></a>
        </div>

        <!--MODAL test-->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog .modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Test de nivel</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">

            <section class="container test-container">
                <span>Click the correct answer: a, b or c.</span>

            <div class="quiz-container">
                <div id="quiz" class="quiz"></div>
            </div>
                <button type="button" class="btn btn-primary" id="previous">Previous Question</button>
                <button type="button" class="btn btn-primary" id="next">Next Question</button>
                <button type="button" class="btn btn-primary" id="submit">Submit Quiz</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                <div id="results"></div>
            </section>
        </div>
            <div class="modal-footer">
            </div>
        </div>
        </div>
        </div>
        </main>`
    },
    postRender:()=>{ 
        (function(){
            //funciones
            function buildQuiz(){
                const output = [];
            
                myQuestions.forEach(
                    (currentQuestion, questionNumber) => {
                        const answers = [];
                        for (letter in currentQuestion.answers){
                            answers.push(
                                `<label style="display:flex">
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
            
                //resultsContainer.innerHTML=`${numCorrect} out of ${myQuestions.length}`, 
                
                if(numCorrect==myQuestions.length){
                    resultsContainer.innerHTML=`Congratulations! Your English level is Advanced`;
                }
                else if (numCorrect<=myQuestions.length-8){
                    resultsContainer.innerHTML=`Your English level is Beginner.`
                }
                else if(numCorrect<=myQuestions.length-6){
                    resultsContainer.innerHTML=`Good job! Your English level is Elementary.`
                }
                else if(numCorrect<=myQuestions.length-4){
                    resultsContainer.innerHTML=`Good job! Your English level is Intermediate.`
                }
                else if(numCorrect<=myQuestions.length-1){
                    resultsContainer.innerHTML=`Congratulations! Your English level is Upper-intermediate`;
                };
        
                
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
            };
        
            
            
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
                },
                {
                    question:"Hey, there! Long time no see!",
                    answers:{
                        a:"I'm sorry.",
                        b:"Hi! How have you been?",
                        c:"Yes, I see you.",
                    },
                    correctAnswer: "b"
                },
                {
                    question:"Could you please close the window?",
                    answers:{
                        a:"Of course.",
                        b:"Let me open it for you.",
                        c:"Yes, I could.",
                    },
                    correctAnswer: "a"
                },
                {
                    question:"What time is the class tomorrow?",
                    answers:{
                        a:"The classes are very good.",
                        b:"I arrived late.",
                        c:"It's supposed to start at 8 but the teacher is always late.",
                    },
                    correctAnswer: "c"
                },
                {
                    question:"I brought you a gift.",
                    answers:{
                        a:"Thanks, come again.",
                        b:"Oh, you should't have. Thank you!.",
                        c:"I got it from my mom.",
                    },
                    correctAnswer: "b"
                },
                {
                    question:"Javascript is too difficult.",
                    answers:{
                        a:"You just need to practise more.",
                        b:"It's impossible.",
                        c:"Could agree more.",
                    },
                    correctAnswer: "a"
                }
            ];
            // mostrar quiz de forma inmediata
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
            //submitButton.addEventListener('click', showCourses);
            previousButton.addEventListener("click", showPreviousSlide);
            nextButton.addEventListener("click", showNextSlide);
            
            }) ();
        
        
        
    }
}

const cursosComponent = {
    render:() =>{
        return `
    <main>

        <!--banner-->

    <div class="prop prop__est">
        <span class="prop__box">Encontrá tu próxima experiencia de aprendizaje</span>
        <a><button type="button" id="nostra" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver cursos</button></a>
    </div>

        <!--cursos desde Js-->

<section class="tipos__cursos container-fluid row">

</section>

        <!-- carrito-->

    <div id="carrito">

    </div>

        <!--consultas-->

<section class="consultas">

        <h3>Contacto</h3>

        <span>
            Envia tu consulta sobre los cursos
        </span>

    <form class= "contacto" id="form">

        <div class="form-group">
            <label for="exampleFormControlInput1">Nombre y apellido</label>
            <input type="text" class="form-control" id="name" placeholder="Ingrese su nombre">
        </div>

        <div class="form-group">
            <label for="exampleFormControlInput1">Correo electrónico</label>
            <input type="email" class="form-control" id="email" placeholder="nombre@ejemplo.com">
        </div>

        <div class="form-group">
            <label for="exampleFormControlTextarea1">Mensaje</label>
            <textarea class="form-control" id="mensajeDeConsulta" rows="3" placeholder="Escriba su consulta"></textarea>
        </div>

        <div class="button">
            <input type="submit" value="Enviar" class="input__button"> 
            <input type="reset" value="Borrar" class="input__button">
        </div>

        <div id="error">

        </div>
    </form>
</section>
</main>`
    },

    postRender:()=>{
        //Cursos disponibles

const cursos =[{id:1, nivel:"elemental", tema:"tecnologia", horas:10, precio:8500, cantidad:1},
{id:2, nivel:"principiante", tema:"ingles general", horas:36, precio:12000, cantidad:1},
{id:3, nivel:"avanzado", tema:"clinica de pronunciacion", horas:4, precio:5000, cantidad:1},
{id:4, nivel:"intermedio", tema:"entrevista de trabajo", horas:4, precio:5000, cantidad:1},
{id:5, nivel:"principiante", tema:"ingles de negocios", horas: 10, precio: 8500, cantidad:1},
{id:6, nivel:"elemental", tema:"ingles general", horas:36, precio:12000, cantidad:1},
{id:7, nivel:"avanzado", tema:"ingles general", horas:36, precio:12000, cantidad:1},
{id:8, nivel:"intermedio", tema:"ingles general", horas:36, precio:12000, cantidad:1},
{id:9, nivel:"intermedio", tema:"ingles para medicina", horas:10, precio:8500, cantidad:1},
{id:10, nivel:"elemental", tema:"clinica de pronunciacion", horas:4, precio:5000, cantidad:1},
{id:11, nivel:"avanzado", tema:"tecnologia y finanzas", horas:10, precio:8500, cantidad:1},
{id:12, nivel:"principiante", tema:"introduccion a la comunicacion en ingles", horas:4, precio:5000, cantidad:1}
];

//AGREGO AL DOM

const listaDeCarrito = [];

for (const curso of cursos){
    $(".tipos__cursos").append(`<div class= "curso container-fluid col-sm-10 col-md-5 col-lg-2" >
      <h4 class="card-title">Curso ${curso.tema}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Nivel ${curso.nivel}</h6>
      <p class="card-text">Este curso tiene una duracion de ${curso.horas} horas y vale $${curso.precio}</p>
      <button id="agregar${curso.id}">Agregar al carrito</button>
  </div>`)
}

// CARRITO
const agregar1 = document.getElementById('agregar1')
agregar1.addEventListener('click', ()=>{
    console.log("Curso 1 agregado")
});
const agregar2 = document.getElementById('agregar2')
agregar2.addEventListener('click', ()=>{
    console.log("Curso 2 agregado")
});const agregar3 = document.getElementById('agregar3')
agregar3.addEventListener('click', ()=>{
    console.log("Curso 3 agregado")
});const agregar4 = document.getElementById('agregar4')
agregar4.addEventListener('click', ()=>{
    console.log("Curso 4 agregado")
});

//MOSTRAR CARRITO EN EL DOM

// FORMULARIO DE CONSULTA

//validacion de formulario
const nombre = document.getElementById('name')
const email = document.getElementById('email')
const mjeConsulta = document.getElementById('mensajeDeConsulta')
const form = document.getElementById('form')
const errores = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages =[]
    if(nombre.value===""||nombre.value==null){
        messages.push('Por favor ingrese un nombre.')
    }
    if(email.value===""||email.value==null){
        messages.push('Por favor ingrese un email.')
    }
    if(mjeConsulta.value===""||mjeConsulta.value==null){
        messages.push('Por favor ingrese su consulta.')
    }
    if(messages.length > 0) { 
        e.preventDefault()
        errores.innerText = messages.join(', ')
    }
})

    }
}


const ruletaComponent = {
    render:()=>{
        return `
        <h2 id="">Gamificar con una ruleta</h2>
    <section class="box__container">
    <div id="mainbox" class="mainbox">
        <div id="box" class="box">
            <div class="box1">
                <span class="span span1"><b>1</b></span>
                <span class="span span2"><b>2</b></span>
                <span class="span span3"><b>3</b></span>
                <span class="span span4"><b>4</b></span>
            </div>
            <div class="box2">
                <span class="span span1"><b>5</b></span>
                <span class="span span2"><b>6</b></span>
                <span class="span span3"><b>7</b></span>
                <span class="span span4"><b>8</b></span>
            </div>
        </div>
        <button class="spin" id="spin">SPIN</button>
    </div>`
    },
    postRender:()=>{
        
        function girarRuleta() {
            var x = 1024;
            var y = 9999;
            var deg = Math.floor(Math.random() * (x - y)) + y; 
            document.getElementById('box').style.transform = "rotate("+deg+"deg)";
        
            var element = document.getElementById('mainbox');
            element.classList.remove('animate');
            setTimeout(function(){
                element.classList.add('animate');
                var valueList = [];
               var getValue = valueList[Math.floor(Math.random() * valueList.length)];
        }, 5000);
        }
        let botonRuleta = document.getElementById('spin')
        botonRuleta.addEventListener('click', girarRuleta )
    }
}

const dadoComponent = {
    render:()=>{
        return `
        <h3>Click on the dice to roll it!</h3>
    <section class="container-dado">
        
        <div id="cube">
          <div class="front">
            <span class="dot dot1"></span>
          </div>
          <div class="back">
            <span class="dot dot1"></span>
            <span class="dot dot2"></span>
          </div>
          <div class="right">
            <span class="dot dot1"></span>
            <span class="dot dot2"></span>  
            <span class="dot dot3"></span>
          </div>
          <div class="left">
            <span class="dot dot1"></span>
            <span class="dot dot2"></span>  
            <span class="dot dot3"></span>
            <span class="dot dot4"></span>
          </div>
          <div class="top">
            <span class="dot dot1"></span>
            <span class="dot dot2"></span>  
            <span class="dot dot3"></span>
            <span class="dot dot4"></span>
            <span class="dot dot5"></span>
          </div>
          <div class="bottom">
            <span class="dot dot1"></span>
            <span class="dot dot2"></span>  
            <span class="dot dot3"></span>
            <span class="dot dot4"></span>
            <span class="dot dot5"></span>
            <span class="dot dot6"></span>
          </div>
        </div>
      </section>`
    },
    postRender:()=>{
        var cube = document.getElementById('cube');

var min = 1;
var max = 24;

cube.onclick = function() {
  var xRand = getRandom(max, min);
  var yRand = getRandom(max, min);
    
  
  cube.style.transform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
}

function getRandom(max, min) {
  return (Math.floor(Math.random() * (max-min)) + min) * 90;
};

    }
}

const contactoComponent = {
    render:()=>{
        return `
        <section class="consultas">

        <h3>Contacto</h3>

        <span>
            Tenes alguna duda? Queres contarme algo? Conversemos!
        </span>

    <form class= "contacto" id="form">

        <div class="form-group">
            <label for="exampleFormControlInput1">Nombre y apellido</label>
            <input type="text" class="form-control" id="name" placeholder="Ingrese su nombre">
        </div>

        <div class="form-group">
            <label for="exampleFormControlInput1">Correo electrónico</label>
            <input type="email" class="form-control" id="email" placeholder="nombre@ejemplo.com">
        </div>

        <div class="form-group">
            <label for="exampleFormControlTextarea1">Mensaje</label>
            <textarea class="form-control" id="mensajeDeConsulta" rows="3" placeholder="Escriba su consulta"></textarea>
        </div>

        <div class="button">
            <input type="submit" value="Enviar" class="input__button"> 
            <input type="reset" value="Borrar" class="input__button">
        </div>

        <div id="error">

        </div>
    </form>
</section>
<div class="btn-whatsapp">
    <a href="https://api.whatsapp.com/send?phone=541124621173" target="_blank">
        <img src="http://s2.accesoperu.com/logos/btn_whatsapp.png" alt="logo de whatsapp">
    </a>
</div>
</main>`
    },
    postRender:()=>{
        const nombre = document.getElementById('name')
const email = document.getElementById('email')
const mjeConsulta = document.getElementById('mensajeDeConsulta')
const form = document.getElementById('form')
const errores = document.getElementById('error')
        form.addEventListener('submit', (e) => {
            let messages =[]
            if(nombre.value===""||nombre.value==null){
                messages.push('Por favor ingrese un nombre.')
            }
            if(email.value===""||email.value==null){
                messages.push('Por favor ingrese un email.')
            }
            if(mjeConsulta.value===""||mjeConsulta.value==null){
                messages.push('Por favor ingrese su consulta.')
            }
            if(messages.length > 0) { 
                e.preventDefault()
                errores.innerText = messages.join(', ')
            }
        })
    }
}
const iniciarSesionComponent ={
    render:()=>{
        return `
        <main>
            <h2 class="" > Iniciar sesion </h2>
        <div class="container">
            <form id=formSesion class=" row" >
            <div class= "col-md-6">
                <div class="form-group estiloInput">
                    <label for="username">Email</label>
                    <input type="email" placeholder="ejemplo@gmail.com" id="emailSesion" />
                    <small></small>
                </div>
                <div class="form-group estiloInput">
                    <label for="username">Contraseña</label>
                    <input type="password" placeholder="Contraseña" id="passwordSesion"/>
                    <small></small>
                </div>
                <button class="form-button" id= "botonSesion">Iniciar Sesion</button>
            </div>
		</form> 
        <p>No estas registrado? <a class="linkSesion" href="index.html#/registrarcuenta">Registrate</a></p>
	</main>
        `
    },
    postRender:()=>{
        let usuariosRegistrados;

        let registro = localStorage.getItem("registro-personas")
        if (!registro) {
            usuariosRegistrados = []
        } else {
            usuariosRegistrados = JSON.parse(localStorage.getItem("registro-personas"));
        }

        let formSesion = document.getElementById("formSesion")
        let emailSesion = document.getElementById("emailSesion")
        let pwdSesion = document.getElementById("passwordSesion")

        formSesion.addEventListener("keyup", e => {
            e.preventDefault();
            iniciarSesion()
        })


        function iniciarSesion() {
            let usuarioMail = document.getElementById("emailSesion").value
            let contraseniaSesion = document.getElementById("passwordSesion").value;
            let usuarioSesion = usuariosRegistrados.filter((el) => el.email == usuarioMail)[0];

            let usuarioMailCheck = false;
            let contraseniaSesionCheck = false;

            if (usuarioMail === "") {
                usuarioMailCheck = mostrarError(emailSesion, "Ingresa tu email")
                console.log(usuarioMail)
            } else if (!usuarioSesion) {
                console.log(usuarioSesion)
                usuarioMailCheck = mostrarError(emailSesion, "Usuario no registrado")

            } else {
                usuarioMailCheck = valorVerificado(emailSesion)
            }

            if (contraseniaSesion === "") {
                contraseniaSesionCheck = mostrarError(pwdSesion, "Ingresa tu contraseña")
            } else if (contraseniaSesion != usuarioSesion.contrasenia) {
                contraseniaSesionCheck = mostrarError(pwdSesion, "La contraseña es incorrecta")
            }
            else {
                contraseniaSesionCheck = valorVerificado(pwdSesion)

            }

            if (usuarioMailCheck && contraseniaSesionCheck) {
                return true;
            }
        }

        function iniciarSesionOk(e) {
            e.preventDefault();
            let inicioOk = iniciarSesion()
            if (inicioOk) {
                window.location.href = "index.html#/cursos"
            }
        }

        function mostrarError(input, mensaje) {
            let formInput = input.parentElement
            let mensajeError = formInput.querySelector("small")

            mensajeError.innerText = mensaje

            formInput.className = "form-group estiloInput error"
            return false;

        }

        function valorVerificado(input) {
            let formInput = input.parentElement
            formInput.className = "form-group estiloInput success"
            return true;

        }


        let botonSesion = document.getElementById("botonSesion")

        botonSesion.addEventListener("click", iniciarSesionOk);
    }
}

const registrarCuentaComponent = {
    render: () => {
        return `
        <main>
        <h2 class="" > Nuevo usuario </h2>
        <div class="estiloSesion container"
		<form id="formVal" class="form row mostrarForm">
            <div class="col-md-6">
                <div class="form-group estiloInput ">
                    <label for="username">Nombre y apellido</label>
                    <input type="text" placeholder="Juan Perez" id="username" />
                    <small></small>
                </div>
                <div class="form-group estiloInput">
                    <label for="username">Email</label>
                    <input type="email" placeholder="ejemplo@gmail.com" id="email" />
                    <small></small>
                </div>
                <div class="form-group estiloInput">
                    <label for="username">Contraseña</label>
                    <input type="password" placeholder="Contraseña" id="password"/>
                    <small></small>
                </div>
                <div class="form-group estiloInput">
                    <label for="username">Repeti la Contraseña</label>
                    <input type="password" placeholder="Repeti la Contraseña" id="passwordcheck"/>
                    <small></small>
                </div>
                <button class="form-button botonSesion" id="boton">Crear cuenta</button>
            </div>
		</form>
        
		<p>Ya estas registrado? <a class="linkSesion" href="index.html#/iniciosesion">Inicia sesión</a> </p>
        
        <div id = "gracias"class="oculatarGracias ">
        <p>Gracias por registrarte</p>
         
        </div>
		
	</main>
        `
    },
    postRender:()=>{

            let usuariosRegistrados;
    
            let registro = localStorage.getItem("registro-personas")
            if (!registro) {
                usuariosRegistrados = []
            } else {
                usuariosRegistrados = [];
                usuariosGuardados = JSON.parse(localStorage.getItem("registro-personas"));
                usuariosGuardados.forEach((el) => {
                    let usuario = new Usuario();
                    usuario.CrearDesde(el)
                    usuariosRegistrados.push(usuario)
                });
            }
    
            let form = document.getElementById("formVal")
            let username = document.getElementById("username");
            let email = document.getElementById("email");
            let password = document.getElementById("password");
            let passwordcheck = document.getElementById("passwordcheck");
    
    
    
            form.addEventListener("submit", e => {
                e.preventDefault();
                validarDatos()
            })
    
    
            function validarDatos() {
    
                let usernameValue = username.value.trim()
                let emailValue = email.value.trim()
                let passwordValue = password.value.trim()
                let passwordcheckValue = passwordcheck.value.trim()
    
    
                let usernameCheck = false;
                let emailCheck = false;
                let passwordCheck = false;
                let password2Check = false;
    
                if (usernameValue === "") {
                    mostrarError(username, "No podes dejar el campo en blanco")
                } else {
                    usernameCheck = valorVerificado(username)
                }
    
                if (emailValue === "") {
                    mostrarError(email, "No podes dejar el campo en blanco")
                } else if (!validarEmail(emailValue)) {
                    mostrarError(email, "Debes colorar un email valido")
                } else if (usuariosRegistrados.find((el) => el.email == emailValue)) {
                    mostrarError(email, "Ya estas registrado")
                } else {
                    emailCheck = valorVerificado(email)
                }
    
                if (passwordValue === "") {
                    mostrarError(password, "No podes dejar el campo en blanco")
                } else {
                    passwordCheck = valorVerificado(password)
                }
    
                if (passwordcheckValue === "") {
                    mostrarError(passwordcheck, "No podes dejar el campo en blanco")
                } else if (passwordValue !== passwordcheckValue) {
                    mostrarError(passwordcheck, "Las contraseñas deben coincidir")
                } else {
                    password2Check = valorVerificado(passwordcheck)
                }
    
                if (usernameCheck && emailCheck && passwordCheck && password2Check) {
                    return true;
                } else {
                    return false;
                }
    
            }
    
    
    
            function mostrarError(input, mensaje) {
                let formInput = input.parentElement
                let mensajeError = formInput.querySelector("small")
    
                mensajeError.innerText = mensaje
    
                formInput.className = "form-group estiloInput error"
                return false;
    
            }
    
            function valorVerificado(input) {
                let formInput = input.parentElement
                formInput.className = "form-group estiloInput success"
                return true;
    
            }
    
            function validarEmail(email) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
            }
    
            function mostrarGracias() {
                let datosOk = validarDatos()
                console.log(datosOk)
                if (datosOk) {
                    let usernameValue = username.value.trim()
                    let emailValue = email.value.trim()
                    let passwordValue = password.value.trim()
    
                    let usuario = new Usuario();
                    usuario.CrearUsuario(usernameValue, emailValue, passwordValue)
                    usuariosRegistrados.push(usuario);
                    localStorage.setItem("registro-personas", JSON.stringify(usuariosRegistrados))
    
                    let gracias = document.getElementById("gracias");
                    gracias.classList.add("mostrarGracias");
                    
    
                    setTimeout(function(){ window.location.href = "index.html#/productos"; }, 1000);
                   
                }
            }
    
            let botonEnviar = document.getElementById("boton")
            botonEnviar.addEventListener("click", mostrarGracias);
    }
}
// RUTAS
const routes = [
    { path: '/', component: IndexComponent },
    { path: '/cursos', component: cursosComponent },
    { path: '/ruleta', component: ruletaComponent },
    { path: '/dado', component: dadoComponent },
    { path: '/iniciosesion', component: iniciarSesionComponent },
    { path: '/registrarcuenta', component: registrarCuentaComponent },
    { path: '/contacto', component: contactoComponent },

]


// ROUTER
const parseLocation = () => location.hash.slice(1).toLowerCase() || '/'
const findComponentByPath = (path) => routes.find(el => el.path.match(path)) || undefined;

const router = () => {
    const route = findComponentByPath(parseLocation())

    if (route == undefined) {
        document.getElementById('main').innerHTML = ErrorComponent.render()
    } else {
        document.getElementById('main').innerHTML = route.component.render()
        route.component.postRender()
    }
}

window.addEventListener('load', router)
window.addEventListener('hashchange', router)