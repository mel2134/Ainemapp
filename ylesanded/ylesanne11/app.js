const nimed = ["mari-meri maasikas","mari maasikas", "jaan jõesaar", "kristiina kukk", "margus MeElis mustikas", "jaak järve", "kadi kask", "Toomas Tamm", "Kadi Meri", "Leena Laas", "Madis Mets", "Hannes Hõbe", "Anu Allikas", "Kristjan Käär", "Eva Esimene", "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder", "Kaidi Koppel", "tiina Toom"];
let korrasNimed = []
for(let i=0;i<nimed.length;i++){
    let sõne = ""
    nimed[i].toLowerCase().split(" ").forEach(word => word.includes("-") ? 
    sõne+=word.charAt(0).toUpperCase() + 
    word.slice(1).split("-")[0] + 
    "-" + 
    word.slice(1).split("-")[1].charAt(0).toUpperCase() + 
    word.slice(1).split("-")[1].slice(1) : sõne +=" " + word.charAt(0).toUpperCase() + word.slice(1))

    korrasNimed.push(sõne.indexOf(" ")==0 ? sõne.slice(1) : sõne)
}

console.log(korrasNimed)
let emailid = []
nimed.forEach(nimi => 
    emailid.push(nimi.split(" ")[1].toLocaleLowerCase()+"@metshein.com"
    ))
console.log(emailid)


const inimesteAndmed = [
    { nimi: "Mari Maasikas", isikukood: "38705123568" },
    { nimi: "Jaan Jõesaar", isikukood: "49811234567" },
    { nimi: "Kristiina Kukk", isikukood: "39203029876" },
    { nimi: "Margus Mustikas", isikukood: "49807010346" },
    { nimi: "Jaak Järve", isikukood: "39504234985" },
    { nimi: "Kadi Kask", isikukood: "39811136789" },
    { nimi: "Mel", isikukood:"50705280282"}
    // Lisa kontrollimiseks oma nimi ja isikukood
];
function parseID(id){
    let date = id.slice(1,7)
    let year = date.slice(0,2)
    let month = date.slice(2,4)
    let day = parseInt(date.slice(4,6))
    year = parseInt(year)>=24 ? "19"+year : "20"+year
    return [parseInt(year),parseInt(month),parseInt(day)]
}
function calcAge(year){
    const currentYear = new Date().getFullYear()
    return currentYear-year
}
for(let i = 0;i<inimesteAndmed.length;i++){
    const ourArray  = parseID(inimesteAndmed[i].isikukood)
    const age = calcAge(ourArray[0])
    console.log(`${inimesteAndmed[i].nimi} on sündinud ${ourArray[2]}/${ourArray[1]}/${ourArray[0]} ${age} aastat vana`)
}

const opilased = [
    { nimi: "Anna", tulemused: [4.5, 4.8, 4.6] },
    { nimi: "Mart", tulemused: [5.2, 5.1, 5.4] },
    { nimi: "Kati", tulemused: [4.9, 5.0, 4.7] },
    { nimi: "Jaan", tulemused: [4.3, 4.6, 4.4] },
    { nimi: "Liis", tulemused: [5.0, 5.2, 5.1] },
    { nimi: "Peeter", tulemused: [5.5, 5.3, 5.4] },
    { nimi: "Eva", tulemused: [4.8, 4.9, 4.7] },
    { nimi: "Marten", tulemused: [4.7, 4.6, 4.8] },
    { nimi: "Kairi", tulemused: [5.1, 5.3, 5.0] },
    { nimi: "Rasmus", tulemused: [4.4, 4.5, 4.3] },
];
opilased.forEach(opilane => {
    const nimi = opilane.nimi 
    let keskmine = 0
    let parim = opilane.tulemused.sort().at(-1)
    let parim2 = 0
    opilane.tulemused.forEach(arv => parim2 < arv ? parim2 = arv : undefined)
    console.log(parim2)
    opilane.tulemused.forEach(arv => keskmine+=arv)
    keskmine = (keskmine/opilane.tulemused.length).toFixed(2)
    console.log(`${nimi} Keskmine: ${keskmine}, Parim: ${parim}`)
});