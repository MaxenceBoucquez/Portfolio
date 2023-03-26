let skill_cards = document.getElementById("technic-skills")

    fetch("../json/technic_skills.json")
    .then(res=>res.json())
    .then(data=>data.cards.forEach(card => {
        let card_title = document.createElement("h2")
        card_title.classList.add("card-title")
        card_title.textContent = card.front.name
        let card_description = document.createElement("p")
        card_description.classList.add("card-description")
        card_description.textContent = card.front.description
        let card_div = document.createElement("div")
        card_div.classList.add("card")
        let cardFront = document.createElement("div")
        cardFront.classList.add("card-front")
        cardFront.appendChild(card_title)
        cardFront.appendChild(card_description)
        card_div.appendChild(cardFront)
        let projects_div = document.createElement("div")
        projects_div.classList.add("projects")
        card.back.projets.forEach(project => {
            let projectName = document.createElement("h3")
            let projectDescription = document.createElement("p")
            projectName.classList.add("project-name")
            projectDescription.classList.add("project-description")
            projectName.textContent = project.name
            let cardBack = document.createElement("div")
            cardBack.classList.add("card-back")
            projectDescription.textContent = project.description
            projects_div.appendChild(projectName)
            projects_div.appendChild(projectDescription)
            cardBack.appendChild(projects_div)
            card_div.appendChild(cardBack)
            skill_cards.appendChild(card_div)
        })
    }))

        
// let build = await buildCards()
// build.then(data => {
//     let cards = document.querySelectorAll(".card") 
//     cards.forEach((card,index) => {
//         console.log(index);
//         console.log(card);
//         card.setAttribute("animation","cards_apparition 1s ease-in-out "+ 1 +0.2*index+1 +"s both")
// })})

