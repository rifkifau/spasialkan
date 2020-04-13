// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define({"dijit/_editor/nls/commands":{bold:"Tebal",copy:"Salin",cut:"Potong","delete":"Hapus",indent:"Inden",insertHorizontalRule:"Penggaris horisontal",insertOrderedList:"Daftar Bernomor",insertUnorderedList:"Daftar Poin",italic:"Miring",justifyCenter:"Rata Tengah",justifyFull:"Rata Kanan Kiri",justifyLeft:"Rata Kiri",justifyRight:"Rata Kanan",outdent:"Hapus spasi di depan",paste:"Tempel",redo:"Ulangi",removeFormat:"Hapus Format",selectAll:"Pilih Semua",strikethrough:"Coretan",subscript:"Subskrip",
superscript:"Superskrip",underline:"Garis Bawah",undo:"Batalkan",unlink:"Hapus Tautan",createLink:"Buat Tautan",toggleDir:"Ubah Arah",insertImage:"Masukkan Gambar",insertTable:"Masukkan/Edit Tabel",toggleTableBorder:"Ubah Tepi Tabel",deleteTable:"Hapus Tabel",tableProp:"Properti Tabel",htmlToggle:"Sumber HTML",foreColor:"Warna Latar Depan",hiliteColor:"Warna Latar Belakang",plainFormatBlock:"Gaya Paragraf",formatBlock:"Gaya Paragraf",fontSize:"Ukuran Font",fontName:"Nama Font",tabIndent:"Inden Tab",
fullScreen:"Beralih ke Layar Penuh",viewSource:"Lihat Sumber HTML",print:"Cetak",newPage:"Halaman Baru",systemShortcut:'Tindakan "${0}" hanya tersedia pada peramban Anda menggunakan jalan pintas keyboard. Gunakan ${1}.',ctrlKey:"ctrl+${0}",appleKey:"\u2318${0}",_localized:{}},"dijit/_editor/nls/FontChoice":{fontSize:"Ukuran",fontName:"Font",formatBlock:"Format",serif:"serif","sans-serif":"sans-serif",monospace:"monospace",cursive:"cursive",fantasy:"fantasy",noFormat:"None",p:"Paragraf",h1:"Judul",
h2:"Sub Judul",h3:"Sub sub judul",pre:"Praformat",1:"xx-kecil",2:"x-kecil",3:"kecil",4:"medium",5:"besar",6:"x-besar",7:"xx-besar",_localized:{}},"dojox/editor/plugins/nls/Preview":{preview:"Pratinjau",_localized:{}},"dojox/editor/plugins/nls/FindReplace":{findLabel:"Temukan:",findTooltip:"Masukkan teks untuk menemukan",replaceLabel:"Ganti dengan:",replaceTooltip:"Masukkan teks untuk mengganti",findReplace:"Temukan dan Ganti",matchCase:"Cocokkan huruf",matchCaseTooltip:"Cocokkan huruf",backwards:"Mundur",
backwardsTooltip:"Mencari mundur teks",replaceAllButton:"Ganti Semua",replaceAllButtonTooltip:"Ganti semua teks",findButton:"Temukan",findButtonTooltip:"Temukan teks",replaceButton:"Ganti",replaceButtonTooltip:"Ganti teks",replaceDialogText:"Terjadi penggantian ${0}.",eofDialogText:"${0} terakhir kali terjadi",eofDialogTextFind:"Ditemukan",eofDialogTextReplace:"Diganti",_localized:{}},"dojox/editor/plugins/nls/PasteFromWord":{pasteFromWord:"Tempel Dari Word",instructions:"Tempelkan konten dari Word ke dalam kotak teks di bawah.  Setelah Anda merasa yakin dengan konten yang disisipkan, tekan tombol tempel.  Untuk membatalkan penyisipan teks, tekan tombol batal.",
_localized:{}},"dojox/editor/plugins/nls/InsertAnchor":{insertAnchor:"Masukkan Jangkar",title:"Properti Jangkar",anchor:"Nama:",text:"Deskripsi:",set:"Atur",cancel:"Batal",_localized:{}},"dojox/editor/plugins/nls/Blockquote":{blockquote:"Blockquote",_localized:{}},"widgets/NetworkTrace/setting/nls/strings":{taskUrl:"URL Tugas",setTask:"Atur",setTaskPopupTitle:"Atur Tugas",validate:"Atur",inValidGPService:"Harap masukkan layanan geoprocessing yang valid.",noOutputParameterWithGeometryType:"Layanan geoprocessing yang telah dipilih harus memiliki setidaknya satu parameter output dengan jenis geometri yang telah ditentukan. Harap pilih layanan geoprocessing yang berbeda.",
invalidOutputGeometry:"Jenis geometri output layanan geoprocessing yang dipilih tidak kompatibel dengan pengaturan proyek. Hasil layanan geoprocessing tidak bisa disimpan.",GPFeatureRecordSetLayerERR:"Harap masukkan layanan geoprocessing dengan input hanya jenis 'GPFeatureRecordSetLayer'.",invalidInputParameters:"Jumlah parameter input adalah kurang dari 1 atau lebih dari 3. Harap masukkan layanan geoprocessing yang valid.",projectSetting:{title:"Pengaturan Proyek",note:"Catatan: Pengaturan Proyek bersifat opsional, setelah pengguna yang dikonfigurasi dapat menyimpan proyek di layer webmap yang diinginkan dengan area pemadaman jaringan dan parameter input. Pengguna dapat menyimpan parameter output lainnya dari grup \u201cOutput\u201d dalam tab \u201cInput/Output\u201d.",
projectPolygonLayer:"Layer poligon proyek",outputParameterName:"Nama parameter output",projectPointLayer:"Layer titik proyek",selectLabel:"Pilih",polygonLayerHelp:"\x3cp\x3eLayer poligon dengan syarat berikut akan ditampilkan:\x3cbr/\x3e\x3cul\x3e\x3cli\x3eLayer harus memiliki kemampuan pengeditan, yaitu Buat, Hapus, dan Perbarui\x3c/li\x3e\x3cli\x3eLayer harus memiliki 2 kolom dengan nama dan jenis data yang tepat:\x3c/li\x3e\x3cul\x3e\x3cli\x3enama (kolom jenis string)\x3c/li\x3e\x3cli\x3eglobalid (kolom jenis GlobalID)\x3c/li\x3e\x3c/ul\x3e\x3c/ul\x3e\x3cp/\x3e",
outputParameterHelp:"\x3cp\x3eLayer poligon output dari URL tugas akan ditampilkan\x3cp/\x3e",pointLayerHelp:"\x3cp\x3eLayer titik dengan syarat berikut akan ditampilkan: \x3cbr/\x3e\x3cul\x3e\x3cli\x3eLayer harus memiliki kemampuan pengeditan, yaitu Buat, Hapus, dan Perbarui\x3c/li\x3e\x3cli\x3eLayer harus memiliki 2 kolom dengan nama dan jenis data yang tepat:\x3c/li\x3e\x3cul\x3e\x3cli\x3einputtype (Kolom jenis string)\x3c/li\x3e\x3cli\x3eprojectid (kolom jenis GUID)\x3c/li\x3e\x3c/ul\x3e\x3c/ul\x3e\x3cp/\x3e"},
inputOutputTab:{flag:"Bendera",barrier:"Pembatas",skip:"Lewati",title:"Input",inputTooltip:"Tooltip",typeText:"Jenis",symbol:"Simbol",summaryEditorText:"Teks Ringkasan",summaryTextTitle:"Sediakan teks yang akan ditampilkan untuk tab input"},summaryTab:{title:"Output",summaryFieldsetText:"Pengaturan ringkasan",inputOutput:"Input/Output",field:"Kolom",operator:"Operator",inputOperatorCountOption:"Jumlah",outputOperatorCountOption:"Jumlah",outputOperatorSkipCountOption:"SkipCount",fieldOperatorSumOption:"Jumlah",
fieldOperatorMinOption:"Min",fieldOperatorMaxOption:"Maks",fieldOperatorMeanOption:"Rata-rata",expressionAddButtonText:"Tambahkan",expressionVerifyButtonText:"Verifikasi",summaryEditorText:"Teks Ringkasan",zoomText:"Zoom otomatis setelah pelacakan",summarSettingTooltipText:"Tambahkan jumlah input/output",symbol:"Simbol",outputParametersText:"Parameter Output",skipText:"Dapat Dilewati",visibilityText:"Terlihat",exportToCsvText:"Ekspor ke CSV",settitngstext:"Pengaturan",saveToLayerText:"Simpan ke Layer (Opsional)",
inputLabel:"Label",inputTooltip:"Tooltip",outputDisplay:"Tampilkan teks",addFieldTitle:"Tambah Kolom",setScale:"Atur Skala",enterDisplayText:"Masukkan teks tampilan",saveToLayerHelp:"\x3cp\x3eLayer dengan syarat berikut akan ditampilkan:\x3cbr/\x3e\x3cul\x3e\x3cli\x3eLayer harus memiliki kemampuan pengeditan, yaitu \u201cBuat\u201d, \u201cHapus\u201d, dan \u201cPerbarui\u201d\x3c/li\x3e\x3cli\x3eLayer harus memiliki dua kolom dengan nama dan jenis data:\x3c/li\x3e\x3cul\x3e\x3cli\x3eparametername (Kolom jenis string)\x3c/li\x3e\x3cli\x3eprojectid (Kolom jenis Guid)\x3c/li\x3e\x3c/ul\x3e\x3c/ul\x3e\x3cp/\x3e",
exportToCsvDisplayText:"CSV",summaryTextTitle:"Sediakan teks ringkasan yang akan ditampilkan di tab output",addSummaryItemsTitle:"Tambahkan Item Ringkasan"},validationErrorMessage:{webMapError:"Tidak ada layer yang tersedia dalam webmap. Harap pilih webmap yang valid.",inputTypeFlagGreaterThanError:"Input bendera jenis tidak boleh lebih dari satu.",inputTypeFlagLessThanError:"Setidaknya satu input bendera jenis diperlukan.",inputTypeBarrierErr:"Input penghalang jenis tidak boleh lebih dari satu.",
inputTypeSkipErr:"Input lewati jenis tidak boleh lebih dari satu.",displayTextForButtonError:"Tampilkan teks untuk tombol 'Jalankan' tidak boleh kosong.",UnableToLoadGeoprocessError:"Tidak dapat memuat layanan geoprocessing.",invalidSummaryExpression:"Ekspresi tidak valid.",validSummaryExpression:"Sukses !",invalidProjectSettings:"Pengaturan Proyek Tidak Valid.\x3cbr/\x3e Harap pilih nilai dalam '${projectSetting}'."},hintText:{labelTextHint:"Petunjuk: Berikan label tampilan untuk panel hasil dalam parameter output.",
displayTextHint:"Petunjuk: Ini akan ditampilkan dalam panel detail untuk parameter output ini.",inputTextHint:"Petunjuk: Kembangkan ekspresi Anda di bawah dengan menggunakan tombol tambahkan item ringkasan.",expressionHint:"Petunjuk: Pilih item dan klik tambahkan untuk mengembangkan ekspresi."},_localized:{}}});