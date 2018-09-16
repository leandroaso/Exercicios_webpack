const produto ={
    nome: 'Caneta Bic Preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto){
    return {...objeto}
}

const novoProduto = clone(produto);
novoProduto.nome = "caneta bic preta 2"

console.log(produto)
console.log(novoProduto)