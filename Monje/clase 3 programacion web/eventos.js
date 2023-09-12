function mostrar(index) {
    if (index == 1) {
        document.getElementById('foto').src = "https://www.fcbarcelona.com/photo-resources/2022/08/02/ae5252d1-b79b-4950-9e34-6e67fac09bb0/LeoMessi20092010_pic_fcb-arsenal62.jpg?width=1200&height=750";
    } else {
        document.getElementById('foto').src = "https://i.pinimg.com/originals/82/bb/4a/82bb4aef73cd957a33851f80d29a1460.jpg";
    }
}

function bordear(index) {

    if(index == 1) {
        document.getElementById('foto').className = "estilo1";
    } else {
        document.getElementById('foto').className = "estilo2";
    }
}