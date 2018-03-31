injectTapEventPlugin();

var defaultFill = new ol.style.Fill({
  color: 'rgba(255,255,255,0.4)'
});
var defaultStroke = new ol.style.Stroke({
  color: '#3399CC',
  width: 1.25
});
var defaultSelectionFill = new ol.style.Fill({
  color: 'rgba(255,255,0,0.4)'
});
var defaultSelectionStroke = new ol.style.Stroke({
  color: '#FFFF00',
  width: 1.25
});


                    var textStyleCache_trip={}
                    var clusterStyleCache_trip={}
                    var style_trip = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_trip'
        };
                        var features = feature.get('features');
                            var size = 0;
                            for (var i = 0, ii = features.length; i < ii; ++i) {
                              if (features[i].selected) {
                                return null;
                              }
                              if (features[i].hide !== true) {
                                size++;
                              }
                            }
                            if (size === 0) {
                              return null;
                            }
                            if (size != 1){
                                var features = feature.get('features');
                                var numVisible = 0;
                                for (var i = 0; i < size; i++) {
                                    if (features[i].hide != true) {
                                        numVisible++;
                                    }
                                }
                                if (numVisible === 0) {
                                    return null;
                                }
                                if (numVisible != 1) {
                                    var color = '#3399CC'
                                    var style = clusterStyleCache_trip[numVisible]
                                    if (!style) {
                                        style = [new ol.style.Style({
                                            image: new ol.style.Circle({
                                                radius: 14,
                                                stroke: new ol.style.Stroke({
                                                    color: '#fff'
                                                }),
                                                fill: new ol.style.Fill({
                                                    color: color
                                                })
                                            }),
                                            text: new ol.style.Text({
                                                text: numVisible.toString(),
                                                fill: new ol.style.Fill({
                                                    color: '#fff'
                                                }),
                                                stroke: new ol.style.Stroke({
                                                  color: 'rgba(0, 0, 0, 0.6)',
                                                  width: 3
                                                })
                                            })
                                        })];
                                        clusterStyleCache_trip[numVisible] = style;
                                    }
                                    return style;
                                }
                            }
                            feature = feature.get('features')[0];

                        var value = "";
                        var style = [ new ol.style.Style({
                                image: new ol.style.Icon({
                  scale: pixelsFromMm(10) / 100.0,
                  anchorOrigin: 'top-left',
                  anchorXUnits: 'fraction',
                  anchorYUnits: 'fraction',
                  anchor: [0.5, 0.5],
                  size:[100,100],
                  src: "./data/styles/red-marker.png",
            }),
zIndex: 0
                            })
                            ];
                        var allStyles = [];

                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_trip = function(feature, resolution){
                        var context = {
            feature: feature,
            variables: {},
            layer: 'lyr_trip'
        };
                        var value = "";
                        var style = [ new ol.style.Style({
                                image: new ol.style.Icon({
                  scale: pixelsFromMm(10) / 100.0,
                  anchorOrigin: 'top-left',
                  anchorXUnits: 'fraction',
                  anchorYUnits: 'fraction',
                  anchor: [0.5, 0.5],
                  size:[100,100],
                  src: "./data/styles/red-marker_selected.png",
            }),
zIndex: 0
                            })
                            ]
                        var allStyles = [];

                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var baseLayers = [new ol.layer.Tile({
    type: 'base',
    title: 'ESRI world imagery',
    source: new ol.source.XYZ({
        crossOrigin: 'anonymous',
        attributions: [new ol.Attribution({ html: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'})],
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
    }),
    projection: 'EPSG:3857'
})
];var baseLayersGroup = new ol.layer.Group({showContent: true,
                    'isGroupExpanded': false, 'type': 'base-group',
                    'title': 'Base maps', layers: baseLayers});var overviewMapBaseLayer = baseLayersGroup;
var overlayLayers = [new ol.layer.Tile({
	type: 'base-overlay',
	title: 'Hydda roads and labels',
	source: new ol.source.XYZ({
		url: 'https://s.tile.openstreetmap.se/hydda/roads_and_labels/{z}/{x}/{y}.png'
	}),
    projection: 'EPSG:3857'
})
];var overlaysGroup = new ol.layer.Group({showContent: true,
                        'isGroupExpanded': false, 'title': 'Overlays', layers: overlayLayers});
var cluster_trip = new ol.source.Cluster({
                    distance: 40.0,
                    source: new ol.source.Vector(),
                });
                var lyr_trip = new ol.layer.Vector({
                    opacity: 1.0,
                    source: cluster_trip,
                    style: style_trip,
                    selectedStyle: selectionStyle_trip,
                    title: "Trip",
                    id: "Trip20171217163101227",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "",
                    attributes: ["Id", "objek", "urutan", "Deskripsi", "Gambar"],
                    geometryType: "Point"
                });
var lyr_trip_overview = new ol.layer.Vector({
                    source: cluster_trip,
                    style: style_trip});
trip_geojson_callback = function(geojson) {
                              lyr_trip.getSource().getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                              lyr_trip_overview.getSource().setSource(lyr_trip.getSource().getSource());
                        };

lyr_trip.setVisible(true);
for (var i=0;i<baseLayers.length;i++){baseLayers[i].setVisible(false);}
baseLayers[0].setVisible(true);
var layersList = [lyr_trip];layersList.unshift(baseLayersGroup);layersList.push(overlaysGroup);
var layersMap  = {'lyr_trip':lyr_trip};
var bookmarks = [{"name": "Bandara Adisucipto", "extent": [12293828.453363625, -869374.5324010311, 12293828.453363625, -869374.5324010311], "description": "Perjalanan dimulai dari Bandara Adisucipto Yogyakarta pada 2 Desember 2017 pukul 07.30. Cukup khawatir mengingat sejak sekitar 28 November Yogyakarta dan sekitarnya mengalami hujan lebat yang diduga akibat siklon tropis cempaka. Untungnya pagi itu cuaca sudah cukup bersabahat, sehingga tidak ada permasalahan selama penerbangan. "}, {"name": "Bandara Soekarno Hatta Terminal 1", "extent": [11872991.018352663, -683758.2048306855, 11872991.018352663, -683758.2048306855], "description": "Tiba di Terminal 1 sekitar pukul 08.45, namun sayangnya tidak sempat menjajal skytrain (sejujurnya waktu itu memang tidak ada niat untuk mencoba naik). Pukul 12.00 bertolak ke Banda Aceh bersama Bang Deddy Huang (pemenang kompetisi Blog #GeospasialUntukKita) dengan transit di Bandara Kualanamu Medan. "}, {"name": "Bandara Kualanamu", "extent": [11007139.558681281, 404948.2997072801, 11007139.558681281, 404948.2997072801], "description": "Transit tanpa keluar dari pesawat, karena memang pesawat yang digunakan sama. "}, {"name": "Bandara Sultan Iskandar Muda", "extent": [10621787.437750496, 615188.4434165402, 10621787.437750496, 615188.4434165402], "description": "<img  src=\"Gambar/Sabang Sail 2017_Bandara Sultan Iskandar Muda Banda Aceh.jpg\" alt=\"Sail Sabang 2017\"/></a>\nTerkenal dengan julukan serambi Mekah, tak heran jika beberapa bangunan di Aceh sarat nuansa Islami, termasuk bangunan bandaranya. Sekilas terlihat tiga kubah di bangunan terminal bandara ini sehingga terkesan seperti Masjid.\n<img  src=\"Gambar/Sabang Sail 2017_Bandar Udara Sultan Iskandar Muda Banda Aceh.jpg\" alt=\"Sail Sabang 2017\"/></a>"}, {"name": "Hotel Mekkah", "extent": [10612955.79462892, 620622.7487535124, 10612955.79462892, 620622.7487535124], "description": "Lokasinya sekitar 30 menit perjalanan mobil dari Bandara Iskandar Muda. Lokasi Hotel Mekah secara relatif bersebelahan dengan Hotel Madinah. Mengapa bisa demikian? mungkin saja karena pemilik hotelnya sama. Tapi entahlah. Jaraknya kedua hotel hanya beberapa meter, beda jauh jika dibandingkan Mekah di Arab Saudi yang jaraknya ratusan km dengan Madinah (tidak ada hubungannya sebenarnya \ud83d\ude0a). "}, {"name": "Tugu Simpang Lima", "extent": [10611170.786594052, 619464.919783865, 10611170.786594052, 619464.919783865], "description": "<img  src=\"Gambar/Sabang Sail 2017_Tugu Simpang Lima Banda Aceh.jpeg\" alt=\"Sail Sabang 2017\"/></a>\nJaraknya hanya sekitar 2 km dari Hotel Mekah, dekat dengan kedai yang menjual Mie Aceh dan dekat pula dengan kedai kopi (bagi yang mau mencoba kopi Sanger). Terdapat tulisan sponsor di sekitar bangunan tugu, yang menurut hemat saya sedikit merusak estetikanya. "}, {"name": "Masjid Raya Baiturrahman", "extent": [10610670.962080391, 619194.143747613, 10610670.962080391, 619194.143747613], "description": "<img  src=\"Gambar/Sabang Sail 2017_Masjid Raya Baiturrahman Banda Aceh 1.jpeg\" alt=\"Sail Sabang 2017\"/></a>\nBelum lengkap rasanya jika pergi ke Banda Aceh tapi tidak mengunjungi Masjid Raya Baiturrahman. Kabarnya, masjid ini dibangun oleh Sultan Iskandar Muda, yang sekarang namanya diabadikan sebagai nama Bandara Aceh. Saat Tsunami Aceh tahun 2004 silam, Masjid ini adalah salah satu yang selamat. \n<img  src=\"Gambar/Sabang Sail 2017_Masjid Raya Baiturrahman Banda Aceh 2.jpeg\" alt=\"Sail Sabang 2017\"/></a>"}, {"name": "Museum Tsunami Aceh", "extent": [10610430.289341291, 618535.9422833655, 10610430.289341291, 618535.9422833655], "description": "<img  src=\"Gambar/Sabang Sail 2017_Museum Tsunami Banda Aceh 2004.jpeg\" alt=\"Sail Sabang 2017\"/></a>\nLokasinya berada di sebelah selatan Masjid Raya Baiturrahman, dan hanya membutuhkan waktu sekitar 15 menit dengan berjalan kaki. Museum ini buka mulai jam 09.00 dan pada waktu itu biaya masuk masih gratis. Selain koleksi benda/barang saksi sejarah Tsunami 2004, bagian yang paling \u2018menyentuh\u2019 dari Museum ini adalah lorong masuk dan ruang sumur doa.\n<img  src=\"Gambar/Sabang Sail 2017_Museum Tsunami Banda Aceh.jpeg\" alt=\"Sail Sabang 2017\"/></a>"}, {"name": "PLTD Apung", "extent": [10609501.328190621, 618394.907955803, 10609501.328190621, 618394.907955803], "description": "<img  src=\"Gambar/Sabang Sail 2017_Situs Tsunami PLTD Apung Banda Aceh.jpeg\" alt=\"Sail Sabang 2017\"/></a>\nMonumen PLTD (Pembangkit Listrik Tenaga Diesel) Apung ini berlokasi di Desa Plunge Blang Cut, Kecamatan Jaya Baru. Sesuai namanya, Kapal yang ada di monumen ini dulunya adalah sumber tenaga listrik. Kapal ini terhempas sampai ke area pemukiman warga akibat gelombang tsunami tahun 2004 silam.\n<img  src=\"Gambar/Sabang Sail 2017_Situs Tsunami PLTD Apung Banda Aceh 2004.jpeg\" alt=\"Sail Sabang 2017\"/></a>"}, {"name": "Pelabuhan Ulee Lheue", "extent": [10608060.297382306, 620450.0573594584, 10608060.297382306, 620450.0573594584], "description": "<img  src=\"Gambar/Sabang Sail 2017_Pelabuhan Penyeberangan Ulee Lheue Banda Aceh.jpeg\" alt=\"Sail Sabang 2017\"/></a>\nLokasinya sekitar 15 menit perjalanan mobil dari Monumen PLTD Apung. Terdapat 2 jenis kapal yang melayani penyeberangan ke Sabang (Pulau Weh) di pelabuhan ini, yakni kapal cepat (45 menit) dan kapal lambat (antara 1,5 \u2013 2 jam). Pada hari itu (3 Desember 2017), ada 6 jadwal penyeberangan dengan kapal cepat (Express Bahari), antara lain jam 06.00, 08.00, 10.00, 11.00, 14.00, dan 16.00. Namun jadwal tersebut pada dasarnya bisa berubah-ubah tergantung cuaca. Harga tiket Express Bahari ada dua macam, yakni kelas biasa (80 ribu rupiah) dan VIP (100 ribu rupiah)."}, {"name": "Pelabuhan Balohan", "extent": [10614011.659999097, 649817.1216369732, 10614011.659999097, 649817.1216369732], "description": "<img  src=\"Gambar/Sabang Sail 2017_Pelabuhan Balohan Bebas Sabang Pulau Weh.jpeg\" alt=\"Sail Sabang 2017\"/></a>\nPelabuhan ini bisa dikatakan sebagai pintu masuk Pulau Weh untuk jalur laut. Balohan sendiri sebenarnya adalah nama Desa di Kecamatan Sukajaya, Sabang.\n<img  src=\"Gambar/Sabang Sail 2017_Pelabuhan Balohan Sabang Pulau Weh.jpeg\" alt=\"Sail Sabang 2017\"/></a>"}, {"name": "Hotel Sisca", "extent": [10610353.701531628, 656651.7607911486, 10610353.701531628, 656651.7607911486], "description": "<img  src=\"Gambar/Sabang Sail 2017_Penginapan Hotel Sisca Sabang Pulau Weh.jpeg\" alt=\"Sail Sabang 2017\"/></a>\nLokasinya kurang lebih 11 km dari Pelabuhan Balohan. Salah satu yang membuat hotel ini terbilang nyaman adalah ada jendela yang bisa dibuka (hehe \ud83d\ude0a). Lokasinya cukup strategis, yakni dipertengahan antara Sabang Fair dengan Dermaga CT-3 (tempat Expo Sail Sabang 2017). "}, {"name": "Misbar BeKraf (TEDx Sabang)", "extent": [10610054.029462412, 657313.0403437509, 10610054.029462412, 657313.0403437509], "description": "<img  src=\"Gambar/Sabang Sail 2017_TEDx Misbar BeKraf Sabang Fair Pulau Weh.jpeg\" alt=\"Sail Sabang 2017\"/></a>\nPengalaman pertama mengikuti acara TEDx secara langsung (biasanya hanya menyaksikan via YouTube), yakni di TEDx Sabang, Misbar BeKraf, Sabang Fair. Awalnya hanya ingin muter-muter ke Sabang Fair, daripada berdiam diri di hotel, eh malah ketemu acara yang cukup menarik, ya sudah ikutan masuk. Acara menjadi sedikit syahdu lantaran ditemani gerimis."}, {"name": "Kapal Pataya III Terdampar", "extent": [10603649.26255962, 652001.1796415688, 10603649.26255962, 652001.1796415688], "description": "<img  src=\"Gambar/Sabang Sail 2017_Kapal Pataya III Terdampar Pade Resort Sabang Pulau Weh.jpeg\" alt=\"Sail Sabang 2017\"/></a>\nKapal Pataya III terdampar di pantai tepat di depan Pade Resort. Kalau kita cari di Citra Google Earth dengan kata kunci Pade Resort Sabang, maka akan terllihat ada kapal tepat di depannya. "}, {"name": "Goa Sarang", "extent": [10604245.15579384, 649804.4771941655, 10604245.15579384, 649804.4771941655], "description": "<img  src=\"Gambar/Sabang Sail 2017_Goa Sarang Sabang Pulau Weh.jpeg\" alt=\"Sail Sabang 2017\"/></a>\nLokasinya kurang lebih 5 menit perjalanan mobil dari titik terdamparnya kapal Pataya III. Untuk mencapai Goa, pengunjung harus turun mendekati pantai. Namun demikian kalaupun mau menikmati pemandangan dari atas juga sudah lumayan menarik. Terdapat dua ayunan yang bisa dijadikan sarana foto dengan berlatarkan laut. "}, {"name": "Tugu 0 km Indonesia", "extent": [10599483.130616682, 658614.6927483713, 10599483.130616682, 658614.6927483713], "description": "<img  src=\"Gambar/Sabang Sail 2017_Tugu Monumen KM Nol Indonesia Sabang Pulau Weh.jpeg\" alt=\"Sail Sabang 2017\"/></a>\nPosisi absolutnya berada di 95o 12\u2019 59,02\u201d BT dan 05o 54\u2019 21,99\u201d LU serta 35,9 meter di atas permukaan laut (dalam Elipsoid WGS 84). Kabarnya kalau berkunjung ke tugu km 0 ini bisa dapat sertifikat sebagai bukti telah berkunjung ke ujung Barat Indonesia. Tapi, sayangnya ketika datang pada 4 Desember 2017 kemarin Saya tidak diberi, hehe..\n<img  src=\"Gambar/Sabang Sail 2017_Tugu Monumen KM 0 Indonesia Sabang Pulau Weh.jpeg\" alt=\"Sail Sabang 2017\"/></a>\n"}, {"name": "Taman Hutan Wisata Pulau Weh", "extent": [10599466.766651535, 658695.2705296591, 10599466.766651535, 658695.2705296591], "description": "<img  src=\"Gambar/Sabang Sail 2017_Taman Hutan Wisata Sabang Pulau Weh.jpeg\" alt=\"Sail Sabang 2017\"/></a>\nLokasinya tidak jauh dari tugu km 0 Indonesia, hanya 2 menit jalan kaki. Kalau beruntung bisa menemukan beberapa ekor monyet.\n<img  src=\"Gambar/Sabang Sail 2017_Taman Hutan Wisata KM 0 Sabang Pulau Weh.jpeg\" alt=\"Sail Sabang 2017\"/></a>"}, {"name": "Pantai Rubiah", "extent": [10604085.078366075, 655693.2592516874, 10604085.078366075, 655693.2592516874], "description": "<img  src=\"Gambar/Sabang Sail 2017_Spot Menyelam Sabang Pantai Pulau Rubiah.jpeg\" alt=\"Sail Sabang 2017\"/></a>\nPenyeberangan ke Pulau Rubiah dilakukan dari Pantai Iboih. Penyewaan peralatan menyelam juga dilakukan di Pantai Iboih. Salah satu yang menjadi daya tarik Pantai Rubiah adalah adanya ikan badut, meskipun spotnya terpisah. Terlepas dari itu, kabarnya area menyelam yang memiliki pemandangan jauh lebih bagus adalah yang berada di balik Pulau Rubiah (pantai yang menghadap ke laut lepas).\n<img  src=\"Gambar/Sabang Sail 2017_Spot Menyelam Ikan Badut Sabang Pantai Pulau Rubiah.jpeg\" alt=\"Sail Sabang 2017\"/></a>"}, {"name": "Situs Karantina Haji Pulau Rubiah", "extent": [10604177.807501907, 655744.5132511035, 10604177.807501907, 655744.5132511035], "description": "<img  src=\"Gambar/Sabang Sail 2017_Situs Karantina Haji Sabang Pulau Rubiah.jpeg\" alt=\"Sail Sabang 2017\"/></a>\nSelain spot menyelam, di Pulau Rubiah juga terdapat Situs Kompleks Makam Siti Rubiah dan Situs Karantina Haji. Situs Karantina Haji yang ada di sana adalah dari Zaman Kolonial (tahun 1920). Berdasarkan keterangan yang tertulis di dekat bangunan, Pulau Rubiah dijadikan sebagai tempat karantina bagi jamaah haji yang baru pulang dari Mekah dan merupakan pusat karantina haji pertama di Indonesia.\n<img  src=\"Gambar/Sabang Sail 2017_Situs Karantina Haji Sabang Pulau Rubiah 2.jpeg\" alt=\"Sail Sabang 2017\"/></a>"}, {"name": "Expo Sail Sabang 2017 (Dermaga CT-3)", "extent": [10611258.951630758, 655743.1703510163, 10611258.951630758, 655743.1703510163], "description": "<img  src=\"Gambar/Sabang Sail 2017_Pameran Expo Dermaga CT-3 Sabang Pulau Weh.jpeg\" alt=\"Sail Sabang 2017\"/></a>\nDermaga CT-3 adalah lokasi Expo Sail Sabang 2017 sekaligus lokasi dilangsungkannya acara puncak Sail Sabang 2017. Sayangnya, karena selama rangkaian Sail Sabang sering turun hujan, lokasinya pada waktu itu cukup becek, terutama di area tempat parkir serta lokasi stan makanan dan panggung hiburan. Sedangkan stan instansi, produk khas Sabang, dll tidak begitu terpengaruh hujan karena dibuat penutup. Beberapa stan yang ada di Expo Sail Sabang 2017 antara lain dari Kementerian Pariwisata, Badan Informasi Geospasial, Pos Indonesia, Pertamina, Kementerian Kelautan dan Perikanan, Kementerian ESDM, Telkom Indonesia, Dinas Pariwisata Riau, Kementerian Koperasi dan Usaha Kecil Menengah, Kementerian Perdagangan, dst.\n<img  src=\"Gambar/Sabang Sail 2017_Pameran dan Expo Dermaga CT-3 Sabang Pulau Weh.jpeg\" alt=\"Sail Sabang 2017\"/></a>"}, {"name": "I Love Sabang", "extent": [10612085.053571936, 655304.6031136492, 10612085.053571936, 655304.6031136492], "description": "<img  src=\"Gambar/Sabang Sail 2017_Taman I Love Sabang Pulau Weh.jpeg\" alt=\"Sail Sabang 2017\"/></a>\nTaman ini adalah salah satu yang wajib dikunjungi ketika berkunjung ke Sabang. Ya hitung-hitung untuk foto-foto sebagai bukti sudah pernah mengunjungi Sabang. Salain itu, dibalik taman inilah ternyata lokasi bandara Maimun Salaeh, Sabang. Saya baru mengetahui setelah sampai rumah dan melihat citra satelitnya. Sedikit menyesal mengapa tidak menyempatkan untuk sekedar melihat langsung bandaranya. "}, {"name": "Tulisan Pulau Weh", "extent": [10610243.60655523, 657433.121139496, 10610243.60655523, 657433.121139496], "description": "<img  src=\"Gambar/Sabang Sail 2017_Taman Pantai Paradiso Tulisan Pulau Weh Sabang.jpeg\" alt=\"Sail Sabang 2017\"/></a>\nMerupakan spot foto dan selfie lainnya setelah taman I Love Sabang. Taman ini lokasinya langsung menghadap laut lepas dan tidak jauh dari Misbar BeKraf, Sabang Fair. "}, {"name": "Masjid Agung Babussalam Sabang", "extent": [10611433.277953343, 657256.7490534476, 10611433.277953343, 657256.7490534476], "description": "<img  src=\"Gambar/Sabang Sail 2017_Masjid Agung Babussalam Sabang Pulau Weh.jpeg\" alt=\"Sail Sabang 2017\"/></a>\nMasjid ini memiliki empat menara di setiap sudutnya, sebuah kubah ditengahnya, serta halaman berkeramik yang cukup luas. Lokasi Masjid Agung Babussalam Sabang tidak jauh dari Tugu Simpang Garuda serta kedai makan De Sagoe (bagi yang mau menikmati sate gurita ataupun Mie Aceh).\n<img  src=\"Gambar/Sabang Sail 2017_Masjid Agung Babussalam Sabang Pulau Weh 2.jpeg\" alt=\"Sail Sabang 2017\"/></a>"}, {"name": "Benteng Anoe Itam", "extent": [10616928.008018896, 652042.9189642711, 10616928.008018896, 652042.9189642711], "description": "<img  src=\"Gambar/Sabang Sail 2017_Benteng Jepang Anoi Itam Pulau Weh Sabang.jpeg\" alt=\"Sail Sabang 2017\"/></a>\nBenteng ini merupakan salah satu banteng yang digunakan oleh tantara Jepang untuk bertahan dari musuh sekaligus untuk menyimpan peluru dan senjata ketika perang dunia II. Di depan banteng ini terdapat sebuah Meriam yang memiliki panjang sekitar 3 meter. Dinamakan Benteng Anoi Itama karena terletak di Anoi Itam. Biaya masuk ke banteng ini gratis, hanya saja sangat disayangkan terdapat beberapa coretan (vandalisme) dibeberapa tempat di kawasan banteng ini.\n<img  src=\"Gambar/Sabang Sail 2017_Benteng Jepang Anoe Itam Pulau Weh Sabang.jpeg\" alt=\"Sail Sabang 2017\"/></a>"}, {"name": "Hotel Kyriad Muraya", "extent": [10611231.34439704, 619513.6841944801, 10611231.34439704, 619513.6841944801], "description": "<img  src=\"Gambar/Sabang Sail 2017_Hotel Kyriad Muraya Banda Aceh.jpeg\" alt=\"Sail Sabang 2017\"/></a>\nHotel ini adalah penginapan setelah mengikuti rangkaian Sail Sabang 2017, atau dengan kata lain sebelum kembali ke Yogyakarta. Selain lokasinya yang sangat dekat dengan simpang lima Aceh, hotel ini juga dekat dengan toko-toko penjual oleh-oleh khas Aceh, yakni sepanjang Jalan Sri Ratu Syafiatuddin. Berdasarkan info dari resepsionis hotel, Kyriad Muraya baru diresmikan pada 16 November 2017 lalu. "}, {"name": "Bandara Hang Nadim", "extent": [11590074.31361341, 125053.19532122163, 11590074.31361341, 125053.19532122163], "description": "Perjalanan pulang ditempuh dengan jalur udara dari Bandara Sultan Iskandar Muda, lalu transit di Bandara Hang Nadim Batam, baru kemudian menuju Bandara Adi Sucipto di Yogyakarta. "}]
var view = new ol.View({ maxZoom: 17, minZoom: 1, projection: 'EPSG:3857'});
var originalExtent = [10213881.230486, -907850.572102, 12679413.989529, 697016.291608];
var unitsConversion = 111325.0;

var map = new ol.Map({
  layers: layersList,
  view: view,
  controls: [new ol.control.Attribution({collapsible: false}),
new ol.control.MousePosition({"projection": "EPSG:4326", "undefinedHTML": "&nbsp;", "coordinateFormat": ol.coordinate.createStringXY(4)}),
new ol.control.ScaleLine({"minWidth": 64, "units": "metric"})]
});



var TabbedApp = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: getMuiTheme()
    };
  },
  getInitialState: function() {
    return {leftNavOpen: false, addLayerOpen: false};
  },
  componentDidMount: function() {
    map.addControl(new ol.control.OverviewMap({collapsed: true, layers: [overviewMapBaseLayer, lyr_trip_overview]}));
  },
  leftNavClose: function(value) {
    this.setState({
      leftNavOpen: false
    }, function() {
      map.updateSize();
    });
  },
  leftNavOpen: function(value) {
    this.setState({
      leftNavOpen: true
    }, function() {
      map.updateSize();
    });
  },
  layerListOpen: function(value) {
    this.setState({
      addLayerOpen: true
    });
  },
  layerListClose: function(value) {
    this.setState({
      addLayerOpen: false
    });
  },
  _toggle: function(el) {
    if (el.style.display === 'block') {
      el.style.display = 'none';
    } else {
      el.style.display = 'block';
    }
  },
  _toggleEdit: function() {
    this._toggle(document.getElementById('edit-tool-panel'));
  },
  _toggleWFST: function() {
    this._toggle(document.getElementById('wfst'));
  },
  render: function() {
    var leftNavWidth = 360;
    var toolbarOptions = Object.assign({
      style: {left: this.state.leftNavOpen ? leftNavWidth : 0, width: this.state.leftNavOpen ? 'calc(100% - ' + leftNavWidth + 'px)' : '100%'},
      showLeftIcon: !this.state.leftNavOpen,
      onLeftIconTouchTap: this.leftNavOpen
    }, {title:"[Story Maps] Menjelahi Banda Aceh & P. Weh #SailSabang2017"});
    return React.createElement("div", {id: 'content'},
      React.createElement(LeftNav, {tabList: [React.createElement(Tab, {key:1, value:1, label:'About'},
                                    React.createElement("div", {id:'about-tab-panel', className:'about-tab-panel'},
                                        React.createElement("div", {dangerouslySetInnerHTML:{__html: 'Sail Sabang ialah rangkaian dari Sail Indonesia seri ke-9 yang bertujuan mempromosikan Sabang sebagai wisata bahari kelas dunia. Sail Sabang 2017 berlangsung pada 28 November-5 Desember dengan tema "Sabang Menuju Gerbang Destinasi Wisata Bahari Dunia". Puncak acara diselenggarakan pada 2 Desember di Sabang Fair, Kota Sabang, Banda Aceh.<br/><img  src="Gambar/Sabang Sail 2017_Menjelajahi Banda Aceh dan Pulau Weh Sabang.jpg" alt="Sail Sabang 2017"/></a>'}})
                                    )
                                ),
React.createElement(Tab,{key:2, value:2, label:"Geocoding"},
                                    React.createElement("div", {id:"geocoding-tab"},
                                        React.createElement(Geocoding, {maxResults:5})
                                    ),
                                    React.createElement("div", {id:"geocoding-results"},
                                        React.createElement(GeocodingResults, {map:map,
                                        zoom:10})
                                    )
                                ),
React.createElement(Tab,{key:3, value:3, label:'Layers', onActive: this.layerListOpen.bind(this)},
                                 React.createElement("div",{id: "layerlist"},
                                    React.createElement(LayerList, {showOpacity:false, showDownload:false,
                                        addLayer: {
                                          open: this.state.addLayerOpen,
                                          onRequestClose:this.layerListClose.bind(this)
                                        },
                                        inlineDialogs: true,
                                        icon: React.createElement(Button, {buttonType: "Flat", label: "ADD"}),
                                        showZoomTo:false, allowReordering:false,
                                        allowFiltering:true,
                                        downloadFormat:'GeoJSON', showUpload:true, map:map,
                                        includeLegend:true, allowStyling:true, showTable:true})))], open: this.state.leftNavOpen, onRequestClose: this.leftNavClose}),
      React.createElement("div", undefined,
        React.createElement(Header, toolbarOptions ,
React.createElement(ZoomToLatLon, {map:map}),
React.createElement(IconMenu, {anchorOrigin: {horizontal: 'right', vertical: 'bottom'}, targetOrigin: {horizontal: 'right', vertical: 'top'}, iconButtonElement: React.createElement(Button, {buttonType: 'Icon', iconClassName: "headerIcons ms ms-link", tooltip: "Links"})},
                                        React.createElement(MenuItem, {primaryText: "Blog", href:"http://https://spasialkan.com/blog"}),
React.createElement(MenuItem, {primaryText: "Home", href:"http://https://spasialkan.com/"})
                                    ),
React.createElement(DrawFeature, {toggleGroup: 'navigation', map: map}),
React.createElement(Navigation, {toggleGroup: 'navigation', secondary: true}),
React.createElement(Measure, {toggleGroup:'navigation', map:map, geodesic:true}),
React.createElement(Select, {toggleGroup: 'navigation', map:map}),
React.createElement(Button, {buttonType: 'Icon', iconClassName: 'headerIcons ms ms-help', tooltip: 'Help', onTouchTap: function(){window.open('help/help.html','_blank')}})),
        React.createElement("div", {className: 'map', style: {left: this.state.leftNavOpen ? leftNavWidth : 0, width: this.state.leftNavOpen ? 'calc(100% - ' + leftNavWidth + 'px)' : '100%'}},
          React.createElement(MapPanel, {id: 'map', useHistory: true, extent: originalExtent, map: map}
            ,
React.createElement("div", {id: 'bookmarks-panel'},
                                        React.createElement(Bookmarks, {introTitle:'Sail Sabang 2017', introDescription:'[Geser untuk melihat Perjalanan Saya Menjelajahi Banda Aceh dan Pulau Weh selama Sail Sabang 2017]. Sail Sabang ialah rangkaian dari Sail Indonesia seri ke-9 yang bertujuan mempromosikan Sabang sebagai wisata bahari kelas dunia. Sail Sabang 2017 berlangsung pada 28 November-5 Desember dengan tema "Sabang Menuju Gerbang Destinasi Wisata Bahari Dunia". Puncak acara diselenggarakan pada 2 Desember di Sabang Fair, Kota Sabang, Banda Aceh.', dots:false,
                                            animatePanZoom:true, menu: false, map: map, bookmarks: bookmarks,
                                            width:'450px' })
                                      ),
React.createElement("div", {id: 'popup', className: 'ol-popup'},
                                    React.createElement(InfoPopup, {toggleGroup: 'navigation', map: map, hover: false})
                                  )
          )
          ,
React.createElement("div", {id:'geolocation-control'},
                                    React.createElement(Geolocation, {tooltipPosition: 'bottom-right', map:map})
                                  ),
React.createElement(LoadingPanel, {map:map}),
React.createElement("div", {id: 'editpopup', className: 'ol-popup'},
                                React.createElement(EditPopup, {toggleGroup: 'navigation', map: map})
                            ),
React.createElement("div", {id:'home-button'},
                                    React.createElement(HomeButton, {tooltipPosition: 'bottom-right', map:map})
                                  ),
React.createElement("div", {id:'rotate-button'},
                                    React.createElement(Rotate, {
                                    autoHide:false,
                                    duration:250,
                                    map: map,
                                    tooltipPosition: 'bottom-right'})
                                  ),
React.createElement("div", {id:'zoom-slider'},
                                    React.createElement(ZoomSlider, {map:map, refreshRate:100})
                                  )
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(IntlProvider, {locale: 'en'}, React.createElement(TabbedApp)), document.getElementById('main'));
