//Mel Kosk
// 15.10.2024
// 02

//Kellaaeg
let hours = 16
let minutes = 32
let seconds = 50

let setTime = `${hours}:${minutes}:${seconds} PM`
console.log(setTime);

// Tsitaat lause sees
let quote = '"If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough." -Oprah Winfrey '
console.log(quote)

// Mallide kasutamine
let firstName = "Mel"
let lastName = "Kosk"
console.log(`${firstName} ${lastName} nimetähed on ${firstName[0]}.${lastName[0]}.`)

// Perenime pikkus
let firstAndLastName = "Mel, Kosk"
let commaIndex = firstAndLastName.indexOf(",")
let lastNameExtracted = firstAndLastName.substring(commaIndex+2)
console.log(lastNameExtracted.toUpperCase())
console.log(`Perenime pikkus: ${lastNameExtracted.length}`)

// E-posti aadressi muutmine
let eMail = "karrol@netlog.com"
console.log(eMail.replace("netlog","gmail"))

// Andmerida analüüs
let data  = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175"
let splitData = data.split(",")
let extractedIP = splitData[splitData.length-1]
let extractedUsername = splitData[3].split("@")[0]
console.log(`${extractedIP} ja ${extractedUsername}`)

