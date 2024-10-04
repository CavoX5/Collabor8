document.getElementById("menubutton").addEventListener("click", () => {
    document.body.classList.toggle("menuopen");
})
document.getElementById("closemenu").addEventListener("click", () => {
    document.body.classList.remove("menuopen");
})

function test() {
    console.log("test");

}