import { viewCard } from "./components/viewCard.js";
import { listCard } from "./components/listCard.js";

d3.json("https://fast-mongo-test.onrender.com").then((data) => {

    const obj = JSON.parse(data);

    console.log(obj);

    viewCard(obj);
    listCard(obj);  


});




document.getElementById("view-card-tab").click();

const formElem = document.getElementById("form");

formElem.addEventListener("submit", (e) => {

  e.preventDefault();

  const termo = document.getElementById("termo").value.trim();

  const significado = document.getElementById("significado").value.trim();

  const postData = {termo: termo, significado: significado};

  alert(JSON.stringify(postData));

  // Submit the data via fetch()
  fetch("https://fast-mongo-test.onrender.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({termo: termo, significado: significado})
  }).then(response => {
    if (!response.ok) {
      console.log(response.json());
      throw new Error (`Server respondend with status: ${response.status}`);
    }
    
    return response.json();
  }).then(() => {
    alert("Postado com sucesso!!");
  }).catch(error => {
    alert(`Error: ${error.message}`)
  });


});

