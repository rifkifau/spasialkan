// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/ThreatAnalysis/nls/strings":{_widgetLabel:"A fenyeget\u00e9sek elemz\u00e9se",threatAnalysisMainPageTitle:"A JCAT terrorizmus elleni \u00fatmutat\u00f3ja alapj\u00e1n",jcatURL:"https://www.dni.gov/nctc/jcat/references.html",inputLocation:"Bemeneti hely",interactive:"Interakt\u00edv",fromCoord:"R\u00f6gz\u00edtett koordin\u00e1ta",existingFeature:"Megl\u00e9v\u0151 vektoros elemb\u0151l",threatAnalysisCoordInputLabel:"Fenyeget\u00e9s helye",enterCoords:"Koordin\u00e1t\u00e1k megad\u00e1sa",
threatAddPointToolTip:"Fenyeget\u00e9s hely\u00e9nek hozz\u00e1ad\u00e1sa",threatDrawPointToolTip:"Kattintson ide a fenyeget\u00e9s hely\u00e9nek hozz\u00e1ad\u00e1s\u00e1hoz",threatType:"Fenyeget\u00e9s t\u00edpusa",threatPlaceholder:"Kezdje el a be\u00edr\u00e1st a fenyeget\u00e9s keres\u00e9s\u00e9hez",mandatoryLabel:"K\u00f6telez\u0151 evaku\u00e1l\u00e1si t\u00e1vols\u00e1g",safeLabel:"Biztons\u00e1gos evaku\u00e1l\u00e1si t\u00e1vols\u00e1g",zoneTypeLabel:"Z\u00f3na t\u00edpusa",feetLabel:"L\u00e1b",
metersLabel:"M\u00e9ter",unitsLabel:"M\u00e9rt\u00e9kegys\u00e9gek",threatGraphicLayer:"Fenyeget\u00e9sgrafikon",settingsTitle:"Be\u00e1ll\u00edt\u00e1sok",mandatoryButtonLabel:"K\u00f6telez\u0151 evaku\u00e1l\u00e1si t\u00e1vols\u00e1g be\u00e1ll\u00edt\u00e1sainak konfigur\u00e1l\u00e1sa",safeButtonLabel:"Helyi mened\u00e9k be\u00e1ll\u00edt\u00e1sainak konfigur\u00e1l\u00e1sa",style:"St\u00edlus",colorPicker:"sz\u00ednv\u00e1laszt\u00f3",lineStyles:{esriSLSDash:"Szaggatott",esriSLSDashDot:"Vonal-pont",
esriSLSDashDotDot:"Vonal-pont-pont",esriSLSDot:"Pont",esriSLSLongDash:"Hossz\u00fa vonal",esriSLSLongDashDot:"Hossz\u00fa vonal-pont",esriSLSNull:"Null",esriSLSShortDash:"R\u00f6vid vonal",esriSLSShortDashDot:"R\u00f6vid vonal-pont",esriSLSShortDashDotDot:"R\u00f6vid vonal-pont-pont",esriSLSShortDot:"R\u00f6vid pont",esriSLSSolid:"Folytonos"},fillStyles:{esriSFSBackwardDiagonal:"H\u00e1tra",esriSFSCross:"Kereszt",esriSFSDiagonalCross:"\u00c1tl\u00f3s",esriSFSForwardDiagonal:"El\u0151re",esriSFSHorizontal:"V\u00edzszintes",
esriSFSNull:"Null",esriSFSSolid:"Folytonos",esriSFSVertical:"F\u00fcgg\u0151leges"},resultsTitle:"Eredm\u00e9nyek",publishTABtn:"K\u00f6zz\u00e9t\u00e9tel",layerName:"K\u00f6zz\u00e9tett r\u00e9tegn\u00e9v",invalidLayerName:"A r\u00e9teg neve csak alfanumerikus karaktereket \u00e9s al\u00e1h\u00faz\u00e1s karaktereket tartalmazhat",missingLayerName:"Meg kell adnia a r\u00e9teg nev\u00e9t",missingLayerNameMessage:"Meg kell adnia egy \u00e9rv\u00e9nyes r\u00e9tegnevet a k\u00f6zz\u00e9t\u00e9tel el\u0151tt",
publishingFailedLayerExists:"Sikertelen k\u00f6zz\u00e9t\u00e9tel: M\u00e1r van {0} nev\u0171 vektoros szolg\u00e1ltat\u00e1s. V\u00e1lasszon m\u00e1sik r\u00e9tegnevet.",checkService:"Szolg\u00e1ltat\u00e1s ellen\u0151rz\u00e9se: {0}",createService:"Szolg\u00e1ltat\u00e1s l\u00e9trehoz\u00e1sa: {0}",unableToCreate:"Nem lehet l\u00e9trehozni: {0}",addToDefinition:"Hozz\u00e1ad\u00e1s a meghat\u00e1roz\u00e1shoz: {0}",successfullyPublished:"Webes r\u00e9teg sikeresen k\u00f6zz\u00e9t\u00e9ve.{0}Kezelje a webes r\u00e9teget",
successfullyAppended:"Sikeresen adott \u00faj vektoros elemeket a webes r\u00e9teghez.{0}Kezelje a webes r\u00e9teget",userRole:"Nem lehet l\u00e9trehozni a szolg\u00e1ltat\u00e1st, mert a felhaszn\u00e1l\u00f3nak nincs megfelel\u0151 enged\u00e9lye",retrieveExistingLayerError:"Nem lehet lek\u00e9rni a k\u00f6vetkez\u0151t: {0}. A k\u00f6zz\u00e9t\u00e9telt m\u00e1sik r\u00e9tegn\u00e9vvel v\u00e9gezze.",publishToNewLayer:"Eredm\u00e9nyek k\u00f6zz\u00e9t\u00e9tele \u00faj vektoros r\u00e9tegbe.",
layerNameExists:"A r\u00e9tegn\u00e9v m\u00e1r l\u00e9tezik. K\u00e9rj\u00fck, haszn\u00e1ljon egy m\u00e1sik r\u00e9tegnevet.",pipeBombLabel:"Cs\u0151bomba",suicideBombLabel:"\u00d6ngyilkos mer\u00e9nyl\u0151",briefcaseLabel:"Aktat\u00e1ska",carLabel:"Aut\u00f3",suvVanLabel:"SUV/FURGON",smallDeliveryTruckLabel:"Kisteheraut\u00f3",containerWaterTruckLabel:"Kont\u00e9nersz\u00e1ll\u00edt\u00f3/v\u00edzsz\u00e1ll\u00edt\u00f3 teheraut\u00f3",semiTrailerLabel:"F\u00e9lp\u00f3tkocsis teheraut\u00f3",
transparencyLabel:"\u00c1tl\u00e1tsz\u00f3s\u00e1g",outline:"Kont\u00far",fill:"Kit\u00f6lt\u00e9s (a Sz\u00edn be\u00e1ll\u00edt\u00e1s csak az egysz\u00edn\u0171 st\u00edlus be\u00e1ll\u00edt\u00e1sa eset\u00e9n \u00e9rhet\u0151 el)",createBtn:"Z\u00f3n\u00e1k l\u00e9trehoz\u00e1sa",clearBtn:"T\u00f6rl\u00e9s",invalidNumberMessage:"A megadott \u00e9rt\u00e9k nem \u00e9rv\u00e9nyes",invalidRangeMessage:"Az \u00e9rt\u00e9knek 0-n\u00e1l nagyobbnak kell lennie",parseCoordinatesError:"Nem siker\u00fclt a koordin\u00e1t\u00e1k elemz\u00e9se. Ellen\u0151rizze a bevitt adatokat.",
manualCoordinateInputInfo:"\u00cdrja be manu\u00e1lisan a koordin\u00e1t\u00e1kat, majd kattintson az \x3cb\x3eEnter\x3c/b\x3e elemre a nagy\u00edt\u00e1shoz",selectDrawModeLabel:"Rajzol\u00e1si m\u00f3d kiv\u00e1laszt\u00e1sa",selectFeatureLabel:"Vektoros elem kiv\u00e1laszt\u00e1sa a r\u00e9tegr\u0151l",_localized:{}}});