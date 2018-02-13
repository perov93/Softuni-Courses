/**
 * Created by  on 2/1/2018.
 */

function sumByTown(input) {
    let towns = {};

    for(let i=0; i<input.length; i+=2) {
       if(towns.hasOwnProperty(input[i])){
           towns[input[i]] += Number(input[i + 1])
       }else{
           towns[input[i]] = Number(input[i + 1])
       }
    }

    console.log(JSON.stringify(towns));
}

sumByTown(['Sofia',
    '20' ,
    'Varna',
'3',
'Sofia',
'5',
'Varna',
'4'])
 