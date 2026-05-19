const skills = [
    {
        heading: "Web Development",
        skillClassId: "One",
        buttonId: "btn-one",
        containerId: "container-one",
        subHeading: "Vegetables",
        images: ["Comic_Project_1.png", "Comic_Project_2.png"],
        paragraph: "In first year, I spent a lot of my time drawing comic books for my studies."
    },

    {
        heading: "Unity Engine",
        skillClassId: "Two",
        buttonId: "btn-two",
        containerId: "container-two",
        subHeading: "Vegetables",
        images: ["Comic_Project_1.png", "Comic_Project_2.png"],
        paragraph: "In first year, I spent a lot of my time drawing comic books for my studies."
    },

    {
        heading: "C#",
        skillClassId: "Three",
        buttonId: "btn-three",
        containerId: "container-three",
        subHeading: "Vegetables",
        images: ["Comic_Project_1.png", "Comic_Project_2.png"],
        paragraph: "In first year, I spent a lot of my time drawing comic books for my studies."
    },

    {
        heading: "SQL",
        skillClassId: "Four",
        buttonId: "btn-four",
        containerId: "container-four",
        subHeading: "Vegetables",
        images: ["Comic_Project_1.png", "Comic_Project_2.png"],
        paragraph: "In first year, I spent a lot of my time drawing comic books for my studies."
    },
];

const skillsSection = document.querySelector(".skills-content");

function toggleHide(item) {
    const button = document.querySelector(`#${item.buttonId}`);
    const container = document.querySelector(`#${item.containerId}`);

    container.classList.add("hide");

    button.addEventListener("click", () => {
        container.classList.toggle("hide");
    });
}

function gallery(images) {
    return images.map(img => `<img src="../images/${img}">`).join("");
}

skills.forEach((skill) => {
    const card = document.createElement("div");

    card.innerHTML = `
        <section class="skill-section-${skill.skillClassId}">
            <h1 class="main-heading">
                <button type="button" class="dropdown-btn" id="${skill.buttonId}">
                    <img src="../images/arrow.png">
                </button>
                ${skill.heading}
            </h1>

            <div id="${skill.containerId}" class="hide">
                <div class="skill-one">
                    <h1 class="sub-heading">${skill.subHeading}</h1>

                    <div class="dropdown-gallery">
                        ${gallery(skill.images)}
                    </div>

                    <p class="dropdown-paragraph">
                        ${skill.paragraph}
                    </p>
                </div>
            </div>
        </section>
    `;

    skillsSection.appendChild(card);
    toggleHide(skill);
});
