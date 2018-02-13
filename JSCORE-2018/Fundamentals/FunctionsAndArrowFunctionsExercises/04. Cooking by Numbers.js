function cookingNumber(arr) {
    let num = arr[0];

    for (let i = 1; i < arr.length; i++) {
        switch (arr[i]){
            case 'chop': num/=2; break;
            case 'dice': num=Math.sqrt(num); break;
            case 'spice': num++; break;
            case 'bake': num*=3; break;
            case 'fillet': num-=num*20/100; break;
        }
        console.log(num)
    }
}
cookingNumber(['9', 'dice', 'spice', 'bake', 'fillet'])