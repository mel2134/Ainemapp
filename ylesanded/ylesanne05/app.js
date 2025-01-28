function tempType(){
    const temp = prompt("Sisesta temperatuur");
    if(temp > 25){
        alert("Väga kuum ilm!")
    }else if(temp>=15 && temp <= 25){
        alert("Mõnus temperatuur")
    }else{
        alert("Jahe ilm")
    }
}

function isAdmin(){
    let name = prompt("Kasutajanimi")
    if(name === "blabla"){
        alert("Tere, administraator!")
    }
    else{
        alert("Tere, külaline!")
    }
}
function ticketPrice(){
    let ticket = prompt("Pileti tüüp")
    let age = prompt("Vanus")
    let price = 0
    if (ticket === "täis"){
        if(age >= 65){
            price = 15
        }else if(age<=64 && age>18){
            price = 20
        }
        else{
            price = 10
        }
    }else if(ticket==="soodus"){
        if(age<=64 && age>18){
            price = 15
        }
        else{
            price = 8
        }
    }
    else{
        alert("Vale pileti tüüp! (täis,soodus)")
        return;
    }
    alert(`Kuna oled ${age} aastat vana ja sinu pilet on ${ticket}pilet, siis sinu pileti hind on ${price} eurot`)
}