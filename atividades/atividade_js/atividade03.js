/*

QUESTÃO 01

O objetivo é que todos os nomes pares na lista de alunos fiquem em vervemelho

*/


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Questão 03</title>
</head>
<body>
    

<h2>Listas de Alunos</h2>

<ul id="lista-alunos">
    <li>João</li>
    <li>Maria</li>
    <li>Pedro</li>
    <li>Ana</li>
    <li>Lucas</li>

</ul>




</body>

    <script>

        
        const alunos = document.querySelectorAll("#lista-alunos li");

        alunos.forEach(function(aluno, index){

            if ((index + 1) % 2 == 0){
                aluno.style.color = "red";
            }
        
        });

    </script>

</html>


