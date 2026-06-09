const albumCardContainer = document.querySelector(".album-card-container");

const albums = [

    {
        name: "After Hours",
        artist: "The Weeknd",
        year: "2020",
        paragraph: "After Hours is, without a doubt, my favourite album of all time. It feels like the definition of a perfect album in my opinion, and I see it as The Weeknd’s magnum opus. It came out at a really important point in my life, and it ended up sticking with me in a way few albums ever have. The storytelling, dark themes, and overall musicality are otherworldly. Every track feels like it belongs exactly where it is, building this emotional and cinematic experience. I always find myself going back to it — and there’s a very high chance I’m listening to it right now while you’re reading this.",
        cover: "after-hours.jpg",
        floatColor: "#8A9E75"
    },


    {
        name: "Random Access Memories",
        artist: "Daft Punk",
        year: "2013",
        paragraph: "Random Access Memories feels like pure art in its simplest form. It’s an album that completely takes you out of your surroundings and puts you somewhere else for its entire runtime. It played a huge role in getting me to appreciate electronic music on a deeper level, beyond just beats and synths. Everything about it feels intentional and carefully crafted. “Get Lucky” alone is one of the best songs ever made in my opinion, but the whole album carries that same timeless energy.",
        cover: "ram.jpg",
        floatColor: "#615F5F"
    },

    {
        name: "17",
        artist: "XXXTENTACION",
        year: "2017",
        paragraph: "17 is pure raw emotion from start to finish. It’s my favourite work from the artist, and it’s something I always come back to when things get heavy emotionally. There’s something very honest and unfiltered about it that makes it hit differently compared to a lot of music. Even now, I still haven’t heard many projects that capture that same level of vulnerability and musicality in the same way.",
        cover:"17.jpg",
        floatColor:"#B0B0B0"
        
    },

    {
        name: "Currents",
        artist: "Tame Impala",
        year: "2015",
        paragraph: "Currents is peak alternative electronic for me. It’s another album that helped me understand electronic music as something more than just synthesizers and production tricks — it’s emotional storytelling through sound. The compositions are incredibly well thought out, and it has this flowing, dream-like quality that makes it easy to get lost in. It’s one of those albums that feels like it moves you somewhere else mentally while you listen.",
        cover:"currents.jpg",
        floatColor:"#C56BE3"
    },

    {
        name: "Starboy",
        artist: "The Weeknd",
        year: "2016",
        paragraph: "Starboy is the album that really started it all for me. It’s what fully locked in my appreciation for The Weeknd and his sound. As a pop album, it feels almost flawless in how many standout tracks it has back-to-back. It also has one of my favourite album intros of all time, setting the tone immediately and pulling you into its world. It still feels like a classic every time I revisit it.",
        cover:"starboy.jpg",
        floatColor:"#F21B33"
    },

    {
        name: "Discovery",
        artist: "Daft Punk",
        year: "2001",
        paragraph: "Discovery is widely regarded as one of the most perfect albums ever made, and I completely understand why. It feels like a love letter to electronic music as a whole, capturing so many different emotions and ideas within a single project. Even though it’s over 20 years old, it still sounds incredibly fresh and ahead of its time. There’s a timelessness to it that very few albums ever achieve.",
        cover:"discovery.jpg",
        floatColor:"#220F33"
    },

    {
        name: "SOUR",
        artist: "Olivia Rodrigo",
        year: "2021",
        paragraph: "SOUR is such a powerful coming-of-age album. I feel like I listened to it at exactly the right time in my life for it to really land emotionally. It captures teenage feelings, confusion, heartbreak, and growth in a very honest way. It was constantly on repeat when it came out, and it’s still an album I go back to when I want that specific emotional feeling.",
        cover:"sour.jpg",
        floatColor:"#8681BD"
    },

    {
        name: "DAMN",
        artist: "Kendrick Lamar",
        year: "2017",
        paragraph: "DAMN. fully pulled me into Kendrick Lamar’s world-building as an artist. The way the album is structured makes it feel immersive, like you’re being guided through different perspectives and emotional states. Some of the songs on here are genuinely some of the most beautiful and impactful pieces of music I’ve ever heard. To me, it stands as a perfect rap album in terms of execution and depth.",
        cover:"damn.jpg",
        floatColor:"#8A062F"
    },

    {
        name: "Blurryface",
        artist: "Twenty One Pilots",
        year: "2015",
        paragraph: "Blurryface is a childhood classic for me. It’s packed with so many tracks that feel instantly recognizable and energetic. Revisiting it later on was also interesting because I discovered songs I didn’t even know I had missed the first time around. It carries a lot of nostalgia, but it still holds up really well musically.",
        cover:"blurryface.jpg",
        floatColor:"#120406"
    },

    {
        name: "BRAT",
        artist: "Charli xcx",
        year: "2024",
        paragraph: "BRAT is my personal pick for the best album of 2024. At a time when I felt like music was starting to feel a bit repetitive, this album completely changed that. It has this bold, chaotic, club-driven energy that feels fresh and experimental. The production is insane, and it really helped push that hyperpop-adjacent sound further into the spotlight. It’s a proper dance album classic.",
        cover:"brat.jpg",
        floatColor:"#80E620"
    },


    {
        name: "Who Really Cares",
        artist: "TV Girl",
        year: "2016",
        paragraph: "Who Really Cares is one of my gateway albums into alternative music. The production has this hazy, dreamy quality that just scratches my brain in the best way. It feels like it floats while you listen to it, almost like it lifts you out of reality a bit. There’s something really addictive about its sound and atmosphere that keeps pulling me back.",
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