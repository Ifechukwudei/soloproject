const navBar = document. querySelector('.header__navigation');
const toggle = document.querySelector('.header__toggle');
toggle.addEventListener("click", () => {
     
    const visibility = navBar.getAttribute("data-visible");
    if (visibility === "false") {
        navBar.setAttribute("data-visible", true);
        toggle.setAttribute("aria-expanded", true);
    }
    else if ( visibility === "true"){
        navBar.setAttribute("data-visible", false);
        toggle.setAttribute("aria-expanded", false);
    }

 
})
const topLink = document.querySelector('.top-link');

window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navBar.classList.add("header__navigation");
    }
    if(scrollHeight > 500){
        topLink.classList.add("show-link");
    }
    else{
        topLink.classList.remove("show-link");
    }
})
const scrollLinks = document.querySelectorAll('.scroll');


scrollLinks.forEach(function (link){
    link.addEventListener("click", function(e){
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const navHeight = navBar.getBoundingClientRect().height;
        const fixedNav = navBar.classList.contains("header__navigation");
        let position = element.offsetTop - (navHeight + 4);
        if (navHeight > 78){
            position = element.offsetTop
        }
        window.scrollTo({
            left:0,
            top: position,
        })
        const visibility = navBar.getAttribute("data-visible");
        if (visibility === "false") {
            navBar.setAttribute("data-visible", true);
            toggle.setAttribute("aria-expanded", true);
        }
        else if ( visibility === "true"){
            navBar.setAttribute("data-visible", false);
            toggle.setAttribute("aria-expanded", false);
        }
    }) 
})
const scrollBtn =  document.querySelector('.top-link');
scrollBtn.addEventListener("click", function(){
    document.documentElement.scrollTop = 0;
});