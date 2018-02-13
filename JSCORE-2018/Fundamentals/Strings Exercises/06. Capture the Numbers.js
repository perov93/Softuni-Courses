/**
 * Created by  on 1/29/2018.
 */

function capture(arr) {
    let regex = /\d+/g;
    arr = arr.reduce((a, b) => a + b);
    console.log(arr.match(regex).join(' '));
}

capture(['The 300',
'What is that?',
'I think its the 3rd movie.',
'Lets whats it at 22:45'])
 