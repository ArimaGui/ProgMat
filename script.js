const elencoAdjetivo = document.getElementById("elencoAdjetivo");

let contagem = 0;

function handleMouseOver(event) {
  const adjetivosLindos = ["xoxo", "capengo", "manco", "fragil", "anemico"];

  if (contagem < 5) {
    elencoAdjetivo.innerHTML = adjetivosLindos[contagem];

    contagem++;
  } else {
    contagem = 0;
    elencoAdjetivo.innerHTML = adjetivosLindos[contagem];
    contagem++;
  }
}

elencoAdjetivo.addEventListener("mouseover", handleMouseOver);

elencoAdjetivo.addEventListener("mouseout", function () {
  elencoAdjetivo.innerHTML = "fortíssimo";
});
