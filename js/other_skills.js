let cards = document.getElementById("cards")

fetch("../json/other_skills.json")
.then(res=>res.json())
.then(data=>data.cards.forEach(card => {
    let new_title = document.createElement("h2")
    new_title.classList.add("card-title")
    new_title.textContent = card.titre
    let new_description = document.createElement("p")
    new_description.classList.add("card-description")
    new_description.textContent = card.description
    let new_div = document.createElement("div")
    new_div.classList.add("card")
    new_div.appendChild(new_title)
    new_div.appendChild(new_description)
    cards.appendChild(new_div)    
}))
