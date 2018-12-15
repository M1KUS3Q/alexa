window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let alexa = new SpeechRecognition();

window.addEventListener('click', function() {
    document.body.innerHTML = 'start nasluchiwania'
    console.log("dzialam")
    return alexa.start();
});

alexa.addEventListener('result', function(event){
    console.dir(event);
});
alexa.addEventListener('end', function(event){
    document.body.innerHTML = 'koniec nasluchiwania'
})