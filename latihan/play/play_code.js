/*
	Referensi:
	- https://wiki.imacros.net/iimPlayCode
	- https://wiki.imacros.net/iimPlay
*/

/*
	iimPlayCode digunakan untuk menjalankan imacros dengan skrip berupa code javascript (string)
	
	iimPlayCode(' string code' );
	
	Tips:
	
	Untuk menulis kode sebaiknya menggunakan metode literal string dengan delimiter 
	berupa tanda ` (backquote, bactick). Manfaatnya:
	- Lebih mudah menulis string dengan multiline
	- Lebih mudah menggabungkan dengan variabel javascript yang ada
	
	Sementara variabel javascript yang digunakan sebaiknya tipe object atau array,
	supaya dalam 1 variabel dapat menampung lebih banyak data
	
	Variabel sebaiknya dideklarasikan di awal dan diberi nilai default

*/

// deklarasi variabel
var str, code, q;

q = 'soekarno';
code = `
	URL GOTO=https://www.google.com/search?q=${q}
	WAIT SECONDS=3
`;
iimPlayCode(code);
alert(`Pencarian kata ${q}`);

q = 'soeharto';
code = `
	URL GOTO=https://www.google.com/search?q=${q}
`;
iimPlayCode(code);
alert(`Pencarian kata ${q}`);