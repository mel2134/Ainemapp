
const ostukorv = {
    tooted: [
        { nimi:'Piim', hind:3.60, kogus:2 },
        { nimi:'Leib', hind:2.00, kogus:1 },
        { nimi:'Munad', hind:1.50, kogus:6 },
        { nimi:'Juust', hind:4.20, kogus:1 },
        { nimi:'Tomatid', hind:2.30, kogus:3 },
    ],
    lisaToode:function(nimiNew,hindNew,kogusNew){
        this.tooted.push({nimi:nimiNew,hind:hindNew,kogus:kogusNew})
    },
    koguSumma:function(){
        let total = 0;
        this.tooted.forEach(item => total+=item.hind*item.kogus)
        return total
    },
    kuvaSisu:function(){
        document.getElementById("ostukorv").innerHTML=""
        this.tooted.forEach(toode => document.getElementById("ostukorv").innerHTML+=`<li>${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus}</li>`)
    }
};
function refresh(){
    ostukorv.kuvaSisu()
    document.querySelector("p").innerText = 'Ostukorvi kogu summa: ' + ostukorv.koguSumma() + " EUR"
}
ostukorv.lisaToode("Kohv",5.80,2)
refresh()
function Lisa(){
    const inp = prompt("Mida lisada? (Eralda komadega: Juust,5.50,3)")
    const items = inp.split(",")
    ostukorv.lisaToode(items[0],parseFloat(items[1]),parseFloat(items[2]))
    refresh()
}

