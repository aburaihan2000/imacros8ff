/*
	Referensi:
	https://wiki.imacros.net/!DATASOURCE
	https://wiki.imacros.net/!DATASOURCE_LINE
	https://wiki.imacros.net/!DATASOURCE_DELIMITER
	https://wiki.imacros.net/COL
*/

/*
	File Datasource biasa digunakan untuk input form secara dinamis
	Jika penulisan datasource tidak lengkap dengan lokasi direktori,
	dianggap file datasource berada di direktori datasource default \iMacros\Datasource
	
	SET !DATASOURCE C:\mysource.txt 
	SET !DATASOURCE "C:\\My iMacros DataSources\\mysource.txt"
	
	File datasource biasanya berupa .txt atau .csv dengan delimiter default koma (,)
	
	Command terkait datasource yang biasa digunakan
	» DATASOURCE_LINE : menentukan baris ke berapa data digunakan, terutama pada mode Play (Loop)
	» DATASOURCE_DELIMITER : untuk mengganti delimiter default (,)
	» COLn : Kolom ke berapa yang digunakan. Multi kolom jika dalam satu baris ada beberapa kolom yang dipisahkan delimiter. 
	
	SET !DATASOURCE_LINE 5
	SET !DATASOURCE_DELIMITER ;
	
	
	Tips:
	Sebaiknya penulisan datasource lengkap dengan direktorinya.
	Sehingga bisa dibuatkan sub-sub folder untuk memudahkan manajemen file
	seperti:
		\referensi\user.txt
		\profil\pegawai.csv
		\customer\pesanan.csv
		
	Error:
	» Pengaturan kolom yang melebihi jumlah kolom tersedia menyebabkan error
*/

// deklarasi variabel
var folder = {};
var files = {};
var arr=[];
var str, code;

// assign default value to avoid errors
folder.datasources = '';
folder.macros = '';
folder.downloads = '';

getFolder();
test();


function getFolder(){
	code = `
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
}

function test(){
	files.address = folder.datasources + 'Address.csv';
	code = `
		SET !DATASOURCE ${files.address}
		SET !DATASOURCE_LINE 2
		ADD !EXTRACT {{!COL3}}
	`;
	iimPlayCode(code);
	iimDisplay(` Load data dari file ${files.address} baris ke-2 kolom ke-3`);
	str = iimGetLastExtract();
	
	// debug
	alert(` File : \n ${files.address} \n ${'='.repeat(30)} \n Data diambil : ${str}`);
}

