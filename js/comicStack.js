const stack = document.querySelector(".comic-stack");
const info = document.querySelector(".comic-info");


const comics = [

    {
        name: "Batman (2016)",
        author: "Tom King and David Finch",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image:"batman_comic.jpg"
    },

    {
        name: "Hack/Slash: The Series",
        author: "Tim Seely",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image:"hackslash_comic_alt.jpg"
    },

    {
        name: "The Dark Knight Returns",
        author: "Frank Miller",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image:"dark_knight_comic.jpg"
    },

    {
        name: "Batman: Year One",
        author: "Frank Miller",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image:"batman_Y1_comic.jpg"
    },

    {
        name: "Injustice: Gods Among Us",
        author: "Tom Taylor",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image:"injustice_comic.jpg"
    },

    
    {
        name: "Batgirl (2016)",
        author: "Hope Larson",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image:"batgirl.jpeg"
    },


]

let int = 0;

const nextBtn = document.querySelector(".next-comic-btn");

const imageList = comics.filter((comic) => comic.image);

let secondImgInt = 1;
let thirdImgInt = 2;

nextBtn.addEventListener("click", ()=>{

    int = (int + 1) % comics.length;
    secondImgInt = (secondImgInt + 1) % comics.length;
    thirdImgInt = (thirdImgInt + 1) % comics.length;

    stack.innerHTML =
    `

        <img src="../images/Comics/${comics[int].image}">
        <img src="../images/Comics/${comics[secondImgInt].image}">
        <img src="../images/Comics/${comics[thirdImgInt].image}">

    `;


    info.innerHTML = 
    `
        <h1>${comics[int].name}</h1>
        <p class="author"><em>written by ${comics[int].author}</em></p>
        <p class="description">${comics[int].description}</p>

    `
    
})