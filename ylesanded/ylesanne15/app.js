const btn = document.getElementById("theme")
btn.addEventListener("click", (event)=>{
    let btnClasses = event.target.classList
    console.log("pihtas")
    document.body.classList.toggle("dark")
    if(btnClasses.contains("btn-dark")){
        btnClasses.replace("btn-dark","btn-light")
        event.target.textContent = "Light Theme"
    }
    else{
        btnClasses.replace("btn-light","btn-dark")
        event.target.textContent = "Dark Theme"
    }
});