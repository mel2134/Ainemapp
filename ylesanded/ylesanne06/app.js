function PosNeg(){
    const inp = prompt("Sisesta number");
    let number = parseFloat(inp)
    if (isNaN(number)){
        alert(`${inp} ei ole number!`)
        return;
    }
    switch (true){
        case number<0:
            alert(`${inp} on negatiivne`)
            break;
        default:
            alert(`${inp} on positiivne`)
            break;
    }
}

function ReserveTable(){
    const inp = prompt("Laud mitmele inimesle")
    let people = parseInt(inp)
    if (isNaN(people) || people <= 0){
        alert(`${inp} ei ole võimalik`)
        return;
    }
    switch(people){
        case 1:
        case 2:
            alert("Valige laud kahele inimesele.")
            break;
        case 3:
        case 4:
            alert("Valige laud neljale inimesele")
            break;
        case 5:
        case 6:
            alert("Valige laud kuuele inimesele.")
            break;
        default:
            alert("Valige suur laud.")
            break;
    }
}
