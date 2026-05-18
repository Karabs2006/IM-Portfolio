const buttonOne = document.querySelector("#btn-one");
const projectOne = document.querySelector(".project-one");

projectOne.classList.add("show");

buttonOne.addEventListener("click", (event)=>{

    projectOne.classList.toggle("hide");
})