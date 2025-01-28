const btn = document.getElementById("theme")
let theme = localStorage.getItem("theme")
console.log(theme)
if (theme === "D"){
    btn.classList.replace("btn-dark","btn-light")
    btn.textContent = "Light Theme"
    document.body.classList.toggle("dark")
}

//document.body.classList.toggle("dark")
btn.addEventListener("click", (event)=>{
    let btnClasses = event.target.classList
    document.body.classList.toggle("dark")
    if(btnClasses.contains("btn-dark")){
        localStorage.removeItem('theme');
        localStorage.setItem('theme', 'L');
        btnClasses.replace("btn-dark","btn-light")
        event.target.textContent = "Light Theme"
    }
    else{
        localStorage.removeItem('theme');
        localStorage.setItem('theme', 'D');
        btnClasses.replace("btn-light","btn-dark")
        event.target.textContent = "Dark Theme"
    }
});