let testiboxes = document.querySelectorAll(".testimonials .container .testi-box");
let section2 = document.querySelector(".testimonials");
let started = false;
let section = document.querySelector(".services .container");
window.addEventListener("scroll", function() {
    if (window.scrollY >= section.offsetTop) {
        if (!started) {
            section.classList.add("flip")
        }
    }
    if (window.scrollY >= section2.offsetTop) {
        console.log("ee")
            testiboxes.forEach((el) => {el.classList.add("flip2")})    
    };
});


// 
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

    // skills offset top
    let skillsOffsetTop = ourSkills.offsetTop;

    // skills outer height
    let skillsOuterHeight = ourSkills.offsetHeight;

    // window height
    let windowHeight = this.innerHeight;

    // window scrollTop
    let windowScrollTop = this.pageYOffset

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
        let allSkills = document.querySelectorAll(".skills .progress span");
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        });
    };
};