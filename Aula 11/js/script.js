
        function alterarTitulo() {
            document.getElementById("titulo").innerText = "Título alterado com JavaScript!"
        }
        
        function mostrarMensagem() {
        alert("Você clicou no botão!")
        }

        function mostrarNome() {
            let nome = document.getElementById("nome").value;
            document.getElementById("resultado").innerText = "Olá, " + nome + "!";
        }

        function mostrarCidade() {
            let nome = document.getElementById("cidade").value;
            document.getElementById("resultadoCidade").innerText = "Você é de" + cidade + "!"
        }

//Botão para verificar maioridade.

        function mostrarIdade() {
            let idade = Number(document.getElementById("idade").value);

            if (idade >= 18) {
                document.getElementById("resultadoIdade").innerText = "Você é maior de idade.";
            } else {
                document.getElementById("resultadoIdade").innerText = "Você é menor de idade.";
            }
        }

//Botão para trocar imagem

        function trocarImagem() {
        document.getElementById("imagem").src = "img/cr7.webp";
        }

//Esconder texto
        function esconderTexto() {
        document.getElementById("texto").style.display = "none";
        }

        function mostrarTexto() {
        document.getElementById("texto").style.display = "block";
        }

//Remover e adicionar parágrafos

        function removerParagrafo() {
        document.getElementById("p").remove(novoParagrafo);
        }

        function criarParagrafo() {
        let novoParagrafo = document.createElement("p");
        novoParagrafo.innerText = "Este parágrafo foi criado com JavaScript.";

        document.getElementById("p").appendChild(novoParagrafo);
        }
        