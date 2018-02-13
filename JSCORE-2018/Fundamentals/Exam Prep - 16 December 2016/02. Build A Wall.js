/**
 * Created by  on 2/5/2018.
 */

function solve(wall) {
    wall = wall.map(Number);
    let concrete = [];
    while(true){
        let buildOn = false;
        let dailyConcrete = 0;
        for (let i = 0; i < wall.length; i++) {
            if(wall[i] !== 30){
                dailyConcrete += 195;
                wall[i]++;
                buildOn = true;
            }
        }
        if(!buildOn){
            break;
        }else{
            concrete.push(dailyConcrete)
        }
    }
    let sumOfConcrete = concrete.reduce((a,b) => a + b);
    console.log(concrete.join(', '));
    console.log(`${sumOfConcrete * 1900} pesos`);
}
solve(['21', '25', '28'])

 