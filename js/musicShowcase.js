const container = document.querySelector("#artists-section");

const artists = [

    {
        name: "The Weeknd",
        backgroundImg: "weeknd_bg.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        video: "heartless.mp4",
        id: "the-weeknd"
    },

    {
        name: "Daft Punk",
        backgroundImg: "punk-bg.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        video: "daft.mp4",
        id: "daft-punk"
    },

    {
        name: "xxxtentacion",
        backgroundImg: "x-bg.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        video: "moonlight.mp4",
        id: "jahseh"
    },

    {
        name: "Tame Impala",
        backgroundImg: "impala-bg.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        video: "performance.mp4",
        id: "tame-impala"

    },


    {
        name: "Twenty One Pilots",
        backgroundImg: "pilots-bg.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        video: "indigo.mp4",
        id: "twenty-one-pilots"
    },


]


artists.forEach((artist)=>{

const card = document.createElement("div");

card.innerHTML =
`   
    
    <h1 class="artist-name">${artist.name}</h1>
    <video autoplay muted loop src="../images/Music/Videos/${artist.video}"></video>
    <p>${artist.description}</p>

`

card.style.setProperty
(
    "--bg-image",
    `url("../images/Music/Backgrounds/${artist.backgroundImg}")`
);

card.classList.add("artist");
card.setAttribute("id",`${artist.id}`);


container.appendChild(card);

})