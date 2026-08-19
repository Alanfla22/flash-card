import { viewCard } from "./components/viewCard.js";
import { listCard } from "./components/listCard.js";

d3.json("https://fast-mongo-test-2.onrender.com").then((data) => {

    const obj = JSON.parse(data);

    console.log(obj);

    viewCard(obj);
    listCard(obj);  


});




document.getElementById("view-card-tab").click();

const formElem = document.getElementById("form");

formElem.addEventListener("formdata", (e) => {

  // Get the form data from the event object
  const data = e.formData;

  // Submit the data via fetch()
  fetch("https://fast-mongo-test-2.onrender.com", {
    method: "POST",
    body: data,
  });

  e.preventDefault();  

  location.replace(location.href);  
    
});
