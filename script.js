var arrayDiv = new Array();
    for(var i=0; i <= 20; i++){
        arrayDiv[i] = document.createElement('div');
        //arrayDiv[i].id = 'block' + i;
        arrayDiv[i].className = 'gigante';
        //alert("passo "+arrayDiv[i].id);
        document.body.appendChild(arrayDiv[i]);
    }
