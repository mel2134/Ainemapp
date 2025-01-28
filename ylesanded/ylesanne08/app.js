const money = [200, 0.2, 10, 0.01, 2, 1, 0.1, 0.02, 0.05, 100, 5, 0.5, 0.5, 50, 20]
function moneyThings(){
    let mundid = [];
    let count = 0;
    let total = 0;
    while (count<money.length){
        let current_coin = money[count]
        if (current_coin < 3){
            if(!mundid.includes([current_coin])){
                mundid.push([current_coin]);
                total += current_coin;
            }
        }
        count++;
    }
    
    console.log(mundid);
    console.log(`${mundid.length} : ${total}`);
}