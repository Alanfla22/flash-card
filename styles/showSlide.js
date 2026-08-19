var slideIndex = 1;

function showSlide(n) {

    const slides = document.getElementsByClassName("mySlides");
    const numberText = document.getElementById("numbertext");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }    

    slideIndex += n;

    if (slideIndex < 1) slideIndex = 1;
    if (slideIndex > slides.length) slideIndex = slides.length;

    slides[slideIndex - 1].style.display = "block";
    numberText.innerHTML = `${slideIndex} / ${slides.length}`;

    d3.selectAll(".flip-card-inner")
    .style("transform", `rotateY(0deg)`);
    

}    
