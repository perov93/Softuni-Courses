/**
 * Created by  on 1/25/2018.
 */

function main(arr) {
    let delimeter = arr.pop();
    console.log(arr.join(delimeter));
}

main(['One', 'Two', 'Three', 'Four', 'Five', '-'])