let email = document.getElementById("email");
let password = document.getElementById("password");

let activeTokens = {};

function reset(){
    email.value = '';
    password.value = '';
}

// Função para criar um cookie com um token
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + "; " + expires;
}

// Função para ler um cookie
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.indexOf(name + "=") === 0) {
            return cookie.substring(name.length + 1, cookie.length);
        }
    }
    return "";
}

function generateToken(){
    return Math.random().toString(36).substring(2,16);
}

async function mensagem(title, text, icon){
	return Swal.fire({
		title: title,
		text: text,
		icon: icon,
		confirmButtonText: 'Ok'
	});
}

function loginUser(){
    if(email.value == '' || password.value == ''){
        mensagem('Email e senha não preenchidos!', 'Preencha os campos!', 'warning')
    }else{
        fetch('http://localhost:3000/users',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
              }
        })
        .then(async (results)=>  {
            const users = await results.json();
            let found = false;
            for (let element of users){
                if((element.email == email.value) && (element.senha == password.value)){
                    found = true;
                    const token = generateToken();
                    activeTokens[token] = element.email;  
                    setCookie("auth_token", token, 1); // terceiro argumento e o numero de dias
                    localStorage.setItem("email", email.value)
                    break;
                }
                else{
                    found = false;
                }
            }
            reset();
            if(found == true){
               await mensagem('Usuario encontrado', 'Voce sera direcionado para pagina de compras!', 'success')
               window.location.assign('./logado.html');
            }else{
                mensagem('Usuario não encontrado', 'Entre novamente com seus dados', 'warning')
            }
        })
        .catch((error) => {
            console.error('Erro na solicitação:', error.message);
            reset();
        });
    }    
}

function createUser(){
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body:(JSON.stringify({
            "email": `${email.value}`,
            "password": `${password.value}`
        }))
    })
    .then(response => {
        if( response.ok){
            alert(response.statusText);
            reset();
        }
        else{
            alert('Error creating user');
            reset();
            throw new Error('Error in POST request');
        }
    })
}