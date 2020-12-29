// menu //
var menuknop = document.getElementById('menuknop');
menuknop.addEventListener('click', openDicht);

function openDicht() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('open');
}

// zoekbalk //
var zoekknop = document.getElementById('zoekknop');
zoekknop.addEventListener('click', openZoek);

var kruisklik = document.getElementById('kruisklik');
kruisklik.addEventListener('click', sluitZoek);

function openZoek() {
    var body = document.body;
    body.classList.add('open-zoekbalk');
}

function sluitZoek() {
    var body = document.body;
    body.classList.remove('open-zoekbalk');
}

// reacties //
var uitgeklapteReactiesknop = document.getElementById('uitgeklapte-reactiesknop');
uitgeklapteReactiesknop.addEventListener('click', reactiesUitklappen);

function reactiesUitklappen() {
    // zorgen dat link niet werkt (niet naar boven scrollt) //
    event.preventDefault();
    var body = document.body;
    body.classList.add('open-reacties');
}

// duimpjes //
var duimHoog = document.getElementById('duimHoog');
var duimLaag = document.getElementById('duimLaag');
var teller = document.getElementById('aantalDuimpjes');

duimHoog.addEventListener('click', duimOmhoogGeklikt);
duimLaag.addEventListener('click', duimOmlaagGeklikt);

function duimOmhoogGeklikt() {
    duimHoog.classList.toggle('geklikt');

    // zodat duimpje omlaag weer grijs wordt //
    duimLaag.classList.remove('geklikt');

    // kijken of het duimpje ingeklikt is of niet //
    if (duimHoog.classList.contains('geklikt')) {
        teller.innerHTML = '+115'
    } 
    else {
        teller.innerHTML = '+114'
    }
}

function duimOmlaagGeklikt() {
    duimLaag.classList.toggle('geklikt');

    // zodat duimpje omlaag weer grijs wordt //
    duimHoog.classList.remove('geklikt');

    // kijken of het duimpje ingeklikt is of niet //
    if (duimLaag.classList.contains('geklikt')) {
        teller.innerHTML = '+113'
    } 
    else {
        teller.innerHTML = '+114'
    }
}

// roze uitklaptekst //
var uitklapgeheel = document.getElementById('uitklapgeheel');
var uitklapknop = document.getElementById('uitklapknop');

uitklapknop.addEventListener('click', uitklapknopGeklikt);

function uitklapknopGeklikt() {
    uitklapgeheel.classList.toggle('uitgeklapt');
}