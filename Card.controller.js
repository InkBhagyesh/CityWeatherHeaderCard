sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (MessageToast, Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.winslow.CityWeather.Card", {
		onInit: function () {
			var cardId = "com.winslow.CityWeather";
            cardId = cardId.replace(/\./g,'/');
			 var oData = {
                Image_1 : sap.ui.require.toUrl(cardId + "/images") + "/cloud.png",
                Image_2 : sap.ui.require.toUrl(cardId + "/images") + "/download.png",
                Image_3 : sap.ui.require.toUrl(cardId + "/images") + "/FC.png",
                Image_4 : sap.ui.require.toUrl(cardId + "/images") + "/Wins.png",
                Image_5 : sap.ui.require.toUrl(cardId + "/images") + "/MyHub.png",
                Image_6 : sap.ui.require.toUrl(cardId + "/images") + "/LEP.png",
                cities: [
                    { name: "Sunbury",City:"VIC", weather: "13.7 °C, Partly Cloudy" },
                    { name: "Melton",City:"VIC", weather: "15 °C, Partly Cloudy" },
                    { name: "Craigieburn",City:"VIC", weather: "14 °C, Cloudy" },
                    { name: "Central Melbourne",City:"VIC", weather: "16 °C, Partly Cloudy" },
                    { name: "Cranbourne",City:"VIC", weather: "20 °C, Partly Cloudy" },
                    { name: "Geelong",City:"VIC", weather: "16.8 °C, Partly Cloudy" },
                    { name: "Sween Hill",City:"VIC", weather: "15.2 °C, Cloudy" },
                    { name: "Central Adelaide",City:"SA", weather: "14 °C, Partly Cloudy" },
                    { name: "Gawler",City:"SA", weather: "12 °C, Partly Cloudy" },
                    { name: "Mallala",City:"SA", weather: "15 °C, Partly Cloudy" },
                    { name: "Lismore",City:"NSW", weather: "17 °C, Cloudy" },
                    { name: "Byron bay",City:"NSW", weather: "13 °C, Partly Cloudy" },
                ],
                selectedCityText: "13.7 °C,Partly Cloudy in "
            };

            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },

        onCityChange: function (oEvent) {
            var sSelectedKey = oEvent.getSource().getSelectedKey();
            var oModel = this.getView().getModel();
            var aCities = oModel.getProperty("/cities");

            var oCity = aCities.find(c => c.name === sSelectedKey);
            if (oCity) {
                oModel.setProperty("/selectedCityText", oCity.weather+" in ");
            }
        },
		onPressButtonAF:function(){
			sap.m.URLHelper.redirect("https://avondalefc.com.au/media/news/", true)
		},
		onPressWinslow:function(){
			sap.m.URLHelper.redirect("https://www.winslow.com.au/", true)
		},
		onPressHub:function(){
			sap.m.URLHelper.redirect("https://myhubnews.winslow.com.au/", true)
		},
        onPressLP:function(){
           	sap.m.URLHelper.redirect("https://www.winslow.com.au/login", true) 
        }
	});
});