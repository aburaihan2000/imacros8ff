/*
	referensi:
	https://wiki.imacros.net/!FOLDER_DATASOURCE
	https://wiki.imacros.net/!FOLDER_MACROS
	https://wiki.imacros.net/!FOLDER_DOWNLOAD
*/

// ********************************************
/*
	Jika folder macros, datasource, dan download menggunakan
	pengaturan default imacros, maka berikut ini
	skrip keseluruhan untuk mendapatkan ketiganya
*/

// deklarasi variabel
var folder = {};
var arr=[];
var str;

var code = `
  ADD !EXTRACT {{!FOLDER_DATASOURCE}}
`;
iimPlayCode(code);

str = iimGetLastExtract();
arr = str.split("\\");
arr.pop();

var imacrosFolder 	= arr.join("\\\\");
folder.datasources 	= imacrosFolder + "\\Datasources\\";
folder.macros 		= imacrosFolder + "\\Macros\\";
folder.downloads 	= imacrosFolder + "\\Downloads\\";

iimDisplay(` Get iMacros Folder \n -> Datasources \n ->Macros \n -> Downloads`);

// debug
var strForDebug='';
for (var key in folder){
	strForDebug += `folder ${key}: \n${folder[key]} \n ${'='.repeat(30)} \n`;
}
alert(strForDebug);


