import { viewCard } from "./components/viewCard.js";
import { listCard } from "./components/listCard.js";

const data = d3.json("cards.json");

data.then((d) => {
    viewCard(d);
    listCard(d);  
})

document.getElementById("view-card-tab").click();

