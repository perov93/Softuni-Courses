/**
 * Created by  on 1/29/2018.
 */

function capitalize(string) {
    string = string.split(' ');
    let result = [];
    for(let word of string){
        word = word[0].toUpperCase()+word.substring(1).toLocaleLowerCase();
        result.push(word);
    }
    console.log(result.join(' '));
}

capitalize('Capitalize these words')
 