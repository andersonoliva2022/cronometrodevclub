var cent = "00"; //centésimo de segundo
var sec = "00"; //segundos
var min = "00"; //troca a cada 60 s
var hr = "00";

var interval = "";

//======BOTÕES=================================================
function start() {

    interval = setInterval(go, 10)
}

function stop() {
    clearInterval(interval);
}

function reset() {
    document.location.reload();
}

//=====LÓGICA====================================================
function go() {
    cent++
    if (cent === 100) {//segundos
        sec++;
        //============
        if (sec < 10) {
            sec = "0" + sec; //colocando o zero string à esquerda quando menor que 10
        }
        //==============
        cent = 0;
    }

    if (sec === 60) {//minutos
        min++;
        //============
        if (min < 10) {
            min = "0" + min; //colocando o zero string à esquerda quando menor que 10
        }
        //==============
        sec = 0;
    }

    if (min === 60) { // horas
        hr++;
        //============
        if (hr < 10) {
            hr = "0" + hr; //colocando o zero string à esquerda quando menor que 10
        }
        //==============
        min = 0;
    }
    //=========================================================

    //integração do javascript com o html
    document.getElementById("go").innerHTML = cent;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("min").innerHTML = min;
    document.getElementById("hr").innerHTML = hr;
}
















