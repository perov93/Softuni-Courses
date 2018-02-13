/**
 * Created by  on 1/29/2018.
 */

function extract(input) {
    let regex = /www\.[a-zA-Z0-9-]+(\.[a-z]+)+/g;
    let extractedLinks = [];

    for(let line of input){
        let matches = line.match(regex);
        if(matches !== null){
            for(let match of matches){
                extractedLinks.push(match);
            }
        }
    }
    if(extractedLinks.length !==0){
        console.log(extractedLinks.join('\n'));
    }
}
extract(['Join WebStars now for free, at www.web-stars.com',
'You can also support our partners:',
'Internet - www.internet.com',
'WebSpiders - www.webspiders101.com',
'Sentinel - www.sentinel.-ko '])
 