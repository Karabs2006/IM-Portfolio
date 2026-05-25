const stack = document.querySelector(".genre-stack");
const info = document.querySelector(".genre-info");


const genres = [

    {
        name: "Electronic",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image:"electronic.jpg"
    },
    {
        name: "House / Dance",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image:"house.jpg"
    },

    {
        name: "Rock",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image:"rock.jpg"
    },
    {
        name: "Indie",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image:"indie.jpg"
    },
    {
        name: "Rap",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image:"rap.jpg"
    },
    {
        name: "Pop",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image:"pop.jpg"
    },


]

let int = 0;

const nextBtn = document.querySelector(".next-genre-btn");

let secondImgInt = 1;
let thirdImgInt = 2;

nextBtn.addEventListener("click", ()=>{

    int = (int + 1) % genres.length;
    secondImgInt = (secondImgInt + 1) % genres.length;
    thirdImgInt = (thirdImgInt + 1) % genres.length;

    stack.innerHTML =
    `

        <img src="../images/Music/Genres/${genres[int].image}">
        <img src="../images/Music/Genres/${genres[secondImgInt].image}">
        <img src="../images/Music/Genres/${genres[thirdImgInt].image}">

    `;


    info.innerHTML = 
    `
        <h1>${genres[int].name}</h1>
        <p class="genre-description">${genres[int].description}</p>

    `
    
})