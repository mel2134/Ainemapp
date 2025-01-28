// Mel Kosk
// 22.10.2024
// 03


// Aeg ja kaugus

function timeCalc(){
    let kaugus = document.getElementById("dis").value;
    let kiirus = document.getElementById("speed").value;
    let aeg = (kaugus/kiirus).toFixed(2);
    document.getElementById("travel_time").innerHTML = `${kaugus} km sõites ${kiirus}km/h võtab aega ${aeg} tundi`
    return false;
}


function postsPerPage(){
    let postitused = document.getElementById("pos").value;
    let pages = document.getElementById("pages").value
    let lehekuljed = Math.round(postitused/pages);
    let viimasel = postitused%pages;
    document.getElementById("pages_result").innerHTML = `${postitused} postitust mahub ${lehekuljed} lehele ja viimasel leheküljel on ${viimasel} postitust`
    return false;
}


function kwhCalc(){
    let server = document.getElementById("wattage").value;
    let kwh_hind = document.getElementById("price").value;
    let kwh = server/1000;
    let hind = kwh*kwh_hind;
    document.getElementById("wattage_result").innerHTML = `${server} W server maksab ühes tunnis ${hind} eurot`
    return false;
}









/*
function postitused_lehekuljel(postitused,lehed){
    let postitused = pos.value;
    let lehekuljed = Math.round(postitused/pages.value);
    let viimasel = postitused%pages.value;
    console.log(`${postitused} postitust mahub ${lehekuljed} lehele ja viimasel leheküljel on ${viimasel} postitust`)
    return false;
}
function kwh_arvutamine(w,hind){
    let server = w;
    let kwh_hind = hind;
    let kwh = server/1000;
    let hind = kwh*kwh_hind;
}

*/
