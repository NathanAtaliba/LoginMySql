let email = document.getElementById("email");
let password = document.getElementById("password");
let activeTokens = {};

function reset(){
    email.value = '';
    password.value = '';
}

function generateToken(){
    return Math.random().toString(36).substring(2,16);
}

function loginUser(){
    fetch('http://localhost:3000/users',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
          }
    })
    .then(async (results)=> {
        const users = await results.json();
        let found = false;
        for (let element of users){
            if((element.email == email.value) && (element.senha == password.value)){
                found = true;
                const token = generateToken();
                activeTokens[token] = element.email;  
                console.log(activeTokens);
                break;
            }
            else{
                found = false;
            }
        }
        reset();
        if(found == true){
            alert('User found!');
            window.location.assign('../logado.html');
        }else{
            alert('User not found!');
        }
    })
    .catch((error) => {
        console.error('Erro na solicitação:', error.message);
        reset();
    });
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