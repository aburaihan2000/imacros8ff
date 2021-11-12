/*
	Referensi:
	- https://wiki.imacros.net/iimPlayCode
	- https://wiki.imacros.net/iimPlay
*/

/*
	iimPlay digunakan untuk menjalankan skrip imacros lainnya
	
	Kekurangan:
	Hanya bisa menjalankan skrip .iim, tidak bisa memainkan skrip javascript (.js)
	
	? Bagaimana caranya mengirim variabel ke skrip .iim ?
*/

// deklarasi variabel
var str, code;

code = `Demo-Firefox\\extractUrl.iim`;
iimPlay(code);
iimDisplay(` Sedang menjalankkan script \n ${code}`);