
const pages = [

    {   path: "skills.gif", 
        name: "Skills", 
        paragraph: "Check out some of my skills. I have quite the nack for front-end and video game development",
        location: "skills.html"
    },

    {   path: "hobbies.gif", 
        name: "Hobbies", 
        paragraph: "Take a look at some of the things I enjoy doing when I’m not locked into work or studying. You might even pick up some of these hobbies yourself",
        location: "hobbies.html"
    },

    {   path: "music.gif", 
        name: "Music", 
        paragraph: "From synthy electronic scores to hardcore rock anthems, all types of music are welcome here. Check out some my favourite artists, genres and songs that are permanently stuck in my rotation.",
        location: "music.html"
    }
]

const container = document.querySelector(".about-container");

const renderCards = pages.forEach(page =>{

   container.innerHTML += 
   `<div class="about-card">
    <img src="./images/${page.path}" class="about-image">
    <button type="button" class="about-button" data-location="${page.location}">${page.name}</button>
    <p class="about-paragraph">${page.paragraph}</p>

    `
})


document.querySelectorAll(".about-button").forEach(button => {

    button.addEventListener("click", () => {
        window.open(`./Html/${button.dataset.location}`, "_blank");
    });
});


document.querySelector(".back-button").addEventListener("click", (event)=>{

    window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
})


const menuButton = document.querySelector(".ham-menu");
const hamMenu = document.querySelector(".off-screen-menu");
const closeMenu = document.querySelector(".close-menu-btn");

menuButton.addEventListener("click", (event)=>{

    hamMenu.classList.toggle("active")
     console.log("clicked");
})


closeMenu.addEventListener("click", (event)=>{

    hamMenu.classList.toggle("active")
})