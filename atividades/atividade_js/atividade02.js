/*Questão 01

Crie 3 classes no JavaScript usando Class: Animal, 
Gato, Cachorro e Pato. As classes Gato, Cachorro 
e Pato devem herdar da classe Animal.
• A classe Animal possui os atributos: EmitirSom e 
Comer.
• Crie  também  os  métodos  Gets  e  Sets  para  cada 
classe, permitindo resgatar e setar os valores dos 
atributos.
• Cada  animal  deve  emitir  o  som  respectivo,  por 
exemplo “Au au”, “Miau” ou “Quack”.
• Instancie alguns objetos para testar as classes.

*/


class Animal {
    constructor(emitirSom, comer) { 
        this._emitirSom = emitirSom;
        this._comer = comer;
    }

    get emitirSom() {
        return this._emitirSom;
    }

    set emitirSom(som) {
        this._emitirSom = som;
    }

    get comer() {
        return this._comer;
    }

    set comer(alimento) {
        this._comer = alimento;
    }
}

class Cachorro extends Animal {
    constructor() {
        super("Au au", "Ração");
    }
}

class Gato extends Animal {
    constructor() {
        super("Miau", "Ração");
    }
}

class Pato extends Animal {
    constructor() {
        super("Quack", "Pão");
    }
}

// Criando objetos para testar
const cachorro = new Cachorro();
const gato = new Gato();
const pato = new Pato();

console.log(cachorro.emitirSom);
console.log(gato.emitirSom);
console.log(pato.emitirSom);



/* QUESTÃO 02

Usando  2 <input>,  receber  preço  e 
quantidade. Exibir o valor total.
• Quando  um  deles  for  alterado,  alterar 
automaticamente o valor total.


*/

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Questão 02</title>
</head>
<body>
    

<form>

    <label for="preco">Preço:</label>
    <input type="number" id="preco">
    <br>

    <label for="quantidade">Quantidade</label>
    <input type="number" id="quantidade">
    <br>

    <label for="total">Valor total:</label>
    <input type="text" id="total" name="total" readonly>

</form>




</body>

    <script>

        
        function calcularTotal(){

            var preco = parseFloat(document.getElementById('preco').value);
            var quantidade = parseInt(document.getElementById('quantidade').value)
            var total = preco * quantidade;
            document.getElementById('total').value = total.toFixed(2);

        }

        document.getElementById('preco').addEventListener('input', calcularTotal);
        document.getElementById('quantidade').addEventListener('input', calcularTotal);

    </script>

</html>

*/

/* QUESTÃO 03

Crie  uma  página  web  que  mostra  uma  lista  de  
alunos   usando   <ul>   e   <li>.Após   criar   pelo  
menos  6  nomes  de  alunos,  crie  o  código  CSS  e  
Javascript   para   alterar   a   cor   do   texto   para  
vermelhos   dos   alunos   que   possuem   uma  
posição  par  na  lista.

EXERCÍCIO
Dica:  use  o  querySelectorAll  e o  
forEach(function(aluno,  index)

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


