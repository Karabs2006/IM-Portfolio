const projects = [
    {
        heading: "Comics",
        projectClassId: "Two",
        buttonId: "btn-two",
        containerId:"container-two",
        subHeading: "Vegetables",
        images: ["Comic_Project_1.png","Comic_Project_2.png"],
        paragraph: "During my first year of studies, I spent a significant amount of time creating comic books as part of my coursework. Having grown up drawing comics for fun, working on them academically felt almost like second nature. One of my favourite projects was a comic about a group of sentient vegetables that decide to rebel against humanity. What begins as a humorous and absurd premise gradually evolves into a larger mystery involving a secret scientific operation being run behind the scenes by the store where the vegetables originated. As the vegetables uncover the truth about their existence, the story develops into a mix of comedy, action, and mystery. This project allowed me to combine storytelling, character design, and visual composition while creating something that was both entertaining and imaginative. It remains one of the projects I enjoyed working on the most because it gave me the freedom to explore a strange concept and turn it into a full narrative."
    },
]
const projectsSection = document.querySelector(".projects-content");
const buttonOne = document.querySelector("#btn-one");
const container = document.querySelector(".container-one");

container.classList.add("show");

buttonOne.addEventListener("click", (event)=>{

    container.classList.toggle("hide");
})

function toggleHide(item){

    const button = document.querySelector(`#${item.buttonId}`);
    const container = document.querySelector(`#${item.containerId}`);

    container.classList.add("show");

    button.addEventListener("click", () => {
        container.classList.toggle("hide");
    });
}


function gallery(projectImages){
    
    let imagesHTML = "";

    projectImages.forEach((image) => {
        imagesHTML += `<img src="../images/${image}">`;
    });

    return imagesHTML;
}

const createCards = projects.forEach((project)=>{

    const card = document.createElement("div");
    
    card.innerHTML += 
    ` <section class="project-section-${project.projectClassId}">
            <h1 class="main-heading">
                <button type="button" class="dropdown-btn" id="${project.buttonId}" ><img src="../images/arrow.png"></button>
                ${project.heading}
            </h1>

            <div id=${project.containerId} class="hide">
                <div class="project-one">
                    <h1 class="sub-heading">${project.subHeading}</h1>

                    <div class="dropdown-gallery">
                        ${gallery(project.images)}
                    </div>

                    <p class="dropdown-paragraph"> ${project.paragraph}</p>
                </div>

    `

    projectsSection.appendChild(card);

    toggleHide(project);

})