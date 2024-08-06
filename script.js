const button = document.getElementById("Click")
let i;
function handleclick(){
    alert("Best random website ever")
    console.log(i++)
    document.body.style.backgroundColor ="Grey"
    
}

button.addEventListener('click',handleclick)



