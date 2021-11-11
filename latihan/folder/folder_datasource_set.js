/*
	referensi:
	https://wiki.imacros.net/FOLDER_DATASOURCE
*/

// ********************************************
/*
	Jika folder datasource berada di luar folder default
	harus di-set sebelum menjalankan imacros
  
	SET !FOLDER_DATASOURCE C:\\New<SP>folder
	SET !FOLDER_DATASOURCE "C:\\New folder"
  
	Harus menggunakan \\ bukan \ karena \ adalah escape character 
	
	!!! 
	Pentingnya menentukan Folder Datasource adalah, 
	ketika menuliskan file datasource (.csv, .txt) 
	tidak perlu lengkap. Cukup nama file saja
*/

var code = `
  SET !FOLDER_DATASOURCE C:\\New<SP>folder
  ADD !EXTRACT {{!FOLDER_DATASOURCE}}
`;
iimDisplay(` Set Path Datasource : \n C:\New folder`);
iimPlayCode(code);

// debug
var str = iimGetLastExtract();
alert(str);

