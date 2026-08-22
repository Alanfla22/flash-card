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

                                                    const termo = document.getElementById("termo " + d._id).value.trim();

                                                    const significado = document.getElementById("significado " + d._id).value.trim();

                                                    const postData = {

                                                        id: d._id,
                                                        termo: termo,
                                                        significado: significado
                                                    };

                                                       
                                                    // Submit the data via fetch()
                                                    fetch("https://fast-mongo-test.onrender.com", {
                                                        method: "PATCH",
                                                        headers: {
                                                            "Content-Type": "application/json"
                                                        },                                                        
                                                        body: JSON.stringify(postData)
                                                    }).then(response => {
                                                        if (!response.ok) {

                                                            throw new Error (`Server respondend with status: ${response.status}`);
                                                        }
                                                        return response.json();
                                                    }).then(() => {
                                                        alert("Atualizado !!!");
                                                    }).catch(error => {
                                                        alert(`Error: ${error.message}`)
                                                    });

                                                    location.replace("http://127.0.0.1:5500");


                                                });

        cardListDialogForm.append("label")
        .attr("for", "termo " + d.id )
        .text("Termo");

        cardListDialogForm.append("textarea")
        .attr("id", "termo " + d._id)
        .attr("name", "termo")
        .attr("rows", 5)
        .attr("cols", 33)
        .text(d.termo);

        cardListDialogForm.append("label")
        .attr("for", "significado " + d._id)
        .text("Significado");

        cardListDialogForm.append("textarea")
        .attr("id", "significado " + d._id)
        .attr("name", "significado")
        .attr("rows", 5)
        .attr("cols", 33)
        .text(d.significado);

        cardListDialogForm.append("br");

        cardListDialogForm.append("input")
        .attr("type", "submit")
        .attr("value", "Editar");
        
        cardListDialogForm.append("br");

        cardListDialogForm.append("input")
        .attr("type", "button")
        .attr("value", "Excluir")
        .on("click", () => {
                  
            // Submit the data via fetch()
            fetch(`https://fast-mongo-test.onrender.com/${d._id}`, {
                method: "POST"                
            }).then(response => {

                if (!response.ok) {

                    throw new Error (`Server respondend with status: ${response.status}`);
                }
                return response.json();
            }).then((data) => {
                alert(`Excluido!!! ${data}`);
            }).catch(error => {
                alert(`Error: ${error.message}`)
            });

            location.replace("http://127.0.0.1:5500");


        });        
        ;           

    })    
}
