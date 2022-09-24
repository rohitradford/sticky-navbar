const navbarEl = document.querySelector(".navbar");

const bottomContsinerEl = document.querySelector(".bottom-container");

console.log(bottomContsinerEl.offsetHeight);

console.log(bottomContsinerEl.offsetTop);

window.addEventListener("scroll", ()=>{
    if(window.scrollY>bottomContsinerEl.offsetTop - navbarEl.offsetHeight - 50){
        navbarEl.classList.add("active");
    }else{
        navbarEl.classList.remove("active");
    }
});
