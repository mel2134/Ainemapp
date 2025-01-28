/*
const elements = document.querySelectorAll("img")
const titleElems = document.querySelectorAll(".card-title")
const descElems = document.querySelectorAll(".card-text")
for(let i = 0; i<titleElems.length;i++){
    titleElems[i].innerHTML = elements[i].dataset.title
    descElems[i].innerHTML = elements[i].dataset.description
}
*/

const cards = document.querySelectorAll(".card")
cards.forEach(element => {
    const img = element.querySelector(".card-img-top")
    const title = img.getAttribute("data-title")
    const desc = img.getAttribute("data-description")
    element.querySelector(".card-title").innerHTML = title
    element.querySelector(".card-text").innerHTML = desc
});
