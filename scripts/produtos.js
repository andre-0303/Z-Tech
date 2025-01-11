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
    nome: "Notebook Lenovo Intel Core I3",
    preco: 100,
    imagem: "../img/notebook.png",
  },
  {
    id: 2,
    nome: "Placa-mãe usb3.1 Soyo",
    preco: 339.99,
    imagem: "../img/placa-mae.png",
  },
  {
    id: 3,
    nome: "Processador AMD Ryzen 3 4100",
    preco: 439.00,
    imagem: "../img/processador.png",
  },
  {
    id: 4,
    nome: "Memória RAM Kingston 8GB DDR4",
    preco: 359.00,
    imagem: "./img/monitor_gamer-removebg-preview.png",
  },
  {
    id: 5,
    nome: "SSD Kingston NV2 500GB",
    preco: 55,
    imagem: "../img/SSD.png",
  },
  {
    id: 6,
    nome: "Fonte de Alimentação",
    preco: 200,
    imagem: "../img/fonte.png",
  },
  {
    id: 7,
    nome: "Cooler Gamer",
    preco: 100,
    imagem: "../img/cooler.png",
  },
  {
    id: 8,
    nome: "HeadSet HyperX Cloud Alpha",
    preco: 848.24,
    imagem: "../img/headset.png",
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
      window.location.href = "../login.html";
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
