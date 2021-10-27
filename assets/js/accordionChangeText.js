let button = document.getElementById("accordionButton");
button.innerHTML = "Más Información +";

const buttonFunction = () => {  
  if (button.innerHTML === "Más Información +") {
    button.innerHTML = "Menos Información -";
  } else {
    button.innerHTML = "Más Información +";
  }
};
