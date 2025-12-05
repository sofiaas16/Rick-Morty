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
    globalData = data;
  
    data.forEach(element => {
        viewHTML(element.image, element.name, element.status);
    });
    renderCharacters(globalData);
    
    
}


const renderCharacters = (data) => {
    const div = document.querySelector("#div");
    div.innerHTML = "";

    data.forEach(element => {
        viewHTML(element.image, element.name, element.status);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    init();

    const input = document.querySelector("#inputSearch");
    const button = document.querySelector("#btnSearch");

    button.addEventListener("click", () => {
        const text = input.value.toLowerCase();

        const filtered = globalData.filter(item =>
            item.name.toLowerCase().includes(text)
        );

        renderCharacters(filtered);
    });
});




const viewHTML = (srcImage, name,status) =>{
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
    if (status === "Alive") {
        p.classList.add("Alive");
    } else if (status === "Dead") {
        p.classList.add("Dead");
    } else {
        p.classList.add("unknown");
    }
};