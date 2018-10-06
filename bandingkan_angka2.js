function bandingAngka2(angka1, angka2){

if (angka2 > angka1){
	return true;
}else if(angka1 === angka2){
	return -1;
}else{
 	return false;
 }
}

console.log(bandingAngka2(5, 8))
console.log(bandingAngka2(5, 3))
console.log(bandingAngka2(4, 4))
console.log(bandingAngka2(3, 4))
console.log(bandingAngka2(17,2))