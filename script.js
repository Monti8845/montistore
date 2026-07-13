document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        });
    });
});

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.background = "rgba(0,0,0,0.75)";
        header.style.backdropFilter = "blur(15px)";
    }else{
        header.style.background = "rgba(255,255,255,0.05)";
    }
});
