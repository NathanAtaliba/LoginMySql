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