function balikKata(Kata)
{
	var kalimat = " "
for (var a = Kata.length -1 ; a >= 0 ; a--){
	kalimat = kalimat+Kata[a]
}
return kalimat
}
	console.log(balikKata('Hello World and Coders'))
	console.log(balikKata('John Doe'))
	console.log(balikKata('I am a bookworm'))
	console.log(balikKata('Coding is my hobby'))
	console.log(balikKata('Super'))
	

					