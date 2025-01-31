
//QUESTÃO 01

    /*
    1. Crie um script que instancia um array com 30 posições e
    iterasobreele,salvandoemcadaelementoovalordaposição
    dele no array somado de 23. Após isso, imprima no console
    todososelementosdoarray

    */

    let array = new Array(30);

    for (let i = 0; i < array.length; i++) {
        array[i] = i + 23;
        console.log(array[i]);
    }


    /*

    2. Dado o array “let nomes = ['Dino', 'Baby', 'Charlote’]”
    percorra todos os elementos e adicione o sobrenome “ da
    Silva Sauro”usandoa função Map.

    */

    let nomes = ['Dino', 'Baby', 'Charlote']

    let novo_array = nomes.map(nomes => nomes + ' da Silva Sauro')

    for (i=0; i<novo_array.length; i++){
        console.log(novo_array[i])
    }


/*

//QUESTÃO 02

    1. Você está desenvolvendo um aplicativo para uma loja online. Um dos 
    requisitos é exibir o preço com desconto de cada produto listado no 
    inventário.  A  lista  de  produtos  está  disponível  como  um  array  de 
    objetos, onde cada objeto possui os atributos nome e preço

    */



    const produtos = [
        { nome: "Produto 1", preco: 100 },
        { nome: "Produto 2", preco: 200 },
        { nome: "Produto 3", preco: 300 }
    ];

    const produtosComDesconto = produtos.map(produto => {
        return {
            ...produto,
            precoComDesconto: produto.preco * 0.9 
            };
    });

    console.log(produtosComDesconto);



    /*

//QUESTÃO 03

    */


const livros = [
    { titulo: "Livro A", autor: "Autor 1", disponivel: true },
    { titulo: "Livro B", autor: "Autor 2", disponivel: false },
    { titulo: "Livro C", autor: "Autor 3", disponivel: true },
    { titulo: "Livro D", autor: "Autor 4", disponivel: false }
];

const livrosDisponiveis = livros.filter(livro => livro.disponivel);

console.log(livrosDisponiveis);



/*

//QUESTÃO 04

*/

const vendas = [
    { produto: "Produto A", valor: 100 },
    { produto: "Produto B", valor: 200 },
    { produto: "Produto C", valor: 150 },
    { produto: "Produto D", valor: 300 }
];

const totalVendas = vendas.reduce((total, venda) => total + venda.valor, 0);

console.log(`Valor total das vendas: R$ ${totalVendas}`);

