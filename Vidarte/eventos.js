function mostrar(index){
    if (index==1){
        document.getElementById('foto').src = "yeison.avif"
    }else{
        document.getElementById('foto').src = "Amarillo.png"
    }
}

function bordear(index) {
    if (index==1){
        document.getElementById('foto').className = "estilo1";
    }else {
        document.getElementById('foto').className = "estilo2";
    }
}