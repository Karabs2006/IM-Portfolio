const skills = [
    {
        heading: "Web Development",
        skillClassId: "One",
        buttonId: "btn-one",
        containerId: "container-one",
        images: ["web_01.jpg", "web_02.png"],
        paragraph: "My journey with web development started in high school when I first learned the basics of HTML. Over the years, I returned to it in much greater depth through my university studies, and it has become one of the skills I enjoy working with the most. I have experience building websites using HTML, CSS, and JavaScript, focusing on creating responsive layouts, interactive elements, and user-friendly designs. Web development has given me a strong appreciation for the balance between creativity and technical problem-solving, as it allows me to bring ideas to life directly in the browser."
    },

    {
        heading: "Unity Engine",
        skillClassId: "Two",
        buttonId: "btn-two",
        containerId: "container-two",
        images: ["unity_01.png","unity_02.png","unity_03.png"],
        paragraph: "I have been working with the Unity Engine for nearly two years, and it has become one of the tools I am most comfortable using. When I first started, I found it challenging to understand how all the different systems worked together, but with practice it gradually became much more intuitive. Since then, I have created several game projects and gained experience with level design, game mechanics, user interfaces, and scripting. What once felt overwhelming now feels like a second home, and it remains one of my favourite pieces of software to work in."
    },

    {
        heading: "C#",
        skillClassId: "Three",
        buttonId: "btn-three",
        containerId: "container-three",
        images: ["csharp_01.png", "csharp_02.png"],
        paragraph: "C# is the programming language I have spent the most time using, particularly through game development in Unity. While programming can sometimes seem dry from the outside, I enjoy the problem-solving aspect of it. There is something satisfying about breaking a complex problem into smaller pieces and gradually building a solution that works. Writing scripts, debugging systems, and finding efficient ways to implement mechanics has helped me develop a more logical and analytical way of thinking, making C# one of my favourite technical skills."
    },

    {
        heading: "SQL",
        skillClassId: "Four",
        buttonId: "btn-four",
        containerId: "container-four",
        images: ["sql_01.png", "sql_02.png"],
        paragraph: "SQL is a skill that I would like to revisit and develop further in the future. Although I have only worked with it to a limited extent, I found database management and data organisation surprisingly interesting. Learning how information can be structured, stored, and retrieved efficiently gave me a new perspective on how applications handle data behind the scenes. While it is an area I still have a lot to learn about, it is one that continues to intrigue me and is something I would not mind exploring in greater depth."
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
    return images.map(img => `<img src="../images/Skills/${img}">`).join("");
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
