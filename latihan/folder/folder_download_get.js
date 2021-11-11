/*
	referensi:
	https://wiki.imacros.net/!FOLDER_DOWNLOAD
*/

// ********************************************
/*
	!!!
	Variabel !FOLDER_DOWNLOAD hanya tersedia di imacros versi 10+
	
	Pentingnya mengetaui Folder Download adalah
	ketika akan melakukan SAVEAS tidak perlu menentukan direktori 
	untuk meletakkan hasil SAVEAS
	
	Trik untuk mengetahui Folder download (default) yaitu dengan melakukan parsing
	Folder Datasource kemudian string base Folder ditambah \DOWNLOAD
	
*/

var code = `
  ADD !EXTRACT {{!FOLDER_DATASOURCE}}
`;
iimPlayCode(code);

var str = iimGetLastExtract();
var arr = str.split("\\");
	arr.pop();
var str = arr.join("\\\\") + "\\Downloads";
iimDisplay(` Set Path Datasource : \n ${str}`);

// debug
alert(str);


