var x = 0;
var y = 300;

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
        //alert("passo "+arrayDiv[i].id);
        document.getElementById("pista").appendChild(arrayDiv[i]);
        //document.body.appendChild(arrayDiv[i]);
    }
