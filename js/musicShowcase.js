const container = document.querySelector("#artists-section");
const vinylPhotoContainer = document.querySelector("#photo-selection");
const photoUpload = document.getElementById("photoUpload");
const vinylPhoto = document.querySelector(".vinyl-artwork");



const artists = [

    {
        name: "The Weeknd",
        backgroundImg: "weeknd_bg.jpg",
        description: 
        "The Weeknd has been the epicentre of my music taste since I can remember. I started listening to him about 10 years ago and have never looked back. In my opinion, he is the greatest artist in modern music. His music has shaped me as a person and influenced a lot of my personality traits growing up. No matter how many times I listen to any of his tracks, it always feels like it’s the first time. His music is simply timeless.  The way he blends different genres to create his sound is one of the things that stood out to me early on. His music around the time I discovered him introduced me to alternative R&B and dark electronic music. I love how he reflects on his personal battles in a lot of his work, and that resonates deeply with me. Abel Tesfaye will always be my number one artist for as long as I can imagine. I truly believe that if it weren’t for his music, I would’ve been a completely different person today."
      ,
        video: "heartless.mp4",
        id: "the-weeknd",
        spotifyLink: "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ?si=pFc5ybANR9OwquJS9fKZQA",
        appleLink:"https://music.apple.com/us/artist/the-weeknd/479756766"
    },

    {
        name: "Daft Punk",
        backgroundImg: "punk-bg.jpg",
        description: "If you happen to mention Daft Punk around me, prepare to hear me nerd out about them for hours. They are honestly close contenders for my favourite artist(s) of all time. I discovered them through The Weeknd when they collaborated on the smash hit Starboy, and ever since then, I’ve been hooked. They are a huge part of the reason why I love electronic music so much.Dubbed as some of the most influential artists in electronic dance music history, Daft Punk completely changed the way I view music. Discovery and Random Access Memories are two of the greatest albums I’ve ever listened to, and no matter how many times I revisit them, they always sound fresh and innovative. What I admire most about them is their willingness to push the boundaries of what music can be. They never seemed interested in following trends or conforming to rules. Instead, they created their own path and inspired countless artists in the process. And besides, who doesn’t like robots?",
        video: "daft.mp4",
        id: "daft-punk",
        spotifyLink:"https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi?si=FrkjMmG-Q4O50r1AbEhSYg",
        appleLink:"https://music.apple.com/us/artist/daft-punk/5468295"
    },

    {
        name: "xxxtentacion",
        backgroundImg: "x-bg.jpg",
        description: "I think everyone can relate when I say that if you were alive and old enough during the late 2010s, there's a good chance you've heard an X song before. I discovered him around the same time he began gaining major popularity. In my opinion, he was one of the best examples of pure artistic creativity in modern music. To this day, I have yet to see another artist replicate the unique quality and style that he brought to his work. His music explored deeply personal topics such as depression, anxiety, and the trauma he experienced growing up. X's music always felt like a sort of sanctuary, a place where you never felt completely alone. There was something comforting about knowing that someone else out there understood and shared those same emotions. It's unfortunate that much of the modern internet has changed its view of his legacy. What many people don't understand is that an artist can't continue to evolve when they're no longer here. Songs like <em>Vice City</em> and <em>let's pretend we're numb</em> remain some of the rawest and most emotionally honest pieces of music I've ever heard. His album <em>17</em> is also a defining album for me and one that I still revisit today. You'll always be missed Jahseh.",
        video: "moonlight.mp4",
        id: "jahseh",
        spotifyLink:"https://open.spotify.com/artist/15UsOTVnJzReFVN1VCnxy4?si=f3FlI-ZeRgyxWZoCF87_eg",
        appleLink:"https://music.apple.com/us/artist/xxxtentacion/1082533559"
    },

    {
        name: "Tame Impala",
        backgroundImg: "impala-bg.jpg",
        description: "Tame Impala <em>(Kevin Parker)</em> is one of those artists where the moment you hear the production on a song, you instantly recognize that it's him. He is easily my go-to artist and the driving force behind my interest in alternative music. One of the reasons I love his work so much is because of the strong electronic influences woven throughout it. His music often features rich synthesizers and lush soundscapes that create a feeling unlike anything else I listen to. I became heavily invested in his music around early 2021 and was amazed by the indescribable emotions it made me feel. Even today, I still feel the same way. There's a certain intimacy in his music that I find difficult to explain. It often feels as though it's just you and him when you're listening. His songs have a way of transporting me to another world, which is why I believe they are truly timeless. Tame Impala's discography dates back many years, so it's always exciting discovering lesser-known tracks and side projects that he's worked on.<em>Breathe Deeper</em> is one of my favourite songs of all time, and I genuinely believe it is pure art condensed into six minutes. The way it immerses you in its atmosphere is something I never get tired of hearing. Tame Impala is truly a living legend.",
        video: "performance.mp4",
        id: "tame-impala",
        spotifyLink:"https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb?si=34Z779elR9OAVbM5MHQr4Q",
        appleLink:"https://music.apple.com/us/artist/tame-impala/290242959"

    },


    {
        name: "Twenty One Pilots",
        backgroundImg: "pilots-bg.jpg",
        description: "Twenty One Pilots are the artists I go to when I want to feel alive. Their music feels like a jolt of energy that can carry you through an entire day. Alongside Tame Impala, they are one of the biggest influences on my alternative music taste. However unlike Tame Impala, they lean much more heavily into rock influences. I don't quite know how to explain it, but there is a sort of carefree feeling I get whenever I listen to their music. Just pure rebellion and childlike freedom. Every time I put on one of their songs, it makes me want to go on some random adventure. Their music can feel like sticking your head out of a moving car and letting the wind rush against your face, while other times it feels like ice-cold water hitting you first thing in the morning. That's the beauty of Twenty One Pilots: you never really know what you're going to get, but you do know that your emotions are about to be turned up to eleven. Their music is energetic and endlessly memorable. My standout tracks by them are easily <em>Chlorine</em>, <em>Midwest Indigo</em>, and <em>Ride</em>. They are without a doubt my all-time favourite band.",
        video: "indigo.mp4",
        id: "twenty-one-pilots",
        spotifyLink:"https://open.spotify.com/artist/3YQKmKGau1PzlVlkL1iodx?si=c4ad2527ff474c4a",
        appleLink:"https://music.apple.com/us/artist/twenty-one-pilots/349736311"
    },


]

const photos = [
    "hut",
    "luvtape",
    "nerd",
    "planether",
    "lnd",
    

]

photos.forEach((photo)=>{

    const image = document.createElement("div");

    image.innerHTML =
    `<img src="../images/Music/Albums/${photo}.jpg" alt="Selectable image for vinyl artwork on the welcoming section">`;

    vinylPhotoContainer.appendChild(image);

    image.addEventListener('click',(event)=>{

        vinylPhoto.innerHTML =
        `
        <img src="../images/Music/Albums/${photo}.jpg">
        `

    })

    
})


artists.forEach((artist)=>{

const card = document.createElement("div");

card.innerHTML =
`   
    
    <h1 class="artist-name">${artist.name}</h1>
    <div class="artist-content">
    <video autoplay muted loop src="../images/Music/Videos/${artist.video}" alt="Music Video for ${artist.name}"></video>
    <p>${artist.description}</p>
    </div>

    <div class="streaming-platforms">
    <img src="../images/spotify.png" class="spotify-btn" alt="Spotify redirect that opens artist's page on the platform">
    <img src="../images/apple.png" class="apple-btn" alt="Apple Music redirect button that opens artist's page on the platform">
    </div>
`;

card.style.setProperty
(
    "--bg-image",
    `url("../images/Music/Backgrounds/${artist.backgroundImg}")`
);


const spotifyBtn = card.querySelector(".spotify-btn");
const appleBtn = card.querySelector(".apple-btn");

spotifyBtn.addEventListener("click", (event)=>{

        window.open(`${artist.spotifyLink}`, '_blank')
    });


    appleBtn.addEventListener("click", (event)=>{

        window.open(`${artist.appleLink}`, '_blank')
    });

card.classList.add("artist");
card.setAttribute("id",`${artist.id}`);


container.appendChild(card);

})





photoUpload.addEventListener("change", (event) => {

    const file = event.target.files[0];

    if (!file) return;

    const imageURL = URL.createObjectURL(file);

    vinylPhoto.innerHTML = `
        <img src="${imageURL}" alt="User uploaded image">
    `;
});


document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thanks for your suggestion!");
});