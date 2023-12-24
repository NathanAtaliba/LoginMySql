async function filterProducts() {
return new Promise((resolve, reject)=>{ 
    let selectedCategory;
    const categoryRadios = document.getElementsByName('category');
    for (const category of categoryRadios) {
        if (category.checked) {
            selectedCategory = category.value;
            break;
        }
    }

    let selectedColor;
    const colorRadios = document.getElementsByName('colors');
    for (const color of colorRadios) {
        if (color.checked) {
            selectedColor = color.value;
            break;
        }
    }

    let selectedPrice;
    const priceRadios = document.getElementsByName('prices');
    for (const price of priceRadios) {
        if (price.checked) {
            selectedPrice = price.value;
            break;
        }
    }

    // Construct your query based on selectedCategory, selectedColor, and selectedPrice
    let query = 'SELECT * FROM products WHERE ';
    let conditions = [];

    if (selectedCategory && selectedCategory !== 'all') {
        conditions.push(`category = '${selectedCategory}'`);
    }

    if (selectedColor && selectedColor !== 'all') {
        conditions.push(`color1 = '${selectedColor}'`);
    }

    if (selectedPrice && selectedPrice !== 'all') {
        if(selectedPrice == '0 a 100'){
            conditions.push(`price BETWEEN 0 AND 100`);
        }
        else if(selectedPrice == '100 a 150'){
            conditions.push(`price BETWEEN 100 AND 150`);
        }
        else if(selectedPrice == '150 a 200'){
            conditions.push(`price BETWEEN 150 AND 200`);
        }
        else if(selectedPrice == '200 a 250'){
            conditions.push(`price BETWEEN 200 AND 250`);
        }
        else{
            conditions.push(`price > 250`);
        }
    }

    if (conditions.length > 0) {
        query += conditions.join(' AND ');
    } else {
        query += '1'; // A placeholder condition to retrieve all products if no specific filters are selected
    }
    fetch('http://localhost:3000/products',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({ query: query })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse a resposta JSON, se houver
    })
    .then(data => {
        inicializarLoja();
        resolve(data);
    })
    .catch(error => {
        // Lidar com erros durante a solicitação
        reject(error)
        console.error('Fetch error:', error);
    });
})
}

async function mensagem(title, text, icon){
	return Swal.fire({
		title: title,
		text: text,
		icon: icon,
		confirmButtonText: 'Ok'
	});
}

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
            let encontrado = 0 ;
            for(var i=0; i<carrinho.length; i++){
                if(produtoSelecionado.id === carrinho[i].id){
                    encontrado = 1;
                    break;
                }
            }
            if(encontrado == 1){
                mensagem('Produto ja adicionado ao carrinho', 'Selecione outro', 'warning');
            }
            else{
                mensagem('Produto adicionado ao carrinho', '', 'success');
                carrinho.push(produtoSelecionado);
                localStorage.setItem('carrinho', JSON.stringify(carrinho));
                console.log('Produto adicionado ao carrinho:', carrinho);
            }

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

inicializarLoja = async () => {
    var containerProdutos = document.getElementById('tabelaProdutos');
    
    // Limpar a tabela antes de adicionar novos produtos
    containerProdutos.innerHTML = '';

    try {
        var products = await filterProducts();
        for (var i = 0; i < products.length; i++) {
            containerProdutos.innerHTML += `
            <div class= 'produtos'>
                <img class ='imgs' src="${products[i].img}"/>
                <p>${products[i].name}</p>
                <a key="${products[i].id}" href=""> Adicionar ao carrinho! </a>
            `;
        }
    } catch (error) {
        // Lidar com erros durante a execução de filterProducts
        console.error('Error in filterProducts:', error);
    }
}

inicializarLoja();