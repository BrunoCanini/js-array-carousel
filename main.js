// --------------------------------------------------------------------------

const arrayNomiImg = [ 
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp"
]

const carosello = document.getElementById("caroselloJs")

for (let c = 0; c < arrayNomiImg.length; c++) {
    const valoreImg = arrayNomiImg[c];

    const imgSlide = document.createElement("img")
    imgSlide.src = valoreImg

    if(c === 0){
        imgSlide.classList.add("visible")
    }

    carosello.append(imgSlide);

}

// -----------------------------------------------------------------------

const btnAvanti = document.getElementById("avantiJs")

// adesso creo un array di ELEMENTI img
const arrayElementiImg = document.querySelectorAll(".carosello > img")
// adesso posso modificarli tramite l indice
                // esempio
// arrayElementiImg[0].classList.remove("visible")
// arrayElementiImg[1].classList.add("visible")

let indiceIniziale = 0

btnAvanti.addEventListener("click" , function(){

    arrayElementiImg[indiceIniziale].classList.remove("visible")

    indiceIniziale++;

    if(indiceIniziale == arrayElementiImg.length){
        indiceIniziale = 0;
    }

    arrayElementiImg[indiceIniziale].classList.add("visible")

})

// -----------------------------------

const btnIndietro = document.getElementById("indietroJs")

btnIndietro.addEventListener("click" , function(){

    arrayElementiImg[indiceIniziale].classList.remove("visible")

    indiceIniziale--;

    // if(indiceIniziale == 0){
    //     indiceIniziale = ;
    // }

    arrayElementiImg[indiceIniziale].classList.add("visible")

})



