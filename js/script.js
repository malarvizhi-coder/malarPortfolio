// Typing animation
var typed = new Typed(".role",{
    strings: ["","Web Designer", "Web Developer", "Full Stack Developer", "MERN Stack Developer"],
    typeSpeed: 120,
    backSpeed: 80,
    loop: true,
})

// Aside block Animation
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;

allSection[0].classList.add("active"); 

for(let i=0; i<totalNavList; i++)
{
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(){
        for(j=0; j<totalNavList; j++){
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
    })
}

function showSection(element){
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("active")
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(element){
    for(let i=0; i<totalNavList; i++){
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
})


const navTogglerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", ()=>{
    asideSectionTogglerButton();
})
function asideSectionTogglerButton(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
}