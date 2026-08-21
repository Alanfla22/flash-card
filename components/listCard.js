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
                                                .attr("enctype","application/x-www-form-urlencoded")
                                                .on("formdata", (e) => {

                                                    const data = e.formData;

                                                    data.append("id", d._id);

                                                    fetch("https://fast-mongo-test.onrender.com", {
                                                        method: "PUT",
                                                        body: data,
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
