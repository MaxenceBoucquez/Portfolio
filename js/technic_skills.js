let skill_cards = document.getElementById("technic-skills")

fetch("technic_skills.json")
.then(res=>res.json())
.then(data=>data.cards.forEach(card => {
    let card_title = document.createElement("h2")
    card_title.classList.add("card-title")
    card_title.textContent = card.front.titre
    let card_description = document.createElement("p")
    card_title.classList.add("card-description")
    card_title.textContent = card.front.description
    let card_div = document.createElement("div")
    card_div.classList.add("card")
    card_div.appendChild(card_title)
    card_div.appendChild(card_description)
    skill_cards.appendChild(card_div)
    let projects_div = document.createElement("div")
    projects_div.classList.add("projects")
    card.back.projects.forEach(project => {
        
    })
}))