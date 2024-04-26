const container = document.querySelector(".container")
const bares = [
  { name: "Burburinho", image: "burburinho.jpg",detailsPage: "burburinho.html" },
  { name: "Bar Central", image: "central.jpg", detailsPage: "central.html"  },
  { name: "Boi Neon Bar", image: "boi.jpg",detailsPage: "boi.html" },
  { name: "Bodega de Véio", image: "bodega.jpg",detailsPage: "burburinho.html" },
  { name: "Bar 28", image: "bar28.jpeg", detailsPage: "burburinho.html"},
  { name: "Porks", image: "porks.jpg",detailsPage: "burburinho.html" },
  { name: "Bar Zero Um", image: "01b.jpg", detailsPage: "burburinho.html" },
  { name: "Seu Pêu", image: "seupeu.jpg", detailsPage: "burburinho.html" },
  { name: "Estelita Bar", image: "estelita.jpg", detailsPage: "burburinho.html" },
  { name: "Bar do cuscuz", image: "cuscui.jpg", detailsPage: "burburinho.html" },
]

const showBares = () => {
  let output = "";
  bares.forEach(({ name, image }) => {
    output += `
      <div class="card">
        <img class="card--avatar" src=${image} />
        <h1 class="card--title">${name}</h1>
        <a class="card--link" href="${bares.find(bar => bar.name === name).detailsPage}">ver mais</a>
      </div>
    `;
  });
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showBares);