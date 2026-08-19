export function viewCard (data) {

    data.forEach((d) => {        

        const card = d3.select("#view-card")
                    .append("div")
                    .attr("class", "mySlides fade")
                    .append("div")
                    .attr("class", "flip-card")
                    .append("div")
                    .attr("class", "flip-card-inner")
                    .style("transform", `rotateY(0deg)`)
                    .on("click", () => {

                        if (document.getElementsByClassName("flip-card-inner")[0].style.transform == `rotateY(0deg)`) {
                            d3.selectAll(".flip-card-inner")
                            .style("transform", `rotateY(180deg)`);
                        } 
                        else {
                            d3.selectAll(".flip-card-inner")
                            .style("transform", `rotateY(0deg)`);                            
                        }

                    });

        card.append("div")
        .attr("class", "flip-card-front")
        .append("p")
        .text(d.termo);
        
        card.append("div")
        .attr("class", "flip-card-back")
        .append("p")
        .text(d.significado);

    })
    
    const slides = document.getElementsByClassName("mySlides");
    const numberText = document.getElementById("numbertext"); 

    slides[0].style.display = "block";       
    numberText.innerHTML = `${slideIndex} / ${slides.length}`;
}

