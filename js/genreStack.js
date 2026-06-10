const stack = document.querySelector(".genre-stack");
const info = document.querySelector(".genre-info");


const genres = [

    {
        name: "Electronic",
        description: "Electronic music will always sit at the top for me. I find it genuinely fascinating how much emotion can be communicated with little to no lyrics, just sound, texture, and atmosphere. It also connects closely to my interest in tech and digital creativity, almost like the music itself feels engineered but still deeply human. There’s something powerful about that balance, where machines and emotion overlap in a way that just works.",
        image:"electronic.jpg",
        standouts:"Daft Punk, Gesaffelstein, Justice, Paradis, Crystal Castles"
    },
    {
        name: "House / Dance",
        description: "House music feels almost instinctive to me, like it taps into something natural in how we respond to rhythm. If aliens ever visited Earth, this is honestly one of the first genres I’d want them to hear. There’s something very human and almost intimate about wanting to move, dance, and just exist in a beat. Even though house often reuses samples and loops, it constantly reinvents itself in fresh ways, which is part of what keeps it exciting.",
        image:"house.jpg",
        standouts:"KAYTRANADA, Calvin Harris, Dj Kent, deadmau5, Kaskade, Disclosure"
    },

    {
        name: "Rock",
        description: "Rock music is where I go for raw emotion and release. It feels loud in the best way — like it gives you permission to let everything out. I really enjoy the energy of live instruments and how immediate and physical the sound feels compared to more digital genres. It’s expressive, intense, and often deeply emotional, which makes it stand out whenever I want something that hits harder.",
        image:"rock.jpg",
        standouts:"WILLOW, Twenty One Pilots, Paramore"
    },
    {
        name: "Alternative / Indie",
        description: "Indie and alternative music feels like a space for experimentation and personal expression. There’s no strict rulebook, which makes it feel more free and unpredictable. I like how it often sounds more intimate, like you’re hearing something directly pulled from an artist’s imagination without too much filtering. It can be weird, soft, emotional, or experimental, but it always feels creative in a very personal way.",
        image:"indie.jpg",
        standouts:"TV Girl, Tame Impala, Childish Gambino, Foushee, WILLOW"
    },
    {
        name: "Rap",
        description: "Rap, to me, is basically modern poetry. It’s impressive how much meaning, storytelling, and emotion can be packed into rhythm and flow. The production side is just as important too — some of the most interesting instrumentals I’ve heard come from rap music. The genre is constantly evolving and blending with others, which makes it feel very alive and experimental. It can be personal, political, emotional, or just pure energy depending on the track.",
        image:"rap.jpg",
        standouts:"XXXTENTACION, Juice WRLD, Kendrick Lamar, Future, Lil Uzi Vert, Playboi Carti, Travis Scott"
    },
    {
        name: "Pop",
        description: "Pop music is where a lot of my broader music taste overlaps. I like the way it creates a sense of shared experience — songs that feel instantly familiar or emotionally accessible. While it’s often seen as “mainstream,” pop can also be really experimental or dark when blended with other genres. It has this ability to shift moods quickly, from uplifting and energetic to introspective and emotional, while still feeling cohesive.",
        image:"pop.jpg",
        standouts:"The Weeknd, Post Malone, Doja Cat, Olivia Rodrigo, N.E.R.D, Charli xcx"
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

        <img src="../images/Music/Genres/${genres[int].image}" alt="Cover image for ${genres[int].name} genre">
        <img src="../images/Music/Genres/${genres[secondImgInt].image}">
        <img src="../images/Music/Genres/${genres[thirdImgInt].image}">

    `;


    info.innerHTML = 
    `
        <h1>${genres[int].name}</h1>
        <p class="genre-description">${genres[int].description}</p>
        <br>
        <p class="standout-artists">
        <strong>Standout Artists</strong>
        <br>
        ${genres[int].standouts}</p>

    `
    
})