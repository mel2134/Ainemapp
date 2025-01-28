const ulItems = document.querySelector("ul").querySelectorAll("li")
ulItems.forEach(element => {
    const text = element.innerHTML.toLowerCase()
    const elementClass = element.classList
    if(text.substring(0,6) == "ootel:"){
        elementClass.replace("list-group-item","list-group-item-warning")
    }
    if(text.substring(0,7) == "tehtud:"){
        elementClass.replace("list-group-item","list-group-item-success")
        element.style.fontWeight = 700
    }
    if(text.substring(0,5) == "viga:"){
        elementClass.replace("list-group-item","list-group-item-danger")
    }
});