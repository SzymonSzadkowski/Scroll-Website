// sidemenu

const menu = document.querySelector(".nav-menu");
const nav_container = document.querySelector(".nav-container");
const bars_btn = document.querySelector(".bars");
const close_btn = document.querySelector(".menu-exit");

bars_btn.addEventListener("click", () =>{
    menu.classList.toggle("toggle-menu");
    if (nav_container.style.backgroundColor !== "rgba(245, 245, 245, 0.9)"){
        nav_container.style.backgroundColor = "transparent";
        nav_container.style.boxShadow = "none";
    }
    else if(nav_container.style.backgroundColor === "transparent"){
        nav_container.style.backgroundColor = "rgba(245, 245, 245, 0.9)";
        nav_container.style.boxShadow = "1px 1px 5px 1px rgba(128, 128, 128, 0.5)"; 
    }
});

// close_btn.addEventListener("click", () =>{
//     menu.classList.remove("toggle-menu");
// });

// dynamic date

const date = document.getElementById("date");
date.textContent = new Date().getFullYear();

// fixed navbar
const top_btn = document.querySelector(".top");

window.addEventListener("scroll", () =>{
    const page_height = window.pageYOffset;
    const nav_height = nav_container.getBoundingClientRect().height;
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

const scroll_links = document.querySelectorAll(".scroll_link");

scroll_links.forEach(link => {
    link.addEventListener("click", (e) =>{
        console.log(position);
        e.preventDefault();
        const e_id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(e_id);
        let position = element.offsetTop;
        window.scrollTo({
            left: 0,
            top: position + 100,
        });
    });
});