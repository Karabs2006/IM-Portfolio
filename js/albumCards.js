const albumCardContainer = document.querySelector(".album-card-container");

const albums = [

    {
        name: "After Hours",
        artist: "The Weeknd",
        year: "2020",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        cover: "after-hours.jpg",
        floatColor: "#8A9E75"
    },


    {
        name: "Random Access Memories",
        artist: "Daft Punk",
        year: "2013",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        cover: "ram.jpg",
        floatColor: "#615F5F"
    },

    {
        name: "17",
        artist: "XXXTENTACION",
        year: "2017",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        cover:"17.jpg",
        floatColor:"#B0B0B0"
        
    },

    {
        name: "Currents",
        artist: "Tame Impala",
        year: "2015",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        cover:"currents.jpg",
        floatColor:"#C56BE3"
    },

    {
        name: "Starboy",
        artist: "The Weeknd",
        year: "2016",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        cover:"starboy.jpg",
        floatColor:"#F21B33"
    },

    {
        name: "Discovery",
        artist: "Daft Punk",
        year: "2001",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        cover:"discovery.jpg",
        floatColor:"#220F33"
    },

    {
        name: "SOUR",
        artist: "Olivia Rodrigo",
        year: "2021",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        cover:"sour.jpg",
        floatColor:"#8681BD"
    },

    {
        name: "DAMN",
        artist: "Kendrick Lamar",
        year: "2017",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        cover:"damn.jpg",
        floatColor:"#8A062F"
    },

    {
        name: "Blurryface",
        artist: "Twenty One Pilots",
        year: "2015",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        cover:"blurryface.jpg",
        floatColor:"#120406"
    },

    {
        name: "BRAT",
        artist: "Charli xcx",
        year: "2024",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        cover:"brat.jpg",
        floatColor:"#80E620"
    },


    {
        name: "Who Really Cares",
        artist: "TV Girl",
        year: "2016",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        cover:"wrc.jpg",
        floatColor:"#2B31D4"
    },


]


albums.forEach((album)=>{

const card = document.createElement("div");

card.innerHTML =
`
<img src="../images/Music/Albums/${album.cover}">
<h1>${album.name}</h1>
<p>${album.artist}</p>
<p><em>${album.year}</em></p>
<p>${album.paragraph}</p>

`

card.style.setProperty
(
    "--bg-card-color",
    album.floatColor
);

albumCardContainer.appendChild(card);
card.classList.add("album-card");


})