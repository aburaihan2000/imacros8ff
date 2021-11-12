/*
	Referensi:
	- https://wiki.imacros.net/iimDisplay
	
*/

/*
	Display berguna untuk menampilkan pesan atau informasi ketika imacros dijalankan
	
	iimDisplay ( String message [, int timeout] )
	
	Nilai default timeout adalah 10 detik.
	Jika timeout tidak diberi nilai, maka teks display terakhir akan terus ada sampai dengan
	command iimDisplay diinisiasi ulang
	
*/

// deklarasi variabel
var str, code;
var msg = [];

msg[0] = 'Imacros sedang dijalankan pertama kali';
msg[1] = 'Informasi ini ada setelah alert ditutup';
msg[2] = 'Informasi ke-3';
msg[3] = 'Informasi ini akan hilang setelah 20 detik';

iimDisplay(msg[0]);
iimPlayCode('WAIT SECONDS=3');
alert('Alert by Javascript');
iimDisplay(msg[1]);
iimPlayCode('WAIT SECONDS=3');
iimDisplay(msg[2]);
iimPlayCode('WAIT SECONDS=3');
iimDisplay(msg[3],20);
