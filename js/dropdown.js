const projects = [
    {
        heading: "Comics",
        projectClassId: "Two",
        buttonId: "btn-two",
        containerId:"container-two",
        subHeading: "Vegetables",
        images: ["Comic_Project_1.png","Comic_Project_2.png"],
        paragraph: "In first year, I spent a lot of my time drawing comic books for my studies. I used to draw a lot of comics growing up and this felt like second nature when I had to do it for marks."
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