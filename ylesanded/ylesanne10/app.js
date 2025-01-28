function tooteObjekt(){
    let toode = {
        nimi:"Õun",
        hind:0.99,
        kogus:9,
        koguhind:function(){
            return this.hind*this.kogus
        },
        muudaKogust:function(muudetud){
            this.kogus = muudetud
        },
        sisu:function(){
            return this.nimi + " " + this.hind + " " + this.kogus
        }
    }
    console.log(`${toode.nimi} ${toode.hind} ${toode.kogus}`)
    console.log(toode.koguhind())
    console.log(toode.sisu())
    toode.muudaKogust(12)
    console.log(toode.sisu())
    console.log(toode.koguhind())
}
function ostuKorv(){
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
            this.tooted.forEach(toode => console.log(`${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus}`))
        }
    };
    ostukorv.lisaToode("Kohv",5.80,2)
    ostukorv.kuvaSisu()
    console.log('Ostukorvi kogu summa:', ostukorv.koguSumma());
}
tooteObjekt()
console.log("-----------------------------------")
ostuKorv()
