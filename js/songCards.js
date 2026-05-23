const songs =[

    {
        name: "Starboy",
        artists: "The Weeknd, Daft Punk",
        album: "Starboy",
        year: "2016",
        cover:"starboy.jpg",
        bgColor: "#F21B33"
    },

    {
        name: "Walking On A Dream",
        artists: "Empire Of The Sun",
        album: "Walking On A Dream",
        year: "2016",
        cover:"dream.jpg",
        bgColor: "#F21B33"
    },

     {
        name: "Get Lucky",
        artists: "Daft Punk, Pharell Williams, Nile Rodgers",
        album: "Random Access Memories",
        year: "2013",
        cover:"ram.jpg",
        bgColor: "#F21B33"
    },

    {
        name: "Lost in the Fire",
        artists: "Gesaffelstein, The Weeknd",
        album: "Hyperion",
        year: "2019",
        cover:"hyperion.jpg",
        bgColor: "#F21B33"
    },

    {
        name: "Voyager",
        artists: "Daft Punk",
        album: "Discovery",
        year: "2001",
        cover:"discovery.jpg",
        bgColor: "#F21B33"
    },

    {
        name: "In the Name of Love",
        artists: "Martin Garrix, Bebe Rexha",
        album: "In the Name of Love",
        year: "2016",
        cover:"love.jpg",
        bgColor: "#F21B33"
    },

    
    {
        name: "What Once Was",
        artists: "Her's",
        album: "Songs of Her's",
        year: "2017",
        cover:"hers.jpg",
        bgColor: "#F21B33"
    },

    
    {
        name: "Breathe Deeper",
        artists: "Tame Impala",
        album: "The Slow Rush",
        year: "2020",
        cover:"rush.jpg",
        bgColor: "#F21B33"
    },

    {
        name: "Cigarettes out the Window",
        artists: "TV Girl",
        album: "Who Really Cares",
        year: "2016",
        cover:"wrc.jpg",
        bgColor: "#F21B33"
    },
    
    {
        name: "Stay High - Habits Remix",
        artists: "Tove Lo, Hippie Sabotage",
        album: "Queen Of The Clouds",
        year: "2014",
        cover:"tovelo.jpg",
        bgColor: "#F21B33"
    },

    {
        name: "I Follow Rivers - The Magician Remix",
        artists: "Lykke Li, The Magician",
        album: "I Follow Rivers (The Magician Remix)",
        year: "2011",
        cover:"follow.jpg",
        bgColor: "#F21B33"
    },

    {
        name: "Childs Play",
        artists: "Drake",
        album: "Views",
        year: "2016",
        cover:"views.jpg",
        bgColor: "#F21B33"
    },
    
    {
        name: "Control",
        artists: "Playboi Carti",
        album: "Whole Lotta Red",
        year: "2020",
        cover:"carti.jpg",
        bgColor: "#F21B33"
    },

    {
        name: "Where Are Ü Now",
        artists: "Jack Ü, Skrillex, Diplo, Justin Bieber",
        album: "Skrillex and Diplo present Jack Ü",
        year: "2016",
        cover:"bieber.jpg",
        bgColor: "#F21B33"
    },


    
]

const songCardContainer = document.querySelector(".song-card-container");

songs.forEach((song)=>{

const card = document.createElement("div");

card.innerHTML =
`

<div class="song-cover">
<img src="../images/Music/Albums/${song.cover}">
</div>

<div class="song-info">
<h1>${song.name}</h1>
<p><em>
${song.artists}<br>
${song.album}<br>
${song.year}
</em></p>
</div>
`
card.classList.add("song-card");
songCardContainer.appendChild(card);

card.style.setProperty
(
    "--bg-song-card-color",
    song.bgColor
);



})