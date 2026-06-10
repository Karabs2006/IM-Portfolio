const games = [

    {   
        id: 2,
        name: "Red Dead Redemption 2",
        year: "2018",
        rating: "10",
        paragraph: "Red Dead Redemption 2 is an insanely detailed open-world experience that really showed me there is no limit to what a video game can achieve. Its world feels alive in every possible way, from the smallest environmental detail to the depth of its characters. The story is beautifully crafted and emotional, and it’s a game I always find myself coming back to no matter how much time passes.",
        image:"rdr2_cover.jpg",
        
    },

    {   
        id: 3,
        name: "The Walking Dead: Season Two",
        year: "2013",
        rating: "10",
        paragraph: "This game cemented Clementine as my favourite female protagonist in gaming. It takes everything the first game built and refines it into a more emotional and impactful journey. The story focuses heavily on growth, survival, and belonging, and it stands out as one of the few games I truly enjoyed despite its minimal traditional gameplay elements. ",
        image: "twd2_cover.jpg"
    },

    {   
        id: 4,
        name: "Gears of War 2",
        year: "2008",
        rating: "10",
        paragraph: "Gears of War 2 took everything great about the first game and perfected it. Beyond the gameplay, it carries a strong emotional connection for me, especially through the story of Marcus and Dom, which reflects the bond I share with my own brother. It remains peak Gears in my eyes and is a game tied deeply to personal memories.",
        image: "gow2_cover.jpg"
    },

    {   
        id: 5,
        name: "Forza Horizon 5",
        year: "2021",
        rating: "10",
        paragraph: "orza Horizon 5 offers stunning worldbuilding paired with incredibly addictive gameplay. The vibrant environments and sense of freedom make exploring the world feel constantly rewarding. It also sparked a much deeper interest in cars for me, far more than I had before experiencing it.",
        image: "fh5_cover.jpg"
    },

    {   
        id: 6,
        name: "Cyberpunk 2077",
        year: "2020",
        rating: "10",
        paragraph: "Cyberpunk 2077 stands out for its atmosphere and setting, which perfectly align with my interest in cyber aesthetics and technology. Despite its rocky launch, the game delivers an amazing RPG experience with strong storytelling, memorable characters, and hours of engaging gameplay that makes Night City feel endless.",
        image: "cyberpunk_cover.jpg"
    },

    {   
        id: 7,
        name: "The Last of Us Part I",
        year: "2022",
        rating: "10",
        paragraph: "The Last of Us Part I is one of the games that truly made me appreciate video games as an art form. The story is among the best I’ve experienced, especially the father-daughter dynamic between Joel and Ellie. Combined with incredible graphics and worldbuilding, it delivers a deeply emotional and unforgettable journey.",
        image: "tlou_cover.jpg"
    },
    

    {   
        id: 8,
        name: "Batman: Arkham Origins",
        year: "2013",
        rating: "10",
        paragraph: "Batman: Arkham Origins is often overlooked in the Arkham series, but it’s actually the one I’ve replayed the most. I enjoyed seeing a younger, less refined Batman still developing into the character we know. The gameplay is fun, the visuals were strong for its time, and it remains a personal favourite in the series.",
        image: "arkham_cover.jpg"
    },


]


const container = document.querySelector(".games-container");

const gameCards = games.forEach((game)=>{
    
    const card = document.createElement("div");
    card.classList.add("game-card");

    card.innerHTML +=
    `
    <img src="../images/Hobbies/Covers/${game.image}" class="game-img" alt="Game Card for ${game.name} which is number ${game.id} in the list">

                    <div class="shape">
                        <p><strong>${game.id}</strong></p>
                    </div>

                    <div class="game-info">
                        <h2>${game.name}</h2>
                        <p class="year"><em>${game.year}</em></p>
                        <p class="rating"><strong>Rating:</strong> ${game.rating} / 10</p>
                        <br>
                        <p>${game.paragraph}</p>
                    </div>
    `

    container.appendChild(card);

})
