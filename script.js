const button = document.getElementById("Click")

function handleclick(){
  let i = window.prompt("Light or dark mode")
    
}

button.addEventListener('click',handleclick)

if(i = "Light"){
    document.body.style.backgroundColor = "White"
}

if(i = "Dark"){
    document.body.style.backgroundColor = "Darkslategrey"

}


