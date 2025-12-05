document.addEventListener("DOMContentLoaded", () => {
    init();
})

const init = () => {
    showData();
}

const cData = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    const responseData = data.results;
    console.log(responseData);
    
    return responseData;
    
}
const showData = async () => {
    const data = await cData();

    setTimeout(() => {

        data.forEach(element => {
            viewHTML(element.image, element.name, element.status);
        });

    })
}

const viewHTML = (srcImage, name,status, genero) =>{
    const div = document.querySelector("#div");
    const divCart = document.createElement("DIV");
    const img = document.createElement("IMG");
    const h1 = document.createElement("H1");
    const p = document.createElement("P");
  

    divCart.classList.add("cart");

    img.setAttribute("src", srcImage);
    h1.innerText = name;
    p.innerText = "Status: " + status;

    validateAlive(p,status)



    divCart.appendChild(img);
    divCart.appendChild(h1);
    divCart.appendChild(p);
  

    div.appendChild(divCart);
}

const validateAlive = (p, status) => {
    const allowed = ["Alive", "Dead", "unknown"];
    allowed.includes(status) ? p.classList.add : p.classList.add("unknown");
}