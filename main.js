document.addEventListener("DOMContentLoaded", () => {
    // pages
    const homePage = document.querySelector("#home");
    const resumePage = document.querySelector("#resume");
    const projectPage = document.querySelector("#project");
    const contactPage = document.querySelector("#contact");
    
    // Home link javascript
    document.querySelector("#home__link").addEventListener("click", e => {
        e.preventDefault();
        homePage.classList.remove("page--hidden");
        resumePage.classList.add("page--hidden");
        projectPage.classList.add("page--hidden");
        contactPage.classList.add("page--hidden");
    });

    // resume link javascript
    document.querySelector("#resume__link").addEventListener("click", e => {
        e.preventDefault();
        homePage.classList.add("page--hidden");
        resumePage.classList.remove("page--hidden");
        projectPage.classList.add("page--hidden");
        contactPage.classList.add("page--hidden");
    });
    // resume link javascript in the body
    document.querySelector("#resume__link2").addEventListener("click", e => {
        e.preventDefault();
        homePage.classList.add("page--hidden");
        resumePage.classList.remove("page--hidden");
        projectPage.classList.add("page--hidden");
        contactPage.classList.add("page--hidden");
    });

    // projects link javascript
    document.querySelector("#projects__link").addEventListener("click", e => {
        e.preventDefault();
        homePage.classList.add("page--hidden");
        resumePage.classList.add("page--hidden");
        projectPage.classList.remove("page--hidden");
        contactPage.classList.add("page--hidden");
    });
    // projects link javascript in the body
    document.querySelector("#projects__link2").addEventListener("click", e => {
        e.preventDefault();
        homePage.classList.add("page--hidden");
        resumePage.classList.add("page--hidden");
        projectPage.classList.remove("page--hidden");
        contactPage.classList.add("page--hidden");
    });

    // contact link javascript
    document.querySelector("#contact__link").addEventListener("click", e => {
        e.preventDefault();
        homePage.classList.add("page--hidden");
        resumePage.classList.add("page--hidden");
        projectPage.classList.add("page--hidden");
        contactPage.classList.remove("page--hidden");
    });
    // contact link javascript in the body 
    document.querySelector("#contact__link2").addEventListener("click", e => {
        e.preventDefault();
        homePage.classList.add("page--hidden");
        resumePage.classList.add("page--hidden");
        projectPage.classList.add("page--hidden");
        contactPage.classList.remove("page--hidden");
    });
    // contact link javascript in the navbar
    document.querySelector("#contact__link3").addEventListener("click", e => {
        e.preventDefault();
        homePage.classList.add("page--hidden");
        resumePage.classList.add("page--hidden");
        projectPage.classList.add("page--hidden");
        contactPage.classList.remove("page--hidden");
    });


    
    // links shading
    const home = document.querySelector("#home__link-shade");
    const resume = document.querySelector("#resume__link-shade");
    const project = document.querySelector("#projects__link-shade");
    const contact = document.querySelector("#contact__link-shade");

    // Home link javascript
    document.querySelector("#home__link-shade").addEventListener("click", e => {
        e.preventDefault();
        home.classList.add("shade-dark");
        resume.classList.remove("shade-dark");
        project.classList.remove("shade-dark");
        contact.classList.remove("shade-dark");
        resume.classList.add("shade");
        project.classList.add("shade");
        contact.classList.add("shade");
    });

    // resume link javascript
    document.querySelector("#resume__link-shade").addEventListener("click", e => {
        e.preventDefault();
        home.classList.remove("shade-dark");
        resume.classList.add("shade-dark");
        project.classList.remove("shade-dark");
        contact.classList.remove("shade-dark");
        home.classList.add("shade");
        project.classList.add("shade");
        contact.classList.add("shade");
    });
    // resume link javascript in the body
    document.querySelector("#resume__link2").addEventListener("click", e => {
        e.preventDefault();
        home.classList.remove("shade-dark");
        resume.classList.add("shade-dark");
        project.classList.remove("shade-dark");
        contact.classList.remove("shade-dark");
        home.classList.add("shade");
        project.classList.add("shade");
        contact.classList.add("shade");
    });

    // project link javascript
    document.querySelector("#projects__link-shade").addEventListener("click", e => {
        e.preventDefault();
        home.classList.remove("shade-dark");
        resume.classList.remove("shade-dark");
        project.classList.add("shade-dark");
        contact.classList.remove("shade-dark");
        home.classList.add("shade");
        resume.classList.add("shade");
        contact.classList.add("shade");
    });
    // project link javascript in the body
    document.querySelector("#projects__link2").addEventListener("click", e => {
        e.preventDefault();
        home.classList.remove("shade-dark");
        resume.classList.remove("shade-dark");
        project.classList.add("shade-dark");
        contact.classList.remove("shade-dark");
        home.classList.add("shade");
        resume.classList.add("shade");
        contact.classList.add("shade");
    });

    // contact link javascript
    document.querySelector("#contact__link-shade").addEventListener("click", e => {
        e.preventDefault();
        home.classList.remove("shade-dark");
        resume.classList.remove("shade-dark");
        project.classList.remove("shade-dark");
        contact.classList.add("shade-dark");
        home.classList.add("shade");
        resume.classList.add("shade");
        project.classList.add("shade");
    });
    // contact link javascript in the body
    document.querySelector("#contact__link2").addEventListener("click", e => {
        e.preventDefault();
        home.classList.remove("shade-dark");
        resume.classList.remove("shade-dark");
        project.classList.remove("shade-dark");
        contact.classList.add("shade-dark");
        home.classList.add("shade");
        resume.classList.add("shade");
        project.classList.add("shade");
    });
    // contact link javascript in the navbar
    document.querySelector("#contact__link3").addEventListener("click", e => {
        e.preventDefault();
        home.classList.remove("shade-dark");
        resume.classList.remove("shade-dark");
        project.classList.remove("shade-dark");
        contact.classList.add("shade-dark");
        home.classList.add("shade");
        resume.classList.add("shade");
        project.classList.add("shade");
    });

    
    
    // project image slideshow
    var slideIndex = 1;
    showSlides(slideIndex);
    
    // Next/previous controls
    function plusSlides(n) {
    showSlides(slideIndex += n);
    }
    
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "block";
    }

    document.querySelector("#left").addEventListener("click", e => {
        e.preventDefault();
        plusSlides(-1);
    });
    document.querySelector("#right").addEventListener("click", e => {
        e.preventDefault();
        plusSlides(1);
    });

    const thankYou = document.querySelector("thankYou");

    document.querySelector("#submit"),addEventListener("click", e => {
        e.preventDefault();
        thankYou.classList.remove("hidden__thankYou");
    })

});