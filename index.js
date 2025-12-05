document.addEventListener("DOMContentLoaded", () => {
    init();
})

const init = () => {
    showDATA();
}

const cData = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log(data);
    
}

cData();

