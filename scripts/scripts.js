const mudar = document.getElementById("mudar");
const bodyElement = document.body;

mudar.addEventListener("click", () => {
  const mudarTema = bodyElement.getAttribute("data-bs-theme");

  if (mudarTema === "light") {
    bodyElement.setAttribute("data-bs-theme", "dark");
  } else {
    bodyElement.setAttribute("data-bs-theme", "light");
  }
});

const produtos = [
  {
    id: 1,
    nome: "Cadeira Gamer",
    preco: 100,
    imagem: "./img/cadeira_gamer-removebg-preview.png",
  },
  {
    id: 2,
    nome: "Cpu Gamer",
    preco: 4000,
    imagem: "./img/cpu_gamer-removebg-preview.png",
  },
  {
    id: 3,
    nome: "Impressora",
    preco: 2500,
    imagem: "./img/impressora-removebg-preview.png",
  },
  {
    id: 4,
    nome: "Monitor Gamer",
    preco: 300,
    imagem: "./img/monitor_gamer-removebg-preview.png",
  },
  {
    id: 5,
    nome: "Mouse Gamer",
    preco: 55,
    imagem: "./img/mouse_gamer-removebg-preview.png",
  },
  {
    id: 6,
    nome: "Caixas de som Gamer",
    preco: 150,
    imagem: "./img/som_gamer-removebg-preview.png",
  },
  {
    id: 7,
    nome: "Teclado Gamer",
    preco: 600,
    imagem: "./img/teclado_gamer-removebg-preview.png",
  },
  {
    id: 8,
    nome: "Placa de Vídeo RTX-3050",
    preco: 2999.99,
    imagem: "./img/rtx-3050.png",
  },
];

const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

document.querySelectorAll(".add-to-cart").forEach((botao, index) => {
  botao.addEventListener("click", () => {
    carrinho.push(produtos[index]);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert("Produto adicionado ao carrinho!");
  });
});

document.querySelectorAll(".comprar").forEach((botao, index) => {
  botao.addEventListener("click", () => {
    if (confirm("Deseja continuar a compra?")) {
      window.location.href = "login.html";
    }
  });
});

const searchBar = document.getElementById("search-bar");
const searchButton = document.getElementById("search-button");
const products = document.querySelectorAll(".product-card");

function searchProducts() {
  const searchTerm = searchBar.value.toLowerCase();
  let found = false; 

  products.forEach((product) => {
    const productName = product.getAttribute("data-name").toLowerCase();

    if (productName.includes(searchTerm)) {
      product.style.display = "block"; 
      found = true;
    } else {
      product.style.display = "none";  
    }
  });

  if (!found) {
    alert("Nenhum produto encontrado.");
  }
}
 
searchButton.addEventListener("click", searchProducts);

searchBar.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    searchProducts();
  }
});

