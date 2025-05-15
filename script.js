// To beggining I assigned some values in the variable
let warning = document.getElementById("alert");
let button = document.getElementById("button");
let parent = document.getElementById("parent");
let confirmBtn = document.getElementById("Ok");
if(button.addEventListener("click", () => {
    parent.classList.remove("display-none");
    document.body.classList.add("body");
    if(confirmBtn.addEventListener("click", () => {
        parent.classList.add("display-none");
        warning.classList.add("opacity-none");
        document.body.classList.remove("body");
    }));
}));