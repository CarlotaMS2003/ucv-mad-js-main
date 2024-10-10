/*****************************************/
/* Ignoramos esta parte por el momento */
/*****************************************/
let intervalId = window.setInterval(function () {
    //console.log("Clock isn't working yet!");
}, 10000);

function stopClock() { 
    clearInterval(intervalId);
}
/*****************************************/

window.onload = function () { 
    console.log("Hello, world!");
    const miReloj =document.getElementById('clock');
     console.log(miReloj);
     console.dir(miReloj);

     miReloj.innerText = "Hola!hola!"

     const headers = document.getElementsByTagName('div');
     console.dir(headers[0]);

     function randlnt(min,max) {
        return Math.floor(Math.random()*(max -min + 1)) +min;
     }

     function changeEmojiColor(elem) {
        const r = Math.floor(Math.random() * 256); // Genera un valor aleatorio entre 0 y 255
        const g = Math.floor(Math.random() * 256); // Genera un valor aleatorio entre 0 y 255
        const b = Math.floor(Math.random() * 256); // Genera un valor aleatorio entre 0 y 255
    
        elem.style.fill = 'rgb(' + r + ',' + g + ',' + b + ')'; // Asigna el color aleatorio al elemento
    }
    

}
