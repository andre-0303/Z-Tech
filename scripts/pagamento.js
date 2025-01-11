const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const resumo = document.getElementById("resumo-carrinho");

    carrinho.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
      li.classList.add("list-group-item");
      resumo.appendChild(li);
    });

    document.querySelector(".btn-success").addEventListener("click", () => {
      alert("Compra finalizada com sucesso!");
      localStorage.clear();
      window.location.href = "index.html";
    });