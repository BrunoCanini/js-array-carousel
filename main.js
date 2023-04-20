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
