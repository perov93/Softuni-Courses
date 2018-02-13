/**
 * Created by  on 1/29/2018.
 */

function find(sentence) {
    let regex = /\b_[a-zA-Z0-9]+\b/g;
    sentence = sentence.match(regex);

    console.log(sentence.map(word => word.substring(1)).join(','))
}

find('__invalidVariable _evenMoreInvalidVariable_ _validVariable')
 