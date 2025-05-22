const darkButton = document.getElementById("toggle-dark");
const body = document.body
function updateButtonText() {
    if (body.classList.contains("dark-mode")) {
        darkButton.textContent = "Light mode"
    } else {
        darkButton.textContent = "Dark mode"
    }
}
darkButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light")
    }
    updateButtonText()
})
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode")
}
updateButtonText()

//welcome message

const mess = document.getElementById("welcome-message");
mess.innerHTML = "👋 Benvenuto nel mio blog, Giuseppe!";

setTimeout(() => {
  mess.style.display ="none"
}, 5000)