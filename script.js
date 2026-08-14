import { viewCard } from "./components/viewCard.js";
import { listCard } from "./components/listCard.js";

d3.json("cards.json").then((data) => {

    viewCard(data);
    listCard(data);  


});

document.getElementById("view-card-tab").click();

