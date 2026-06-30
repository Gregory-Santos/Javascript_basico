let formulario =
document.getElementById("formulario");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    let nome =
    document.getElementById("nome").value;

    let genero =
    document.getElementById("genero").value;

    let ano =
    document.getElementById("ano").value;

    console.log(nome);
    console.log(genero);
    console.log(ano);

    if (nome.trim() === "" || genero.trim() === "" || ano.trim() === ""){
    alert("Preencha todos os campos!");
    return;
    }

    let filme = document.createElement("div");
    filme.classList.add("card");

    filme.innerHTML = `
    <h2>🎬 ${nome}</h2>
    <p>🎭 ${genero}</p>
    <p>📅 ${ano}</p>
    <button>Excluir</button>
    `;

    let lista = document.getElementById("listaFilmes");

    lista.appendChild(filme);
    quantidadeFilmes++;
    contador.textContent = `Filmes cadastrados: ${quantidadeFilmes}`;

    let botaoExcluir = filme.querySelector("button");

    botaoExcluir.addEventListener("click", function(){
    filme.remove();
    
});
});

const botaoModo = document.getElementById("modoClaro");

botaoModo.addEventListener("click", function() {
    document.body.classList.toggle("claro");

if (document.body.classList.contains("claro")) {
        botaoModo.textContent = "🌙 Modo Escuro";
    } else {
        botaoModo.textContent = "☀️ Modo Claro";
    }
});

let quantidadeFilmes = 0;
let contador = document.getElementById("contador");