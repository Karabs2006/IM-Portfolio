const games = [

    {   
        id: 2,
        name: "Red Dead Redemption 2",
        year: "2018",
        rating: "10",
        paragraph: "",
        image:"rdr2_cover.jpg"
    },

    {   
        id: 3,
        name: "The Walking Dead: Season Two",
        year: "2013",
        rating: "10",
        paragraph: " ",
        image: "twd2_cover.jpg"
    },

    {   
        id: 4,
        name: "Gears of War 2",
        year: "2008",
        rating: "10",
        paragraph: "",
        image: "gow2_cover.jpg"
    },

    {   
        id: 5,
        name: "Forza Horizon 5",
        year: "2021",
        rating: "10",
        paragraph: "",
        image: "fh5_cover.jpg"
    },

    {   
        id: 6,
        name: "Cyberpunk 2077",
        year: "2020",
        rating: "10",
        paragraph: " ",
        image: "cyberpunk_cover.jpg"
    },

    {   
        id: 7,
        name: "The Last of Us Part I",
        year: "2022",
        rating: "10",
        paragraph: "",
        image: "tlou_cover.jpg"
    },
    

    {   
        id: 8,
        name: "Batman: Arkham Origins",
        year: "2013",
        rating: "10",
        paragraph: "",
        image: "arkham_cover.jpg"
    },


]


const container = document.querySelector(".games-container");

const gameCards = games.forEach((game)=>{
    
    const card = document.createElement("div");
    card.classList.add("game-card");

    card.innerHTML +=
    `
    <img src="../images/Hobbies/Covers/${game.image}" class="game-img">

                    <div class="shape">
                        <p><strong>${game.id}</strong></p>
                    </div>

                    <div class="game-info">
                        <h2>${game.name}</h2>
                        <p class="year"><em>${game.year}</em></p>
                        <p class="rating"><strong>Rating:</strong> ${game.rating} / 10</p>
                        <p>${game.paragraph}</p>
                    </div>
    `

    container.appendChild(card);

})
