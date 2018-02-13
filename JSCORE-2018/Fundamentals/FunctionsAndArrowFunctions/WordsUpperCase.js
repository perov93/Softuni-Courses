function wordsUppercase(str) {
   console.log(str.toUpperCase().split(/\W+/).filter(w => w !== '').join(', '))
}

wordsUppercase("Hi, how are you?")