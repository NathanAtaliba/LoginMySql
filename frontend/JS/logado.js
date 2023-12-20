let itens = []

function adicionaNoCarrinho(productId){
    fetch('http://localhost:3000/products',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
          }
    })
    .then(async (results)=>  {
        const products = await results.json();
        const produtoSelecionado = products.find(product => product.id === productId);

        if (produtoSelecionado) {
            let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

            carrinho.push(produtoSelecionado);

            localStorage.setItem('carrinho', JSON.stringify(carrinho));

            console.log('Produto adicionado ao carrinho:', carrinho);

        } else {
            console.log('Produto não encontrado');
        }
    });
}

function listarCarrinho(){
    var carrinho = localStorage.getItem('carrinho')
    console.log(carrinho)
}

function removerDoCarrinho(productId){
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    const index = carrinho.findIndex(item => item.id === productId);

    if (index !== -1) {
        carrinho.splice(index, 1);

        localStorage.setItem('carrinho', JSON.stringify(carrinho));

        console.log('Produto removido do carrinho:', carrinho);
    } else {
        console.log('Produto não encontrado no carrinho');
    }
}

function displayUser(){
    let display = document.getElementById("userMenu");
    let icon = document.getElementById("iconUser");
    const controle = display.style.display;
    if(controle == "block"){
        display.style.display = "none";
        icon.style.color = "white";
    }else{
        display.style.display = "block";
        icon.style.color = "black";
    }
}

inicializarLoja = () =>{
    var containerProdutos = document.getElementById('tabelaProdutos');
    fetch('http://localhost:3000/products',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
          }
    })
    .then(async (results)=>  {
        const products = await results.json();
        for(var i=0; i < products.length; i++){
            containerProdutos.innerHTML += `
            <div class= 'produtos'>
                <img class ='imgs' src="`+ products[i].img +`"/>
                <p>`+ products[i].name +`</p>
                <a key="`+ products[i].id +`" href=""> Adicionar ao carrinho! </a>
            `;
        }
})
}

inicializarLoja();