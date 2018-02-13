function valid(str){
	let regex =	/^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/
	if (regex.test(str)) {
		console.log('Valid')
	} else {
		console.log('Invalid')
	}
}

valid('valid@email.bg')
valid('invalid@emai1.bg')
