function classicName(){
    console.log("Mel")
}
var anonName = () =>{
    console.log("Mel")
}

function kuupaevEesti(date){
    date_array = date.split(".")
    console.log(`Päev: ${date_array[0]}\nKuu: ${date_array[1]}\nAasta: ${date_array[2]}`)
}

function sumNumbers(...nums){
    let sum = 0;
    for(let i = 0; i<nums.length;i++){
        sum += nums[i]
    }
    return sum;
}

var salajaneSonum = (sonum) =>{
    let tahed = ["i","ü","u","e","ö","õ","o","ä","a"]
    for (const taht of tahed) {
        sonum = sonum.replace(taht,"*")
    }
    return sonum
}

var leiaUnikaalsedNimed = (nimed) =>{
    let leitud = []
    for (let i = 0;i<nimed.length;i++){
        if(!leitud.includes(nimed[i])){
            leitud.push(nimed[i])
        }
    }
    return leitud
}
classicName()
anonName()
kuupaevEesti("19.07.23");
console.log(sumNumbers(8,2,9))
console.log(salajaneSonum("abcdefghijklmnopqrstuv"))
console.log(leiaUnikaalsedNimed(["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"]))