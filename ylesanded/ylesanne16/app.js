const nimekiri = document.querySelector('#mob');

nimekiri.addEventListener("click",e=>{
    if(e.target.tagName === "LI"){
        e.target.firstElementChild.classList.toggle("peida")
    }
});
