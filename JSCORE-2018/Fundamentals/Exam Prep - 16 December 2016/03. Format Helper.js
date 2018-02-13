/**
 * Created by  on 2/5/2018.
 */

function solve(inputArr) {
    let text = inputArr[0];
    text = text.replace(/[.,!?:;]\s*/g, (match) => match.trim() + " " );
    text = text.replace(/\s+[.,!?:;]/g, (match) => match.trim());
    text = text.replace(/\.\s*\.\s*\.\s*\!/g, "...!");
    text = text.replace(/(\.\s+)(\d+)/g, (match, gr1, gr2) => gr1.trim() + gr2)
    text = text.replace(/\"(\s*[^\"]+\s*)\"/g, (match, gr1) => `"${gr1.trim()}"`);

    console.log(text)

}

solve(['Terribly formatted text . With chaotic spacings.\" Terrible quoting \"! Also this date is pretty confusing : 20 . 12. 16 .'])
solve(['Make,sure to give:proper spacing where is needed...   !'])