var arrayDiv = new Array();
    for(var i=0; i <= 1; i++){
        arrayDiv[i] = document.createElement('div');
        arrayDiv[i].id = 'block' + i;
        arrayDiv[i].className = 'block' + i;
      //  alert("passo "+arrayDiv[i].id);
        document.body.appendChild(arrayDiv[i]);
    }
