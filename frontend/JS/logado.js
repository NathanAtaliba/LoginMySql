const email = localStorage.getItem('email');
document.getElementById('texto').textContent = email;

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