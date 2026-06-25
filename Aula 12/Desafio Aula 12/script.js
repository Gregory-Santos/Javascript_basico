let formulario =
document.getElementById("formulario");

formulario.addEventListener("button", function(event){

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

    if (nome == "" || genero == "" || ano == ""){
    alert("Preencha todos os campos!");
    return;

    console.log(nome);

    console.log(genero);
    
    console.log(ano);
}
});

let filme =
document.createElement("div");

<p id="texto"></p>
<button onclick="esconderTexto()">Esconder</button>
<button onclick="mostrarTexto()">Mostrar</button>