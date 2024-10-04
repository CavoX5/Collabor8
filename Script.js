document.getElementById("menubutton").addEventListener("click", () => {
    document.body.classList.toggle("menuopen");
})
document.getElementById("closemenu").addEventListener("click", () => {
    document.body.classList.remove("menuopen");
})
document.getElementById('Searchbar').addEventListener("search", () => {
    window.location = './Searched.html';
    console.log("test");

    return false;
})

function test() {
    console.log("test");

}