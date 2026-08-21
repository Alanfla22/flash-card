const cardList = d3.select("#list-card").append("ul");

export function listCard (data) {
    
    data.forEach((d) => {    
        
             
        cardList.append("li")
        .append("button")
        .attr("commandfor", "dialog " + d._id)
        .attr("command", "show-modal")
        .attr("class", "button-list")
        .text(d.termo);

        const cardListDialog = cardList.append("dialog")
                                        .attr("id", "dialog " + d._id);

        cardListDialog.append("button")
        .attr("commandfor", "dialog " + d._id)
        .attr("command", "close")
        .attr("class", "button-close")
        .text("Close");                                            
  
        const cardListDialogForm = cardListDialog.append("form")
                                                .on("submit", (e) => {

                                                    e.preventDefault();

                                                    const postData = {

                                                        id: d._id,
                                                        termo: "novvv",
                                                        significado: "showww"
                                                    };
                                                         
                                                    alert(postData);
                                                    // Submit the data via fetch()
                                                    fetch("https://fast-mongo-test.onrender.com", {
                                                        method: "PATCH",
                                                        headers: {
                                                            "Content-Type": "application/json"
                                                        },                                                        
                                                        body: JSON.stringify(postData)
                                                    }).then(response => {
                                                        if (!response.ok) {
                                                            console.log(response.json());
                                                            alert("deu ruim");
                                                            throw new Error (`Server respondend with status: ${response.status}`);
                                                        }
                                                        return response.json();
                                                    }).then((data) => {
                                                        alert(`Postado: ${data}`);
                                                    }).catch(error => {
                                                        alert(`Error: ${error.message}`)
                                                    });
                                                    


                                                });

        cardListDialogForm.append("label")
        .attr("for", "termo")
        .text("Termo");

        cardListDialogForm.append("textarea")
        .attr("id", "termo")
        .attr("name", "termo")
        .attr("rows", 5)
        .attr("cols", 33)
        .text(d.termo);

        cardListDialogForm.append("label")
        .attr("for", "significado")
        .text("Significado");

        cardListDialogForm.append("textarea")
        .attr("id", "significado")
        .attr("name", "significado")
        .attr("rows", 5)
        .attr("cols", 33)
        .text(d.significado);

        cardListDialogForm.append("br");

        cardListDialogForm.append("input")
        .attr("type", "submit")
        .attr("value", "Editar");    

    })    
}
