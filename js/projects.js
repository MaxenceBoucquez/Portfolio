let projectsDiv = document.getElementsByClassName("projects")[1]

fetch("../json/projects.json")
.then(res=>res.json())
.then(data=>data.projects.forEach(element => {
    let projectTitle = document.createElement("h3")
    let projectDescription = document.createElement("div")
    let projectDiv = document.createElement("div")
    projectTitle.textContent = element.title
    projectTitle.classList.add("project-title")
    projectDescription.textContent = element.description
    projectDescription.classList.add("project-description")
    projectDiv.appendChild(projectTitle)
    projectDescription.classList.add("project-description")
    projectDiv.appendChild(projectDescription)
    projectDiv.classList.add("project")
    projectsDiv.appendChild(projectDiv)
}))
