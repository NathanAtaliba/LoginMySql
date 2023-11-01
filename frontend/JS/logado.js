const email = localStorage.getItem('email');
document.getElementById('texto').textContent = email;

function displayUser(){
    let display = document.getElementById("userMenu").style.display;
    console.log(display);
    if(display == "none"){
        display.style.display = "block";
    }else{
        display.style.display = "none";
    }
}