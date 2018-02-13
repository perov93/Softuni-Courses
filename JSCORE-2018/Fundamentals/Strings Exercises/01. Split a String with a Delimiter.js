/**
 * Created by  on 1/29/2018.
 */

function main(string, delimeter) {
    let splittedElements = string.split(delimeter);

    for (let i = 0; i < splittedElements.length; i++) {

        console.log(splittedElements[i]);
    }
}


main('One-Two-Three-Four-Five','-')
 