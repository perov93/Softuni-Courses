/**
 * Created by  on 2/1/2018.
 */
 
function populationInTowns(arr) {
    let towns = new Map()
    for (let str of arr) {
        let [name, value] = str.split(/\s* <-> \s*/).filter(a => a !=='')
        if(towns.has(name)){
            towns.set(name, towns.get(name) + Number(value))
        }else{
            towns.set(name, Number(value))
        }
    }
    for (let [key, value] of towns) {
        console.log(key + ' : ' + value)
    }
}

populationInTowns(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])