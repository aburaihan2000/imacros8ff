/*
	referensi:
	https://wiki.imacros.net/!FOLDER_MACROS
*/

// ********************************************
/*
	!!!
	- Variabel !FOLDER_MACROS hanya tersedia di imacros versi 10+
	- Bersifat read-only
	
	Pentingnya mengetaui Folder Macros yaitu
	berguna apabila akan menjalankan macro lain baik dalam subfolder yang sama
	maupun subfolder berbeda
	
	Trik untuk mengetahui Folder download (default) yaitu dengan melakukan parsing
	Folder Datasource kemudian string base Folder ditambah \MACROS
*/

var code = `
  ADD !EXTRACT {{!FOLDER_DATASOURCE}}
`;
iimPlayCode(code);

var str = iimGetLastExtract();
var arr = str.split("\\");
	arr.pop();
var str = arr.join("\\\\") + "\\Macros";
iimDisplay(` Set Path Datasource : \n ${str}`);

// debug
alert(str);


