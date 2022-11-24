let toggleBtn = document.querySelector(".header i");
let tLinks = document.querySelector(".header .second-ul");

toggleBtn.onclick = function () {
    tLinks.classList.toggle("open");
};

document.addEventListener("click", (e) => {
    if (e.target !== toggleBtn && e.target !== tLinks) {
        if (tLinks.classList.contains("open")) {
            tLinks.classList.toggle("open")
        }
    };
});