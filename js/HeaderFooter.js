const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML=

`
<div class="off-screen-menu">

        <div class="close-menu-btn">
           <img src="../images/close.png" alt="Button to close burger menu">
        </div>

        <ul>
            <li><a href="./index.html" class="nav-link">Home</a></li>
            <li><a href="./projects.html" class="nav-link">Projects</a></li>
            <li><a href="./skills.html" class="nav-link">Skills</a></li>
            <li><a href="./hobbies.html" class="nav-link">Hobbies</a></li>
            <li><a href="./music.html" class="nav-link">Music</a></li>
        </ul>


    </div>

    <nav >
        <div class="ham-menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
       
    </nav>

    <nav class="static-nav">
        <img src="../images/logo.jpg.png" alt="logo image" class="logo-img">
        <ul class="nav-list">
            <li><a href="./index.html" class="nav-link">Home</a></li>
            <li><a href="./projects.html" class="nav-link">Projects</a></li>
            <li><a href="./skills.html" class="nav-link">Skills</a></li>
            <li><a href="./hobbies.html" class="nav-link">Hobbies</a></li>
            <li><a href="./music.html" class="nav-link">Music</a></li>
        </ul>
    </nav>
    `

    footer.innerHTML =
    `
    <section class="contact-details">
        <h1>Contact</h1>
        <h2>Cell No.</h2>
        <p>0744695264</p>
        <br>
        <h2>Email Address</h2>
        <p>karabompati24@gmail.com</p>
    </section>
    <section class="social-links">
        <h1>Social Links</h1>
        <ul>
            <li><a href="https://www.instagram.com/k4ybeee_?igsh=MXZ1bHhzYnp4dDliZA%3D%3D&utm_source=qr" target="_blank"><img src="../images/instagram.png">Instagram</a></li>
            <li><a href="https://github.com/Karabs2006" target="_blank"><img src="../images/github.png">GitHub</a></li>
            <li><a href="https://www.codecademy.com/profiles/kayy_" target="_blank"><img src="../images/codecademy.png">Codecademy</a></li>
            <li class="xbox-tag"><img src="../images/xbox.png">KayyDucksworth</li>

        </ul>
        
    </section>
    <button type="button" class="back-button" data-location="#index-hero-section">Back to top</button>
    `

    document.querySelector(".back-button").addEventListener("click", (event)=>{

    window.scrollTo({
    top: 0,
    behavior: 'smooth'
});




})


const logo = document.querySelector(".logo-img")
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

logo.addEventListener("click",(event)=>
{
    window.open("./index.html", "_self")
})