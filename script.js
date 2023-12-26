let button = document.querySelector(".btn");
let input = document.querySelector("input");
let icon = document.querySelector(".user-icon");
let loader = document.querySelector(".loader");

button.addEventListener("click", ()=> {
    loading();
})

document.addEventListener("keydown", (e)=> {
    if(e.key == "Enter") {
        button.style.backgroundColor = "#096DD9";
        loading();
    }
})

function loading() {
    input.disabled = true;
    icon.style.display = "none";
    loader.style.visibility = "visible"
    setTimeout(()=> {
        button.disabled = true;
        loader.style.visibility = "hidden"
    }, 2000)
}