/*  QUESTÃO 01

Criar uma página HTML com somente 1 botão.
• Ao clicar no botão, deve-se alterar o
background-color usando uma cor RGB aleatória.
• Para gerar números aleatórios no intervalo de 0-255
– Math.floor(Math.random() * 255); //Math.random()
retorna número entre 0 e 1, ao multiplicar por 255 temos
o range desejado*/

<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Troca de Cor</title>
</head>
<body>

    <button id="mudarCor">Mudar Cor</button>

    <script>
        document.getElementById("mudarCor").addEventListener("click", function() {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });
    </script>

</body>
</html>




/*  QUESTÃO 02

Criar uma página Pokémon! A cada clique na
página (em qualquer lugar) deve ser inserido
um novo Pokémon.
• No exemplo abaixo, cliquei na página 9 vezes.*/




<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Pokémon</title>
    <style>
        body {
            text-align: center;
        }
        .pokemon {
            display: inline-block;
            text-align: center;
            margin: 10px;
        }
    </style>
</head>
<body>

    <h2>Clique para adicionar um Pokémon!</h2>
    <div id="container"></div>

    <script>
        let count = 1;

        document.addEventListener("click", function() {
            let id = Math.floor(Math.random() * 151) + 1; // pegando Pokémon de 1 a 151
            let img = document.createElement("img");
            img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

            let div = document.createElement("div");
            div.className = "pokemon";
            div.innerHTML = `<p>#${count}</p>`;
            div.appendChild(img);

            document.getElementById("container").appendChild(div);
            count++;
        });
    </script>

</body>
</html>

