function isPalindrom(a) {
    return a.split('').reverse().join("") === a;
}

console.log(isPalindrom("racecar"))