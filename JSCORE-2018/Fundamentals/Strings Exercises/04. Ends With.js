/**
 * Created by  on 1/29/2018.
 */

function endsWith(mainString, subString) {
    console.log(mainString.substr(-subString.length) === subString)
}

endsWith('This sentence ends with fun?', 'fun?')
 