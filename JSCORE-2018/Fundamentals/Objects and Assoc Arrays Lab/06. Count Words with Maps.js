/**
 * Created by  on 2/1/2018.
 */
 
function countWordsWithMap(arr) {
    let myMap = new Map();
    for (let str of arr) {
        let words = str.split(/[^0-9a-zA-Z_]+/).filter(s => s.trim() !== '')

        for (let word of words) {
            word = word.toLocaleLowerCase()
            if(myMap.has(word)){
                myMap.set(word, (myMap.get(word)+ 1))
            }else {
                myMap.set(word, 1)
            }
        }
    }
    let sortedKeys = Array.from(myMap.keys()).sort((a, b)=> a.localeCompare(b))
    for (let key of sortedKeys) {
        console.log("'" + key + "'" + ' -> ' + myMap.get(key) + ' times')
    }
}

countWordsWithMap(['Far too slow, you\'re far too slow.'])