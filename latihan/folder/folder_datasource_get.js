/* 
	Referensi:
	https://wiki.imacros.net/FOLDER_DATASOURCE
*/

// ********************************************
/*
  Jika folder datasource tidak ditentukan secara spesifik
  maka secara default folder tersebut berada di \User\Palemoon\Profiles\Default\iMacros\Datasources
*/

var code = `
  ADD !EXTRACT {{!FOLDER_DATASOURCE}}
`;
var str = iimGetLastExtract();
iimDisplay(` Path Datasource : \n ${str}`);
iimPlayCode(code);

// debug
alert(str);

