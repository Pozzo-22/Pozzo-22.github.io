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


let isInternalNavigation = true;

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href]');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        const isExternal = href.startsWith('http') && !href.includes(window.location.hostname);
        
        if (isExternal) {
            link.addEventListener('click', function() {
                isInternalNavigation = false;
            });
        }
    });
});

window.addEventListener('popstate', function(event) {
    if (isInternalNavigation) {
        window.history.forward();
    }
    isInternalNavigation = true;
});

window.addEventListener('beforeunload', function() {
    isInternalNavigation = false;
});
