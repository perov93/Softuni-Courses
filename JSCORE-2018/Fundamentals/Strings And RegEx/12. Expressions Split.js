function split (str){
	let regex = /[,;(). \s]+/
	str.split(regex).forEach(s => console.log(s))
}

split('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}')