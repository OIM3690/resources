document.getElementById("toggle-theme").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
});

document.getElementById("toggle-font").addEventListener("click", () => {
    document.body.classList.toggle("alt-font");
});