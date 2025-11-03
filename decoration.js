function changeImgPrev(){

    let imgName = document.getElementById("menuImg");

    if(imgName.src.includes("Imgs/MenuPag1.png")){

        imgName.src = "Imgs/MenuPag3.png";

    } else if (imgName.src.includes("Imgs/MenuPag3.png")){

        imgName.src = "Imgs/MenuPag2.png" ;

    } else if(imgName.src.includes("Imgs/MenuPag2.png")){

        imgName.src = "Imgs/MenuPag1.png";
    } 
}

function changeImgNext(){
    var imgName = document.getElementById("menuImg");

    if(imgName.src.includes("Imgs/MenuPag1.png")){

        imgName.src = "Imgs/MenuPag2.png";

    } else if (imgName.src.includes("Imgs/MenuPag2.png")){

        imgName.src = "Imgs/MenuPag3.png" ;

    } else if(imgName.src.includes("Imgs/MenuPag3.png")){

        imgName.src = "Imgs/MenuPag1.png";

    }
}