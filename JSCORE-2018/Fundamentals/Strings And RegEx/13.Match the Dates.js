function match(str){
	let regex = /\b([0-9]{1,2})-([A-Z][a-z]{2,2})-([0-9]{4,4})/gm
	let m = regex.exec(str)
	while (m) {
		console.log(`${m[0]} (Day: ${m[1]}, Month: ${m[2]}, Year: ${m[3]})`)
		m = regex.exec(str)
	}
}

match('I am born on 30-Dec-1994\n'+
'This is not date: 512-Jan-1996.\n' +
'My father is born on the 29-Jul-1955.\n')
