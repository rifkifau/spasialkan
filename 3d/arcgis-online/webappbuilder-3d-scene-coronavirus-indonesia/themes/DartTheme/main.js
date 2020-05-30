// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"themes/DartTheme/_build-generate_module":function(){define(["dojo/text!./common.css","dojo/text!./styles/default/style.css","dojo/i18n!./nls/strings"],function(){})},"url:themes/DartTheme/common.css":'@font-face {font-family: "HelveticaNeue"; src: url("fonts/helvetica_neue/helveticaneue.eot?#iefix"); src: url("fonts/helvetica_neue/helveticaneue.eot?#iefix") format("eot"), url("fonts/helvetica_neue/helveticaneue.woff2") format("woff2"), url("fonts/helvetica_neue/helveticaneue.woff") format("woff"), url("fonts/helvetica_neue/helveticaneue.ttf") format("truetype"), url("fonts/helvetica_neue/helveticaneue.svg#bHelveticaNeue") format("svg"); font-weight: normal; font-style: normal;}@font-face {font-family: \'HelveticaNeueUltraLight\'; src: url("fonts/helvetica_neue/helveticaneueultralight.eot?#iefix"); src: url("fonts/helvetica_neue/helveticaneueultralight.eot?#iefix") format(\'eot\'), url("fonts/helvetica_neue/helveticaneueultralight.woff2") format(\'woff2\'), url("fonts/helvetica_neue/helveticaneueultralight.woff") format(\'woff\'), url("fonts/helvetica_neue/helveticaneueultralight.ttf") format(\'truetype\'), url("fonts/helvetica_neue/helveticaneueultralight.svg#HelveticaNeueUltraLight") format(\'svg\'); font-weight: normal; font-style: normal;}@font-face {font-family: \'liberation_sansbold\'; src: url("fonts/liberation_sans/liberationsans-bold-webfont.eot"); src: url("fonts/liberation_sans/liberationsans-bold-webfont.eot?#iefix") format(\'embedded-opentype\'), url("fonts/liberation_sans/liberationsans-bold-webfont.woff2") format(\'woff2\'), url("fonts/liberation_sans/liberationsans-bold-webfont.woff") format(\'woff\'), url("fonts/liberation_sans/liberationsans-bold-webfont.ttf") format(\'truetype\'), url("fonts/liberation_sans/liberationsans-bold-webfont.svg#liberation_sansbold") format(\'svg\'); font-weight: normal; font-style: normal;}@font-face {font-family: \'liberation_sansregular\'; src: url("fonts/liberation_sans/liberationsans-regular-webfont.eot"); src: url("fonts/liberation_sans/liberationsans-regular-webfont.eot?#iefix") format(\'embedded-opentype\'), url("fonts/liberation_sans/liberationsans-regular-webfont.woff2") format(\'woff2\'), url("fonts/liberation_sans/liberationsans-regular-webfont.woff") format(\'woff\'), url("fonts/liberation_sans/liberationsans-regular-webfont.ttf") format(\'truetype\'), url("fonts/liberation_sans/liberationsans-regular-webfont.svg#liberation_sansregular") format(\'svg\'); font-weight: normal; font-style: normal;}.dart-panel {position: relative; overflow: hidden; z-index:;}.dart-panel .title {position: absolute; height: 60px; width: 100%;}.dart-panel .handle {position: absolute; height: 60px; left: 0px; right: 64px; cursor: move;}.jimu-rtl .dart-panel .handle {right: 0px; left: 64px;}.dart-panel .handle.minimized {left: 0px; right: 0px; height: 30px;}.dart-panel .title .widget-icon {position: absolute; width: 60px; height: 60px;}.dart-panel .title .widget-icon .icon {margin: 15px; width: 30px; height: 30px;}.jimu-rtl .dart-panel .title .widget-icon {right: 0px;}.dart-panel .title-label {overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: #ffffff; font-size: 16px; line-height: 60px; position: absolute; left: 60px; right: 70px;}.jimu-rtl .dart-panel .title-label {overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: #ffffff; font-size: 16px; line-height: 60px; position: absolute; left: 70px; right: 60px;}.dart-panel .title .min-icon {margin: 0; width: 32px; height: 60px; display: block; cursor: pointer; z-index: 10; background: transparent url("panels/DartPanel/images/fold_up.png") center no-repeat;}.dart-panel .title .min-icon.minimized {margin: 50px 0; width: 60px; height: 10px;}.dart-panel .title .close-icon {margin: 0; width: 32px; height: 60px; display: block; cursor: pointer; background: transparent url("panels/DartPanel/images/x.png") center no-repeat;}.dart-panel .title .close-icon.minimized {display: none;}.dart-panel .panel-bg {position: absolute; top: 60px; left: 0px; right: 0px; bottom: 0px; background-color: #4c4c4c; background-image: url("panels/DartPanel/images/shadow.png"); background-position: center top; background-repeat: no-repeat; background-size: 100% auto;}.dart-panel .panel-content {position: absolute; top: 60px; left: 10px; right: 10px; bottom: 10px;}.claro .dijitCheckBox {background-color: #393939; background-image: none; border: 1px solid #7f8183; width: 24px; height: 24px; line-height: 1; padding: 0; -webkit-box-shadow: none; box-shadow: none; -webkit-border-radius: 0; border-radius: 0; text-align: center; position: relative; overflow: visible;}.claro .dijitCheckBox input {position: absolute; top: 0;}.claro .dijitCheckBoxIcon,.claro .dijitCheckBoxChecked,.claro .dijitCheckBoxCheckedDisabled {background-image: url("dijit-css/icons/Icon_Checkmark_16.png"); background-position: center center;}.claro .dijitCheckBoxIcon {padding: 0;}.claro .dijitCheckBoxIcon:before {color: #007ac2;}.claro .btn-alt .dijitCheckBoxIcon:before {color: #fff;}.claro .dijitCheckBoxChecked {background-color: #393939; border: 1px solid #009ac2;}.claro .dijitCheckBoxHover {background-color: #222; border: 1px solid #007ac2;}.claro .dijitCheckBoxCheckedHover {background-color: #393939; border: 1px solid #009ac2;}.claro .dijitCheckBoxDisabled,.claro .dijitCheckBoxCheckedDisabled {opacity: 0.65; -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity\x3d65)"; filter: alpha(opacity\x3d65);}.claro .dijitCheckBoxInput {width: 24px; height: 24px;}.claro .dijitSlider {background: transparent; border: 0 none; -webkit-border-radius: 3px; border-radius: 3px; padding: 0;}.claro .dijitSliderBar {border-style: solid; outline: 1px;}.claro .dijitRuleLabelsContainer {color: #2b2e34;}.claro .dijitSliderDisabled {opacity: 0.65; -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity\x3d65)"; filter: alpha(opacity\x3d65);}.claro .dijitRuleLabelsContainerH {padding: 0;}.claro .dijitSliderBarH,.claro .dijitSliderBumperH {height: 4px;}.claro .dijitSlider .dijitSliderLeftBumper {-webkit-border-radius: 2px 0 0 2px; border-radius: 2px 0 0 2px; border-width: 1px 0 1px 1px; margin-left: 4px;}.claro .dijitSlider .dijitSliderRightBumper {-webkit-border-radius: 0 2px 2px 0; border-radius: 0 2px 2px 0; border-width: 1px 1px 1px 0; margin-left: -2px; margin-right: 4px;}.claro .dijitSlider .dijitSliderProgressBarH{border-color: #ebebeb; background-color: #ebebeb; background-image: none; -webkit-box-shadow: none; box-shadow: none;}.claro .dijitSlider .dijitSliderLeftBumper {border-color: #ebebeb; background-color: #ebebeb; background-image: none; -webkit-box-shadow: none; box-shadow: none; -webkit-border-radius: 2px 0 0 2px; border-radius: 2px 0 0 2px;}.claro .dijitSlider .dijitSliderRemainingBarH,.claro .dijitSlider .dijitSliderRightBumper {border-color: #878787; background-color: #878787; -webkit-border-radius: 2px; border-radius: 2px;}.claro .dijitSliderHover .dijitSliderProgressBarH,.claro .dijitSliderHover .dijitSliderLeftBumper {border-color: #ebebeb; background-color: #ebebeb; background-image: none; -webkit-box-shadow: none; box-shadow: none;}.claro .dijitSliderFocused .dijitSliderProgressBarH,.claro .dijitSliderFocused .dijitSliderLeftBumper {border-color: #ebebeb;}.claro .dijitSliderFocused .dijitSliderRemainingBarH,.claro .dijitSliderFocused .dijitSliderRightBumper {border-color: #878787; background-color: #878787; -webkit-box-shadow: none; box-shadow: none;}.claro .dijitRuleLabelsContainerV {padding: 0;}.claro .dijitSliderBarV,.claro .dijitSliderBumperV {width: 4px;}.claro .dijitSlider .dijitSliderTopBumper {-webkit-border-radius: 2px 2px 0 0; border-radius: 2px 2px 0 0; border-width: 1px 1px 0 1px; margin-top: 4px; margin-bottom: -2px;}.claro .dijitSlider .dijitSliderBottomBumper {-webkit-border-radius: 0 0 2px 2px; border-radius: 0 0 2px 2px; border-width: 0 1px 1px 1px; margin-bottom: 4px;}.claro .dijitSlider .dijitSliderProgressBarV,.claro .dijitSlider .dijitSliderBottomBumper {border-color: #ebebeb; background-color: #ebebeb; background-image: -webkit-linear-gradient(left, #f5f5f5, #ebebeb); background-image: -moz-linear-gradient(left, #f5f5f5, #ebebeb); background-image: -o-linear-gradient(left, #f5f5f5, #ebebeb); background-image: -ms-linear-gradient(left, #f5f5f5, #ebebeb); background-image: linear-gradient(to right, #f5f5f5, #ebebeb);}.claro .dijitSlider .dijitSliderRemainingBarV,.claro .dijitSlider .dijitSliderTopBumper {border-color: #878787; background-color: #878787;}.claro .dijitSliderHover .dijitSliderProgressBarV,.claro .dijitSliderHover .dijitSliderBottomBumper {border-color: #ebebeb; background-color: #d7d7d7; background-image: -webkit-linear-gradient(left, #e1e1e1, #d7d7d7); background-image: -moz-linear-gradient(left, #e1e1e1, #d7d7d7); background-image: -o-linear-gradient(left, #e1e1e1, #d7d7d7); background-image: -ms-linear-gradient(left, #e1e1e1, #d7d7d7); background-image: linear-gradient(to right, #e1e1e1, #d7d7d7);}.claro .dijitSliderFocused .dijitSliderProgressBarV,.claro .dijitSliderFocused .dijitSliderBottomBumper {border-color: #ebebeb;}.claro .dijitSliderImageHandle {background: #ffffff; -webkit-border-radius: 50%; border-radius: 50%; border: 0 none; width: 16px; height: 16px; margin-top: -2px; position: absolute;}.claro .dijitSliderImageHandle:after {content: ""; display: block; background: #6e6e6e; -webkit-border-radius: 50%; border-radius: 50%; height: 8px; width: 8px; left: 4px; top: 4px; position: absolute;}.claro .dijitSliderDisabled.dijitSliderFocused .dijitSliderImageHandle:after {display: none; outline: none;}.claro .dijitSliderDecrementIconH,.claro .dijitSliderIncrementIconH,.claro .dijitSliderDecrementIconV,.claro .dijitSliderIncrementIconV {padding: 0; height: 20px; width: 20px; background-color: transparent; border: 0 none;}.claro .dijitSliderHover .dijitSliderDecrementIconH,.claro .dijitSliderHover .dijitSliderIncrementIconH,.claro .dijitSliderHover .dijitSliderDecrementButtonHover,.claro .dijitSliderHover .dijitSliderIncrementButtonHover {background-color: #222; border: 0 none; background-image: url("dijit-css/icons/Icon_Right_16.png");}.claro .dijitSliderHover .dijitSliderDecrementIconH,.claro .dijitSliderHover .dijitSliderDecrementButtonHover {background-image: url("dijit-css/icons/Icon_Left_16.png");}.claro .dijitSliderActive .dijitSliderDecrementIconH,.claro .dijitSliderActive .dijitSliderIncrementIconH,.claro .dijitSliderActive .dijitSliderDecrementButtonActive,.claro .dijitSliderActive .dijitSliderIncrementButtonActive {background-color: #222; border: 0 none; background-image: url("dijit-css/icons/Icon_Right_16.png");}.claro .dijitSliderActive .dijitSliderDecrementIconH,.claro .dijitSliderActive .dijitSliderDecrementButtonActive {background-image: url("dijit-css/icons/Icon_Left_16.png");}.claro .dijitSliderIncrementIconH,.claro .dijitSliderIncrementIconV {background-image: url("dijit-css/icons/Icon_Right_16.png"); background-position: center center;}.claro .dijitSliderDecrementIconH,.claro .dijitSliderDecrementIconV {background-image: url("dijit-css/icons/Icon_Left_16.png"); background-position: center center;}.claro .dijitRuleMarkH,.claro .dijitRuleMarkV {display: none; border-left: 1px solid #9a9b9f; border-right: 1px solid #fff;}.claro .dijitRuleMarkV {border-right: 0 none; border-bottom: 1px solid #fff;}.claro .dijitRuleLabelContainerH {margin-top: 2px; margin-bottom: 2px; color: #909090 !important; font-weight: bold; font-size: 100% !important;}.claro .dijitRuleLabelContainerV {margin-left: 2px; margin-right: 2px; color: #909090 !important; font-weight: bold; font-size: 100% !important;}.claro .dojoxRangeSlider .dijitSliderLeftBumper {border-color: #878787; background-color: #878787;}.claro .dojoxRangeSlider .dijitSliderRemainingBarH {-webkit-border-radius: 0; border-radius: 0;}.claro .dijitTextBox,.claro .dijitInputInner {color: #f8f8f8; line-height: 20px;}.claro .dijitTextBox {background-color: rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.5) !important; -webkit-box-shadow: none; box-shadow: none; -webkit-border-radius: 2px; border-radius: 2px; -webkit-transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s; -moz-transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s; -o-transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s; -ms-transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s; transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;}.claro .dijitTextArea {padding: 2px 8px 4px;}.claro .dijitTextBox .dijitInputField {padding: 2px 8px; margin: 0;}.claro .dijitSelect.btn-primary,.claro .dijitComboBox.btn-primary,.claro .dijitSpinner.btn-primary {border-color: #007ac2;}.claro .dijitSelect.btn-success,.claro .dijitComboBox.btn-success,.claro .dijitSpinner.btn-success {border-color: #35ac46;}.claro .dijitSelect.btn-info,.claro .dijitComboBox.btn-info,.claro .dijitSpinner.btn-info {border-color: #00b9f2;}.claro .dijitSelect.btn-warning,.claro .dijitComboBox.btn-warning,.claro .dijitSpinner.btn-warning {border-color: #f89927;}.claro .dijitSelect.btn-danger,.claro .dijitComboBox.btn-danger,.claro .dijitSpinner.btn-danger {border-color: #da4d1e;}.claro .dijitSelect.btn-inverse,.claro .dijitComboBox.btn-inverse,.claro .dijitSpinner.btn-inverse {border-color: #2b2e34;}.claro .dijitTextBox .dijitInputInner,.claro .dijitValidationTextBox .dijitValidationContainer,.claro .dijitTextBox .dijitInputField .dijitPlaceHolder {padding: 2px 8px; background-color: transparent; border: none;}.claro .dijitTextBoxHover {border: 1px solid rgba(255,255,255,0.75) !important; -webkit-transition-duration: 0.25s; -moz-transition-duration: 0.25s; -o-transition-duration: 0.25s; -ms-transition-duration: 0.25s; transition-duration: 0.25s;}.claro .dijitTextBoxFocused {background-color: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.75) !important; -webkit-box-shadow: 0 1px 2px rgba(0,0,0,0.15) inset; box-shadow: 0 1px 2px rgba(0,0,0,0.15) inset; -webkit-transition-duration: 0.1s; -moz-transition-duration: 0.1s; -o-transition-duration: 0.1s; -ms-transition-duration: 0.1s; transition-duration: 0.1s;}.claro .dijitTextBoxFocused .dijitInputContainer {background-color: transparent; border: none !important;}.claro .dijitTextBoxDisabled {background: #f5f5f5; -webkit-box-shadow: none; box-shadow: none; opacity: 0.65; -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity\x3d65)"; filter: alpha(opacity\x3d65);}.claro .dijitTextBoxError,.claro .dijitTextBoxError .dijitButtonNode {border: 1px solid #da4d1e;}.claro .dijitTextBoxErrorFocused,.claro .dijitTextBoxErrorFocused .dijitButtonNode {border: 1px solid #b94119;}.claro .dijitValidationTextBoxError .dijitValidationContainer {color: #c6542d; width: 24px; height: 24px; background-image: url("dijit-css/icons/warning.png"); background-repeat: no-repeat; background-position: center center;}.claro .dijitValidationTextBoxError .dijitValidationIcon {display: none;}.dj_gecko .dijitInputInner {height: 20px;}.claro .dijitSelect .dijitArrowButtonInner,.claro .dijitComboBox .dijitArrowButtonInner {margin: 0; width: 0; height: 0;}.claro .dijitSelect {background-color: rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.5); -webkit-border-radius: 2px; border-radius: 2px; table-layout: fixed;}.claro .dijitSelect .dijitButtonContents,.claro .dijitSelect .dijitArrowButton {padding: 0; border: 0; -webkit-border-radius: 0 2px 2px 0; border-radius: 0 2px 2px 0;}.claro .dijitSelect .dijitButtonContents {padding: 2px 8px; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; -webkit-border-radius: 2px 0 0 2px; border-radius: 2px 0 0 2px;}.claro .dijitSelect .dijitInputField {line-height: 20px; padding: 0;}.claro .dijitComboBox .dijitArrowButtonInner {border: none;}.claro .dijitSelect .dijitArrowButton {width: 24px; background: #4c4c4c; background-image: url("dijit-css/icons/Icon_Dropdown_16.png"); background-repeat: no-repeat; background-position: center center; border-left: 1px solid #7f8183;}.claro .dijitSelectFocused {border: 1px solid #7f8183;}.claro .dijitSelectDisabled {cursor: default; opacity: 0.65; -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity\x3d65)"; filter: alpha(opacity\x3d65);}.claro .dijitComboBox .dijitButtonNode {border-style: solid; border-width: 1px; padding: 4px 12px; -webkit-border-radius: 2px; border-radius: 2px; -webkit-box-shadow: none; box-shadow: none; line-height: 20px; text-shadow: 0 1px 1px rgba(255,255,255,0.75); cursor: pointer; border-color: #d0d0d0; background: #f5f5f5; -webkit-border-radius: 0 2px 2px 0; border-radius: 0 2px 2px 0; background-image: url("dijit-css/icons/Icon_Dropdown_16.png"); background-repeat: no-repeat; background-position: center center;}.claro .dijitComboBoxOpenHover .dijitButtonNode,.claro .dijitComboBox .dijitDownArrowButtonHover {-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.2); box-shadow: 0 1px 1px rgba(0,0,0,0.2); -webkit-transition: all 0.1s; -moz-transition: all 0.1s; -o-transition: all 0.1s; -ms-transition: all 0.1s; transition: all 0.1s; background-color: #e1e1e1; -webkit-box-shadow: none; box-shadow: none;}.claro .dijitComboBoxDisabled .dijitButtonNode {cursor: default; opacity: 0.65; -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity\x3d65)"; filter: alpha(opacity\x3d65);}.claro .dijitToolbar .dijitComboBox .dijitArrowButtonInner {border: none;}.claro .dijitDateTextBox .dijitArrowButton:before {content: "\\f073";}.claro select {padding: 2px 8px 0; border: 1px solid #7f8183; -webkit-box-shadow: none; box-shadow: none;}.claro select option {padding: 2px 8px 4px;}.claro .dijitSelectMenu td.dijitMenuItemIconCell,.claro .dijitSelectMenu td.dijitMenuArrowCell {display: none;}.claro .dijitMenu {background: #4c4c4c; border: 1px solid #7f8183; -webkit-border-radius: 0; border-radius: 0; margin: 0; -webkit-box-shadow: 0 2px 3px rgba(0,0,0,0.15); box-shadow: 0 2px 3px rgba(0,0,0,0.15);}.claro .dijitMenuTable,.claro .dijitComboBoxMenu {padding: 4px 0;}.claro .dijitComboBoxMenu {margin-left: 0; background-image: none;}.claro .dijitMenuTable {border-collapse: separate; border-spacing: 0 0;}.claro .dijitMenuItem,.claro .dijitMenuItem td {color: #f8f8f8; line-height: 20px; padding: 8px !important; border: none !important; white-space: nowrap;}.claro .dijitMenu .dijitMenuItemHover td,.claro .dijitMenu .dijitMenuItemHover {color: #f8f8f8; background: #222;}.claro .dijitMenu .dijitMenuItemActive td,.claro .dijitMenu .dijitMenuItemActive {color: #f8f8f8; background: #222;}.claro .dijitMenu .dijitMenuItemSelected td,.claro .dijitMenu .dijitMenuItemSelected {color: #f8f8f8; background: #222; border: 0 none;}.claro .dijitMenuSeparatorTop {height: auto; margin-top: 1px; border-bottom: 0 none;}.claro .dijitMenuSeparatorBottom {height: auto; margin-bottom: 1px; border-top: 0 none;}.claro td.dijitMenuItemIconCell {padding: 4px; margin: 0 0 0 4px;}.claro .dijitMenuExpand {font-family: FontAwesome; font-style: normal; font-weight: normal; font-size: 14px; text-decoration: inherit; vertical-align: bottom;}.claro .dijitMenuExpand:before {content: "\\f0da";}.claro .dijitCheckedMenuItemIconChar {display: none;}.claro .dijitCheckedMenuItemIcon {font-family: FontAwesome; font-style: normal; font-weight: normal; font-size: 14px; text-decoration: inherit; vertical-align: bottom;}.claro .dijitCheckedMenuItemChecked .dijitCheckedMenuItemIcon:before {content: "\\f00c";}.claro .dijitMenuPreviousButton,.claro .dijitMenuNextButton {font-style: italic;}.claro .dijitMenuBar {margin: 0; padding: 0; background: #f5f5f5;}.claro .dijitMenuBar .dijitMenuItem {padding: 8px 12px; margin: 0;}.claro .dijitMenuBar .dijitMenuItemHover {background: #007ac2;}.claro .dijitMenuBar .dijitMenuItemActive {background: #007ac2;}.claro .dijitMenuBar .dijitMenuItemSelected,.claro .dijitMenuBar .dijitMenuItemHover.dijitMenuItemSelected,.claro .dijitMenuBar .dijitMenuItemActive.dijitMenuItemSelected {color: #fff; background: #007ac2;}.claro .dijitMenuPopup {border-top-left-radius: 0; border-top-right-radius: 0;}.claro .dijitMenuPopup .dijitMenu {border-top-left-radius: 0; border-top-right-radius: 0;}.claro .dijitMenuPopup .dijitMenuItem,.claro .dijitMenuPopup .dijitMenuItem td {padding: 8px; border: 0 none; color: #f8f8f8;}body,html {font-family: \'HelveticaNeue\'; font-weight: normal;}strong {font-family: \'HelveticaNeue\';}.esri-widget {background-color: transparent;}.esriControlsBR {bottom: 62px; left: 10px; right: auto; width: auto; z-index: 0 !important;}.logo-med {position: absolute; left: 0px; bottom: 15px;}.esri-attribution {background: rgba(0, 0, 0, 0.75);}.esri-attribution,.esri-attribution-sources,.esri-attribution-powered-by,.esri-attribution-link {color: #969696;}.esri-select {background-color: rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.5); border-radius: 2px;}.esri-select option {color: #333;}.claro .esri-select {padding-top: 0;}.esri-button {background-color: #262626; background-color: rgba(0, 0, 0, 0.5); border-color: transparent; color: #fff; border-radius: 5px;}.esri-button:hover {background-color: #131313; background-color: rgba(0, 0, 0, 0.75);}.esri-popup__main-container {background-color: #fff;}.jimu-widget-frame.jimu-container {overflow-x: auto; overflow-y: auto; position: relative; padding: 10px; color: #ffffff; background-color: transparent; width: auto; left: 0px; right: 0px; top: 0px; bottom: 0px;}.jimu-widget-frame.jimu-container * {color: #ffffff !important; outline: none;}.jimu-input {height: 30px; background: #393939; background: rgba(0, 0, 0, 0.25); border: 1px solid #a6a6a6; border: 1px solid rgba(255, 255, 255, 0.5); color: #ffffff; padding: 5px; margin: 0; border-radius: 2px; font-size: 14px;}.jimu-btn {cursor: pointer; min-width: 70px; display: inline-block; padding: 0 10px !important; line-height: 33px; font-size: 14px; text-align: center; vertical-align: middle; background-color: #262626; background-color: rgba(0, 0, 0, 0.5) !important; -webkit-border-radius: 5px; -moz-border-radius: 5px; -o-border-radius: 5px; -ms-border-radius: 5px; border-radius: 5px; border: none !important; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;}.jimu-btn:hover {background-color: #131313; background-color: rgba(0, 0, 0, 0.75) !important;}.jimu-btn.jimu-state-disabled {background-color: #797979; background-color: rgba(255, 255, 255, 0.25) !important; color: #d8d8d8 !important;}.jimu-checkbox .checkbox {border: 1px solid #a6a6a6; border: 1px solid rgba(255, 255, 255, 0.5) !important; background-color: #393939; background-color: rgba(0, 0, 0, 0.25) !important;}.jimu-checkbox .checkbox.checked {border: 1px solid #a6a6a6; border: 1px solid rgba(255, 255, 255, 0.5) !important; background-image: url(dijit-css/icons/Icon_Checkmark_16.png) !important;}.claro .dijitTextBox {height: 30px; border-color: #a6a6a6; border-color: rgba(255, 255, 255, 0.5);}.claro .dijitComboBox .dijitButtonNode {color: #ffffff !important; border-color: #a6a6a6; border-color: rgba(255, 255, 255, 0.5); background-color: #262626; background-color: rgba(0, 0, 0, 0.5);}.dijitButtonNode {border: none !important;}.claro .dijitDateTextBox .dijitArrowButton:before {content: \'\';}.jimu-widget-analysis .tools-table-tr.even,.jimu-widget-analysis .tools-table-tr.odd,.jimu-widget-analysis .tools-table-tr.disabled {background-color: #393939; background-color: rgba(0, 0, 0, 0.25) !important; border-bottom: 1px solid #262626; border-bottom: 1px solid rgba(0, 0, 0, 0.5);}.jimu-widget-analysis .tools-table-tr.disabled {filter: alpha(opacity\x3d30); -moz-opacity: 0.30; -khtml-opacity: 0.30; opacity: 0.30;}.jimu-widget-analysis .tools-table-tr:hover {background-color: #262626; background-color: rgba(0, 0, 0, 0.5) !important;}.jimu-widget-analysis .tools-table-tr.disabled:hover {background-color: #393939; background-color: rgba(0, 0, 0, 0.25) !important;}.esriBasemapGalleryNode {margin: 3px 10px 3px 10px !important;}.esriBasemapGalleryThumbnail {width: 80px !important; height: 60px !important; border: 1px solid #fff; margin: 0; -moz-box-shadow: none !important; -webkit-box-shadow: none !important; box-shadow: none !important;}.esriBasemapGalleryLabelContainer {height: 16px !important; line-height: 16px !important;}.jimu-widget-bookmark .btn-add {background-color: #262626; background-color: rgba(0, 0, 0, 0.5);}.bookmark-list \x3e .jimu-state-selected {background: transparent !important;}.bookmark-list \x3e .jimu-state-selected .node-label {background-color: #3d3d3d; background-color: rgba(0, 0, 0, 0.2) !important;}.jimu-widget-bookmark .jimu-btn {width: 100px !important;}.jimu-widget-chart .chart-results .results-container {top: 30px !important;}.jimu-widget-chart-preview .results-header {position: absolute !important; bottom: 0px; width: 100%; height: 33px !important; line-height: 20px;}.jimu-widget-chart-preview .chart-section .arrow:hover {background-color: #393939; background-color: rgba(0, 0, 0, 0.25) !important;}.simpleDirections .esriGeocoder input {background: transparent !important;}.simpleDirections .esriGeocoderResults {background: #131313; background: rgba(0, 0, 0, 0.75) !important;}.simpleDirections .esriGeocoderResults ul {border: none !important;}.simpleDirections .esriGeocoderResult:hover,.simpleDirections .esriGeocoderResultEven:focus,.simpleDirections .esriGeocoderResultOdd:focus {background-color: #000000 !important;}.simpleDirections .esriActivateButton {width: 24px !important; height: 24px !important;}.simpleDirections .esriDirectionsButton,.simpleDirections .esriDirectionsButton:hover {padding: 0 10px !important; line-height: 33px !important; font-size: 14px; border: none !important; background-color: #262626; background-color: rgba(0, 0, 0, 0.5) !important; -webkit-box-shadow: none !important; -moz-box-shadow: none !important; box-shadow: none !important;}.simpleDirections .esriStopsClearDirections {padding: 0px 10px !important; line-height: 33px !important; font-size: 14px;}.simpleDirections .arcgisSearch .searchGroup .searchInput {border-bottom: none !important;}.simpleDirections .esriDirectionsPressedButton,.simpleDirections .esriDirectionsPressedButton:hover {background-color: #797979; background-color: rgba(255, 255, 255, 0.25) !important; box-shadow: none !important;}.tmTypeName {color: #aeaeae !important;}.simpleDirections .esriResultsContainer {background: transparent !important;}.simpleDirections .esriRouteZoom:hover,.simpleDirections .esriRouteZoom:focus {background: #3d3d3d; background: rgba(0, 0, 0, 0.2);}.draw-item {background-color: #262626; background-color: rgba(255, 255, 255, 0.5) !important;}.jimu-draw-box .draw-item.jimu-state-active,.jimu-draw-box .draw-item:hover {background-color: #8a8a8a !important; background-color: rgba(255, 255, 255, 0.3) !important;}.jimu-widget-draw .operations {margin-top: 10px !important;}.jimu-symbol-chooser {width: 100% !important;}.jimu-widget-edit * {background-color: transparent !important;}.jimu-widget-edit .esriTemplatePicker * {border: none !important;}.claro .jimu-widget-edit .dijitToolbar {padding: 5px 0; background: transparent !important; background-image: none !important; background-color: #c1c1c1 !important; border: none !important;}.claro .jimu-widget-edit .dijitToolbar .dijitButtonHover .dijitButtonNode,.claro .jimu-widget-edit .dijitToolbar .dijitDropDownButtonHover .dijitButtonNode,.claro .jimu-widget-edit .dijitToolbar .dijitToggleButtonHover .dijitButtonNode,.claro .jimu-widget-edit .dijitToolbar .dijitComboButtonHover .dijitButtonNode {background-image: none !important; background-color: #262626; background-color: rgba(0, 0, 0, 0.5) !important;}.jimu-widget-geoprocessing {height: 100%; margin: 0px -10px !important; font-size: 14px;}.jimu-tab\x3e.jimu-viewstack {background-color: #3d3d3d; background-color: rgba(0, 0, 0, 0.2) !important;}.jimu-tab\x3e.control\x3e.tab {background-color: #707070; background-color: rgba(255, 255, 255, 0.2) !important; border: none !important;}.jimu-tab\x3e.control\x3e.tab.jimu-state-selected {background-color: #3d3d3d; background-color: rgba(0, 0, 0, 0.2) !important; border: none !important;}.jimu-widget-layerList .layer-row,.jimu-widget-layerList .layer-row-selected {background: transparent !important;}.jimu-dropmenu\x3e.jimu-icon-btn {border: transparent !important; background-color: #393939; background-color: rgba(0, 0, 0, 0.25) !important;}.drop-menu,.jimu-widget-layerList .popup-menu-transparency-body {outline: none !important; outline-style: 1px solid transparent !important; background-color: #131313; background-color: rgba(0, 0, 0, 0.75) !important;}.jimu-dropmenu .menu-item-line {border: 1px solid #1e1e1e; border: 1px solid rgba(255, 255, 255, 0.1) !important;}.jimu-dropmenu\x3e.drop-menu {border: none !important; background-color: #131313; background-color: rgba(0, 0, 0, 0.75) !important;}.jimu-widget-layerList .jimu-dropmenu .menu-item-dissable {color: #c1c1c1 !important;}.esri-area-measurement-3d__measurement,.esri-direct-line-measurement-3d__measurement {background-color: transparent;}.esriMeasurementButtonContainer {background-color: #3d3d3d; background-color: rgba(0, 0, 0, 0.2);}.esriMeasurement .esriButton .dijitButtonNode {height: 32px !important; width: 32px !important; padding: 0px !important; border-radius: 2px;}.esriMeasurement .locationIcon {background-image: url("dijit-css/icons/Icon_Measure_Point_16.png") !important; background-position: center center; background-repeat: no-repeat; width: 32px; height: 32px;}.esriMeasurement .distanceIcon {background-image: url("dijit-css/icons/Icon_Measure_Distance_16.png") !important; background-position: center center; background-repeat: no-repeat; width: 32px; height: 32px;}.esriMeasurement .areaIcon {background-image: url("dijit-css/icons/Icon_Measure_Area_16.png") !important; background-position: center center; background-repeat: no-repeat; width: 32px; height: 32px;}.esriMeasurement .esriButtonChecked .dijitButtonNode {background-image: none !important; background-color: #797979; background-color: rgba(255, 255, 255, 0.25) !important;}.esriMeasurement .esriButtonHover .dijitButtonNode {background-image: none !important; background-color: #262626; background-color: rgba(0, 0, 0, 0.5) !important;}.esriMeasurement .esriButtonActiveFocused .dijitButtonNode {background-image: none !important; background-color: #262626; background-color: rgba(0, 0, 0, 0.5) !important;}.esriMeasurement .dijitButtonText {height: 32px; padding: 0px 10px; font-size: 14px; line-height: 32px;}.esriMeasurement .esriMeasurementResultLabel {margin: 5px !important; padding: 5px !important; border-bottom: thin solid #3d3d3d; border-bottom: thin solid rgba(0, 0, 0, 0.2) !important;}.claro .jimu-widget-print .dijitButton .dijitButtonNode,.claro .jimu-widget-print .dijitDropDownButton .dijitButtonNode,.claro .jimu-widget-print .dijitComboButton .dijitButtonNode,.claro .jimu-widget-print .dijitToggleButton .dijitButtonNode {border: none !important; padding: 4px !important; color: #ffffff !important; -moz-border-radius: 4px; border-radius: 4px; -webkit-box-shadow: none !important; -moz-box-shadow: none !important; box-shadow: none !important; background-image: none !important; background-color: #262626; background-color: rgba(0, 0, 0, 0.5) !important; -webkit-select: none;}.claro .jimu-widget-print .dijitSelect .dijitButtonNode {background-color: #262626; background-color: rgba(0, 0, 0, 0.5) !important;}.jimu-widget-stream .controlButton{background-color: rgba(0, 0, 0, 0.25) !important; border: 1px solid rgba(255, 255, 255, 0.5) !important;}.jimu-symbol-chooser .text-symbol-section .text-input{background-color: #383838;}.jimu-widget-layerlist .esri-layer-list__item-container {background: transparent !important;}.jimu-widget-layerlist .esri-layer-list__item .esri-layer-list__item-actions{background-color: #666666 !important;}.jimu-widget-layerlist .ground-tip span {background-color: #4c4c4c;}.jimu-widget-legend .esri-legend {background: transparent !important;}.jimu-widget-measurement .esri-direct-line-measurement-3d {background-color: transparent; color: inherit;}.jimu-widget-measurement .esri-button.esri-direct-line-measurement-3d__clear-button,.jimu-widget-measurement .esri-button.esri-area-measurement-3d__clear-button {background-color: #262626; background-color: rgba(0, 0, 0, 0.5); border-color: transparent;}.jimu-widget-measurement .esri-button.esri-direct-line-measurement-3d__clear-button:hover,.jimu-widget-measurement .esri-button.esri-area-measurement-3d__clear-button:hover {background-color: #131313; background-color: rgba(0, 0, 0, 0.75);}.jimu-widget-measurement__header {border-bottom-color: rgba(255,255,255,0.5);}.jimu-button-group \x3e button {background-color: #262626; background-color: rgba(0, 0, 0, 0.5); border-color: transparent; color: white;}.jimu-button-group \x3e button:hover {background-color: #131313; background-color: rgba(0, 0, 0, 0.75);}.jimu-button-group \x3e button.jimu-state-active {background-color: #24b5cc;}.jimu-button-group \x3e button + button::before {border-left-color: rgba(255,255,255,0.5);}.jimu-widget-frame.jimu-container .esri-direct-line-measurement-3d__measurement-item--disabled * {color: rgba(255,255,255, 0.5) !important;}.jimu-widget-compass .esri-widget--button:hover {background-color: rgba(0, 0, 0, 0.25); border-radius: 22px;}.jimu-widget-compass .esri-icon-compass {color: white;}.jimu-widget-fullScreen {background-color: transparent;}.jimu-widget-fullScreen .fullScreen {color: white; border-color: white; background-color: transparent;}.jimu-widget-compass .esri-compass {color: white; border-color: white; background-color: transparent;}.DartTheme .share-container .shareLink .email {background: url("images/share/email.svg") no-repeat;}.DartTheme .share-container .shareLink .email:hover {background: url("images/share/email_hover.svg") no-repeat;}.DartTheme .share-container .shareLink .facebook {background: url("images/share/facebook.svg") no-repeat;}.DartTheme .share-container .shareLink .facebook:hover {background: url("images/share/facebook_hover.svg") no-repeat;}.DartTheme .share-container .shareLink .twitter {background: url("images/share/twitter.svg") no-repeat;}.DartTheme .share-container .shareLink .twitter:hover {background: url("images/share/twitter_hover.svg") no-repeat;}.DartTheme .share-container .shareLink .googlePlus {background: url("images/share/gplus.svg") no-repeat;}.DartTheme .share-container .shareLink .googlePlus:hover {background: url("images/share/gplus_hover.svg") no-repeat;}',
"url:themes/DartTheme/styles/default/style.css":".dart-bgcolor {background-color: #646464;}.esriSimpleSlider div {color: #646464;}.esriPopup .titlePane {background-color: #646464;}.esri-search .esri-widget--button {color: #fff; background-color: rgba(100, 100, 100);}.esri-search .esri-menu {color: #fff; background-color: rgba(100, 100, 100);}.esri-search .esri-menu li:hover, .esri-menu li:focus {background-color: #777 !important;}.esri-search .esri-input {color: #fff; background-color: rgba(100, 100, 100);}.esri-search .esri-input::placeholder {color: #fff;}.esri-search .esri-search__source--active {background-color: rgba(100, 100, 100);}",
"*now":function(a){a(['dojo/i18n!*preload*themes/DartTheme/nls/main*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","uk","zh-hk","zh-tw","ROOT"]'])}}});define([],function(){});