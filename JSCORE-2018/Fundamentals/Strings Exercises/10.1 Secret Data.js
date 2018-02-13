/**
 * Created by  on 1/29/2018.
 */

function encrypt(arrOfStrings) {
    let patterns = {
        nameRegex : /(\*[A-Z]{1}[a-z]+)/,
        phoneRegex : /(\+[0-9\-]{10})/,
        idRegex : /(\![a-zA-Z0-9]+)/,
        baseRegex : /(\_[a-zA-Z0-9]+)/
    }


    let output = '';
    for (let string of arrOfStrings) {
        for (let pattern of patterns) {
            pattern.exec(string)
        }
    }
}
 