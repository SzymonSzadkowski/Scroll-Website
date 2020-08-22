// sidemenu

var menu = document.querySelector(".nav-menu");
var nav_container = document.querySelector(".nav-container");
var bars_btn = document.querySelector(".bars");
var close_btn = document.querySelector(".menu-exit");

bars_btn.addEventListener("click", () =>{
    menu.classList.toggle("toggle-menu");
});

// dynamic date

var date = document.getElementById("date");
date.textContent = new Date().getFullYear();

// fixed navbar
var top_btn = document.querySelector(".top");
var nav_height = nav_container.getBoundingClientRect().height;

window.addEventListener("scroll", () =>{
    var page_height = window.pageYOffset;
    var nav_height = nav_container.getBoundingClientRect().height;
    if (page_height > nav_height){
        nav_container.style.backgroundColor = "rgba(245, 245, 245, 0.9)";
        nav_container.style.boxShadow = "1px 1px 5px 1px rgba(128, 128, 128, 0.5)";
    }
    else{
        nav_container.style.backgroundColor = "transparent";
        nav_container.style.boxShadow = "none";
    };
    if(page_height < 500){
        top_btn.classList.add("top-hidden");
    }
    else{
        top_btn.classList.remove("top-hidden");
    }
});


// scroll repair

var scroll_links = document.querySelectorAll(".scroll-link");

scroll_links.forEach((link) => {
    link.addEventListener("click", (event) =>{
        event.preventDefault();
        var event_id = event.currentTarget.getAttribute("href").slice(1);
        var element = document.getElementById(event_id);
        let position = element.offsetTop - nav_height;
        window.scrollTo({
            left: 0,
            top: position,
        });
        // make manu disappear after selecting a section to go to
        menu.classList.toggle("toggle-menu");
    });
});
