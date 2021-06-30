 function myfunction() {
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
       //alert(getValue); 
}, 5000);
}



$(document).ready(function() {
    //Declaramos la url del API
    const APIURL = 'https://jsonplaceholder.typicode.com/posts';

    const infoPost = {titulo: ($("#titulo")), body: ($("#campos")) }
    $("#verCampos").prepend('<button id="enviarDatos">ENVIAR</button>');
    $("#enviarDatos").click(() => {
        $.ajax({
            method: "POST",
            url: APIURL,
            data: infoPost,
            success: function(respuesta) {
                $("#verCampos").prepend(`<div>${respuesta.titulo}</div>`);
                console.log(respuesta);
            }
        });
    });
});