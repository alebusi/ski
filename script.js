// posizione paletti porte
var x = 0;
var y = 400;
var velocita = 90;

// gradi curva e direzione sciatore
var deg = 0;
var dir = 0;
var sterzata = 6;
var max_sterzata = 42;

// griglia pista
pistaX = 0;
pistaY = 0;

kd = false;
var startGameId;
var myTimer;

window.addEventListener("keydown", keypress_handler, false);
window.addEventListener("keyup", keyup_handler, false);
//$(document).on('touchmove', false);

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

// Disegna pista
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

function partenza() {
    clearInterval(startGameId);
    //catch(err){alert("Errore : "+err);}
    deg = 0;
    dir = 0;
    pistaX = 0;
    pistaY = 0;
    kd = false;
    document.getElementById("pista").style.top = pistaY+"px";
    document.getElementById("pista").style.left = pistaX+"px";
    document.getElementById("neve").style.top = pistaY+"px";
    document.getElementById("neve").style.left = pistaX+"px";
	
    startGameId = setInterval(function () {
      drawPista();
    }, 60);	
}

function drawPista() {
      //pistaY=pistaY-Math.round((velocita-Math.abs(deg))/10);
      spostamento=(velocita/10)-(Math.abs(deg)/9);
      pistaY=pistaY-Math.round(spostamento);
      pistaX=pistaX-Math.round(deg/3);
      document.getElementById("pista").style.top = pistaY+"px";
      document.getElementById("pista").style.left = pistaX+"px";
      document.getElementById("neve").style.top = pistaY+"px";
      document.getElementById("neve").style.left = pistaX+"px";
      document.getElementById("velocita").innerHTML = "pistaY: "+Math.round(spostamento)+" pistaX: "+Math.round(deg/3);
      //alert("pistaY: "+pistaY+" pistaX: "+pistaX);
      //w.document.writeln("pistaX:"+px);
      if (Math.abs(pistaY) > 8400) {
        pistaX = 0;
        pistaY = 600;      
      }
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

function muoviElementoT(direction) {
    if (Math.abs(deg+direction) <= max_sterzata) {
      deg+=direction;
      document.getElementById("sciatore").style.transform = "translate(-50%, -50%) skew("+deg+"deg)";
    }
}

function muoviElemento(direction) {
    dir=direction*sterzata;
    //muoviElementoT(direction);
    try {clearInterval(myTimer);}
		catch(err){}
    myTimer = setInterval(function() {
	muoviElementoT(dir);
     /*   if (Math.abs(deg+direction) <= max_sterzata) {
           deg+=direction;
           document.getElementById("sciatore").style.transform = "translate(-50%, -50%) skew("+deg+"deg)";
	} */
    }, 60);
}

function resetInt() {
    try {clearInterval(myTimer);}
		catch(err){alert("Errore : "+err);}
}
