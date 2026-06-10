const stack = document.querySelector(".comic-stack");
const info = document.querySelector(".comic-info");


const comics = [

    {
        name: "Batman (2016)",
        author: "Tom King and David Finch",
        description: "Batman (2016) follows Bruce Wayne as he continues his fight against crime in Gotham while dealing with both familiar and new threats. The series explores Batman balancing his role as a symbol of fear for criminals with his growing relationships and responsibilities within Gotham. It focuses heavily on detective work, action, and character-driven storytelling, showing how Batman constantly adapts to an ever-evolving city.",
        image:"batman_comic.jpg"
    },

    {
        name: "Hack/Slash: The Series",
        author: "Tim Seely",
        description: "Hack/Slash follows Cassie Hack, a young woman who hunts down “slashers” — undead or supernatural killers inspired by horror movie villains. After surviving a traumatic childhood involving her own mother becoming a slasher, she teams up with Vlad, a mysterious and powerful ally, to travel across the country eliminating these monsters. The series mixes horror, dark humour, and over-the-top violence with a surprisingly emotional core about trauma and survival.",
        image:"hackslash_comic_alt.jpg"
    },

    {
        name: "The Dark Knight Returns",
        author: "Frank Miller",
        description: "The Dark Knight Returns is set in a dystopian future where an older Bruce Wayne comes out of retirement as crime overwhelms Gotham once again. The story follows his return as Batman, now more violent and uncompromising, and his clashes with both criminals and the government — including a final confrontation with Superman. It’s a darker, more extreme look at what Batman becomes when pushed beyond his limits.",
        image:"dark_knight_comic.jpg"
    },

    {
        name: "Batman: Year One",
        author: "Frank Miller",
        description: "Batman: Year One retells Bruce Wayne’s first year as Batman, alongside James Gordon’s early days in Gotham City. Both characters are trying to survive and do the right thing in a corrupt city that fights back at every turn. The story focuses on Bruce’s early mistakes, his learning process, and the gradual formation of Batman as a symbol, while Gordon navigates a corrupt police force and dangerous criminals.",
        image:"batman_Y1_comic.jpg"
    },

    {
        name: "Injustice: Gods Among Us",
        author: "Tom Taylor",
        description: "Injustice begins with the Joker tricking Superman into killing Lois Lane and destroying Metropolis, which pushes Superman over the edge. Grief-stricken, he decides to impose global peace through force, turning into a dictator and splitting the superhero community into two sides: those who support him and those who oppose him, led by Batman. The story explores how far heroes can fall and the moral collapse that comes when justice is enforced without limits.",
        image:"injustice_comic.jpg"
    },

    
    {
        name: "Batgirl (2016)",
        author: "Hope Larson",
        description: "Batgirl (2016) follows Barbara Gordon as she moves to Burnside, trying to rebuild her life while continuing her role as Batgirl. The series blends superhero action with slice-of-life storytelling, showing her balancing friendships, studies, and crime-fighting. Things take a darker turn as she becomes entangled with a digital hacking threat that pushes her skills and identity as Batgirl to the limit, forcing her to confront both external dangers and personal challenges.",
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

        <img src="../images/Comics/${comics[int].image}" alt="Comic Book Cover for ${comics[int].name}">
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