// posizione paletti porte
var x = 0;
var y = 300;
var velocita = 40;

// gradi curva e direzione sciatore
var deg = 0;
var dir = 0;
var sterzata = 6;

pistaX = 0;
pistaY = 0;

kd = false;

window.addEventListener("keydown", keypress_handler, false);
window.addEventListener("keyup", keyup_handler, false);

function partenza() {
    var deg = 0;
    var dir = 0;
    pistaX = 0;
    pistaY = 0;
    kd = false;
    document.getElementById("pista").style.top = pistaY+"px";
    document.getElementById("pista").style.left = pistaX+"px";
	
    try {clearInterval(start);}
	catch{}
    var start = setInterval(function () {
      drawPista();
    }, 200);
}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

var arrayDiv = new Array();
    for(var i=0; i <= 20; i++){
        arrayDiv[i] = document.createElement('div');
        //arrayDiv[i].id = 'block' + i;
        arrayDiv[i].className = 'gigante';
        arrayDiv[i].style.top = y*(i+1)+"px";
        if (x < 50) {
            x=randomIntFromInterval(51, 80);
        }
        else {
            x=randomIntFromInterval(20, 50);
        }            
        arrayDiv[i].style.left = x+"vw";
        document.getElementById("pista").appendChild(arrayDiv[i]);
    }

function keypress_handler(event) {
  if (event.keyCode == 37 || event.keyCode == 39) { 
    if (!this.kd) {
	this.kd = true;
        if (event.keyCode == 37) {
          dir = -sterzata;
        }
        if (event.keyCode == 39) {
          dir = sterzata;
        }
        sterza = setInterval(function() {
	       	muoviElementoT(dir);
	}, 60);
    }
  }	
}

function keyup_handler(event) {
  if (event.keyCode == 37 || event.keyCode == 39) {
        this.kd = false;
	    try {clearInterval(sterza);}
		catch{}
  }
}

function drawPista() {
    pistaY=pistaY-Math.round((velocita-deg));
    document.getElementById("pista").style.top = pistaY+"px";
    pistaX=pistaX-deg;
    document.getElementById("pista").style.left = pistaX+"px";
}

function muoviElementoT(direction) {
    if (Math.abs(deg+direction) <= Math.abs(direction)*5) {
      deg+=direction;
      document.getElementById("sciatore").style.transform = "translate(-50%, -50%) skew("+deg+"deg)";
    }
}

function muoviElemento(direction) {
    direction=direction*sterzata;
    muoviElementoT(direction);
    try {clearInterval(myTimer);}
		catch(err){}
    myTimer = setInterval(function() {
        if (Math.abs(deg+direction) <= Math.abs(direction)*5) {
           deg+=direction;
           document.getElementById("sciatore").style.transform = "translate(-50%, -50%) skew("+deg+"deg)";
	}
    }, 60);
}

function resetInt() {
    try {clearInterval(myTimer);}
		catch(err){}
}
