/*  QUESTÃO 03

Crie o código JavaScript e HTML responsável por
fazer o download de dados de uma API Web e
exibir em algum componente HTML da página,
por exemplo, um <p>.*/

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dados do LOL</title>
</head>
<body>
    <p id="resultado">Carregando...</p>

    <script>
        fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/pt_BR/champion.json')
        .then(response => response.json())
        .then(data => {
            let campeoes = Object.keys(data.data);
            document.getElementById('resultado').innerText = "Campeão aleatório: " + campeoes[Math.floor(Math.random() * campeoes.length)];
        })
        .catch(error => {
            document.getElementById('resultado').innerText = "Erro ao carregar os dados.";
        });
    </script>
</body>
</html>



