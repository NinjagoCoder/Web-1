const button = document.getElementById("Click")
let i;
function handleclick(){
  const i = window.prompt("Light or dark mode")
    
}

button.addEventListener('click',handleclick)

if(i = "Light"){
    document.body.style.backgroundColor = "White"
}

if(i = "Dark"){
    document.body.style.backgroundColor = "Darkslategrey"

}


