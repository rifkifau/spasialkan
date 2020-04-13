// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define({"widgets/DataAggregation/nls/strings":{_widgetLabel:"Duomen\u0173 agregavimas",startPage:{defaultStartPageInstructions:"\u0160is valdiklis pad\u0117s apdoroti ir pateikti failo duomenis pasirinktame \u017eem\u0117lapio sluoksnyje.\x3cbr/\x3e \x3cbr/\x3e Reik\u0161m\u0117s faile turi b\u016bti atskirtos kableliais, tabuliavimo \u017eingsniais, kabliata\u0161kiais arba vertikaliaisiais br\u016bk\u0161niais.",dragDrop:"Nuvilkti",browse:"Parinkti fail\u0105",or:"'ARBA'",userPrivilege:"J\u016bs\u0173 paskyra neturi teis\u0117s kurti arba modifikuoti duomen\u0173.",
userCredits:"\u201e${widgetName}\u201c reikia kredit\u0173, kad gal\u0117t\u0173 naudoti lokatori\u0173 ${locator}.",contactAdmin:"D\u0117l papildom\u0173 kredit\u0173 kreipkit\u0117s \u012f organizacijos administratori\u0173.",contactAdminEdit:"D\u0117l redagavimo teisi\u0173 kreipkit\u0117s \u012f organizacijos administratori\u0173.",canUseLocator:"Lokatorius ${locator} bus naudojamas elementams rasti.",notEnoughCredits:"Nepakanka kredit\u0173.",locationAndField:"Vietos ir lauko informacija",locationAndFieldHint:"Pasirinkite reik\u0161mes i\u0161 failo, kurios tur\u0117t\u0173 b\u016bti naudojamos tiksliniam sluoksniui atnaujinti.",
cannotUseLocator:"Nepavyksta naudoti ${widgetName}",noAnonymousEdit:"Sluoksnis ${layerName} nepalaiko anoniminio redagavimo.",pleaseLogin:"Jei norite \u012fjungti anonimin\u012f redagavim\u0105, prisijunkite prie organizacijos ${org} arba susisiekite su organizacijos administratoriumi.",invalidEdit:"Netinkamos teis\u0117s",unableToAccess:"Nepavyksta pasiekti ${layerName}",appropriateCredentials:"Patikrinkite, ar prisijung\u0117te naudodami tinkamus kredencialus.",shared:"Nor\u0117dami pra\u0161yti prieigos prie sluoksnio \u201e${layerName}\u201c kreipkit\u0117s \u012f organizacijos administratori\u0173.",
targetLayerLabel:"Tikslinis sluoksnis",homeButtonLabel:"Prad\u017eia"},mapping:{schemaMapping:"Lauko informacija",schemaMappingHint:"Pasirinkite failo laukus, kurie yra susij\u0119 su laukais, esan\u010diais sluoksnyje.",locationMapping:"Vietos informacija",locationMappingHint:"Pasirinkite adreso tip\u0105 arba koordina\u010di\u0173 informacij\u0105, kurios tikit\u0117s i\u0161 failo."},locationMapping:{locationMappingPageHint:"Pasirinkite vietos tip\u0105",useAddress:"Rasti pagal adres\u0105",useAddressHint:"Duomenyse yra adreso informacija",
useCoordinates:"Rasti pagal koordinates",useCoordinatesHint:"Duomenyse yra X/Y koordina\u010di\u0173 reik\u0161m\u0117s"},address:{addressPageHint:"Pasirinkite adreso tip\u0105",singleField:"Vienas laukas",singleFieldHint:"Pasirinkite lauk\u0105, kuriame yra adreso informacija",multiField:"Keli laukai",multiFieldHint:"Pasirinkite laukus, kuriuose yra adreso informacija"},coordinates:{coordinatesPageHint:"Pasirinkite laukus, kuriuose yra koordina\u010di\u0173 duomenys"},fieldMapping:{fieldMappingPageHint:"Pasirinkite \u0161altinio lauk\u0105, kuris susieja su tiksliniu lauku",
sourceField:"Atitinkantis \u0161altinio laukas",targetField:"Paskirties vietos laukas"},buttons:{addToMap:"Prid\u0117ti \u012f \u017eem\u0117lap\u012f",submit:"Pateikti",download:"Atsisi\u0173sti"},review:{matched:"Rasta",reviewMatched:"Viet\u0173 rasta",reviewMatchedHint:"Per\u017ei\u016br\u0117kite rastas vietas.",unMatched:"Nerasta",reviewUnMatched:"Viet\u0173 nerasta",reviewUnMatchedHint:"Per\u017ei\u016br\u0117kite nerastas vietas. Nepataisyti elementai nebus pateikti.",duplicate:"Dubliuoti",
reviewDuplicate:"Pasikartojan\u010dios vietos",reviewDuplicateHint:"Per\u017ei\u016br\u0117kite vietas, kurios jau buvo rastos sluoksnyje. Nei\u0161sp\u0119sti elementai nebus pateikti.",reviewLabelWithCount:"${totalMatchedFeatures} ${headerString} ${headerStringHint}",use:"Naudoti:",fromLayer:"Tikslin\u0117 informacija",target:"Paskirties vieta",source:"\u0160altinis",fromFile:"\u0160altinio informacija",locationControlHint:"Per\u017ei\u016br\u0117kite adreso informacij\u0105",duplicateAction:"Pasirinkite veiksm\u0105",
item:"\u012era\u0161yti:",locateFeature:"Rasti element\u0105",removeFeature:"Pa\u0161alinti element\u0105",featureLocated:"Vieta rasta",valuesDoNotMatch:"Nesutampa su esama reik\u0161me",sync:"Sinchronizuoti adreso informacij\u0105 su lauko informacija",noFeaturesSaved:"N\u0117 vienas elementas ne\u012fra\u0161ytas s\u0117kmingai",someFeaturesSaved:"Tiek element\u0173 \u012fra\u0161yta s\u0117kmingai: ${num}",someFeaturesNotSaved:"Tiek element\u0173 ne\u012fra\u0161yta s\u0117kmingai: ${num}.",feature:"Per\u017ei\u016br\u0117ti elemento informacij\u0105",
locationInfo:"Per\u017ei\u016br\u0117ti vietos informacij\u0105",selectValue:"Pasirinkite reik\u0161m\u0119",reviewData:"Per\u017ei\u016br\u0117ti duomenis",reviewDataHint:"Per\u017ei\u016br\u0117kite savo duomenis prie\u0161 pateikdami \u012f sluoksn\u012f.",reviewFeatureHint:"Per\u017ei\u016br\u0117kite arba redaguokite elemento ir vietos informacij\u0105.",duplicateModify:"Dublikatas, reikalingas pakeitimas",duplicateSave:"\u012era\u0161yti kaip nauj\u0105 element\u0105"},warningsAndErrors:{invalidCSV:"Gaunant elementus i\u0161 CSV saugyklos \u012fvyko klaida. Patikrinkite, ar pasirinktas tinkamas CSV failas.",
noLayersWarning:"Nesukonfig\u016bruotas tinkamas tikslinis sluoksnis. Patikrinkite konfig\u016bracij\u0105.",loadWarning:"\u0160iam valdikliui reikia element\u0173 paslaugos duomen\u0173 \u0161altinio. Sukonfig\u016bruokite valdikl\u012f ir apibr\u0117\u017ekite duomen\u0173 \u0161altin\u012f.",saveError:"\u012era\u0161ant elementus \u012fvyko klaida.",consumesCredits:"\u0160is \u012frankis naudoja kreditus, kai pasitelkiama ArcGIS Online pasaulinio geokodavimo paslauga",noValue:"Pasirinkti lauk\u0105",
mappingTitle:"",locationMappingComplete:"Vietos susiejimas atliktas",fieldMappingComplete:"Lauko susiejimas atliktas",settingsCleared:"Parametrai bus i\u0161valyti.",proceed:"Norite t\u0119sti?",itemMoveMatch:"Elementas buvo rastas ir perkeltas \u012f rast\u0173 viet\u0173 s\u0105ra\u0161\u0105",itemMoveUnMatched:"Nepavyksta rasti elemento. Perkelta \u012f nerast\u0173 viet\u0173 s\u0105ra\u0161\u0105.",itemWillBeLocated:"Elementas bus pa\u0161alintas i\u0161 pasikartojan\u010di\u0173 viet\u0173 s\u0105ra\u0161o.",
cannotLocate:"Nepavyksta rasti elemento. Patikrinkite vietos informacij\u0105.",invalidMessage:"Netinkama reik\u0161m\u0117.",rangeMessage:"Reik\u0161m\u0117 turi b\u016bti trumpesn\u0117 nei ${num} simb.",locatorError:"Lokatorius netinkamas arba nepasiekiamas.",notConfigured:"esam\u0173 ie\u0161kojimo parink\u010di\u0173 lokatorius nesukonfig\u016bruotas",noMoreLocators:"papildomi lokatoriai nesukonfig\u016bruoti"},featureToolbar:{locate:"Rasti",save:"\u012era\u0161yti \u012fra\u0161\u0105",cancel:"At\u0161aukti redagavimus",
cancelTitle:"At\u0161aukti redagavimus",cancelMessage:"At\u0161aukti esamo \u012fra\u0161o redagavimus?"},_localized:{}}});