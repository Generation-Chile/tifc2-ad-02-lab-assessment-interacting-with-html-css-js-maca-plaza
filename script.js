const primerH1 = document.querySelector("#rojo");
primerH1.innerText = "Adiós";

document.querySelector("h1").style.color = 'orange';


document.querySelectorAll(".azul").forEach(e => {
    e.addEventListener("click", () => {

        if(e.style.color === "brown"){
            e.style.color = "blue";
        } else {
            e.style.color = "brown";
        }
        
    });
})

    
    
    
    
    
