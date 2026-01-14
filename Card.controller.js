sap.ui.define([
    "sap/m/MessageToast",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (MessageToast, Controller, JSONModel) {
    "use strict";

    return Controller.extend("com.winslow.CityWeather.Card", {

        _getWmoData: function (iWmoCode) {
            var sDescription = "Unknown Weather";
            var cardId = "com.winslow.CityWeather";
            cardId = cardId.replace(/\./g, '/');
            var sIcon = sap.ui.require.toUrl(cardId + "/images") + "/ClearSky.png";
            switch (iWmoCode) {
                case 0:
                    sDescription = "Clear Sky";
                    sIcon = sap.ui.require.toUrl(cardId + "/images") + "/ClearSky.png"
                    break;
                case 1:
                case 2:
                    sDescription = "Partly Cloudy";
                    sIcon = sap.ui.require.toUrl(cardId + "/images") + "/PartlyCloudy.png"
                    break;
                case 3:
                    sDescription = "Overcast";
                    sIcon = sap.ui.require.toUrl(cardId + "/images") + "/Overcast.png"
                    break;
                case 45:
                case 48:
                    sDescription = "Foggy";
                    sIcon = sap.ui.require.toUrl(cardId + "/images") + "/Fog.png"
                    break;
                case 51:
                case 53:
                case 55:
                case 61:
                    sDescription = "Light Rain";
                    sIcon = sap.ui.require.toUrl(cardId + "/images") + "/LightRain.png"
                    break;
                case 63:
                case 65:
                case 80:
                case 81:
                case 82:
                    sDescription = "Heavy Rain";
                    sIcon = sap.ui.require.toUrl(cardId + "/images") + "/HeavyRain.png"
                    break;
                case 71:
                case 73:
                case 75:
                    sDescription = "Snowing";
                    sIcon =sap.ui.require.toUrl(cardId + "/images") + "/Snow.png"
                    break;
            }

            return {
                description: sDescription,
                iconUrl: sIcon
            };
        },
        onInit: function () {
            var cardId = "com.winslow.CityWeather";
            cardId = cardId.replace(/\./g, '/');
            var oData = {
                // Image_1: sap.ui.require.toUrl(cardId + "/images") + "/cloud.png",
                // Image_2: sap.ui.require.toUrl(cardId + "/images") + "/download.png",
                Image_3: sap.ui.require.toUrl(cardId + "/images") + "/avondale_bt.png",
                Image_4: sap.ui.require.toUrl(cardId + "/images") + "/myhub_bt.png",
                Image_5: sap.ui.require.toUrl(cardId + "/images") + "/winslow_bt.png",
                Image_6: sap.ui.require.toUrl(cardId + "/images") + "/learning_portal_bt.png",
                Image_7: sap.ui.require.toUrl(cardId + "/images") + "/brandfolder_bt.png",
                cities: [
                    { name: "Sunbury", City: "VIC", latitude: "-37.5788", longitude: "144.7116", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Melton", City: "VIC", latitude: "-37.6834", longitude: "144.5854", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Craigieburn", City: "VIC", latitude: "-37.5940", longitude: "144.9100", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Central Melbourne", City: "VIC", latitude: "-37.814", longitude: "144.9633", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Cranbourne", City: "VIC", latitude: "-38.1134", longitude: "145.2833", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Geelong", City: "VIC", latitude: "-38.1471", longitude: "144.3607", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Ballarat", City: "VIC", latitude: "-37.5662", longitude: "143.8496", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Sween Hill", City: "VIC", latitude: "-35.3378", longitude: "143.5544", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Hamilton", City: "VIC", latitude: "-37.7420", longitude: "142.0217", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Daylesford", City: "VIC", latitude: "-37.3411", longitude: "144.1426", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Warragul", City: "VIC", latitude: "-38.1591", longitude: "145.9312", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Springavale", City: "VIC", latitude: "-37.9667", longitude: "145.15", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Mount Cottrel", City: "VIC", latitude: "-37.8167", longitude: "144.5833", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Gisborne", City: "VIC", latitude: "-37.4886", longitude: "144.5942", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Wallen", City: "VIC", latitude: "-37.4067", longitude: "144.9798", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Donnybrook", City: "VIC", latitude: "-37.5333", longitude: "144.9833", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Epping", City: "VIC", latitude: "-37.65", longitude: "145.0333", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Bendigo", City: "VIC", latitude: "-36.7582", longitude: "144.2802", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Central Adelaide", City: "SA", latitude: "-34.9287", longitude: "138.5986", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Strathalbyn", City: "SA", latitude: "-35.2598", longitude: "138.8925", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Gawler", City: "SA", latitude: "-34.6025", longitude: "138.749", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Mallala", City: "SA", latitude: "-34.4374", longitude: "138.5099", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Lismore", City: "NSW", latitude: "-28.8135", longitude: "153.2773", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Byron bay", City: "NSW", latitude: "-28.6499", longitude: "153.6125", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Lennox Head", City: "NSW", latitude: "-28.7913", longitude: "153.592", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Alstonville", City: "NSW", latitude: "-28.8419", longitude: "153.4402", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Robina", City: "QLD", latitude: "-28.0707", longitude: "153.3933", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Nerang", City: "QLD", latitude: "-33.7985", longitude: "151.1179", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Beaudesert", City: "QLD", latitude: "-27.9869", longitude: "152.9966", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Ormeau", City: "QLD", latitude: "-27.7679", longitude: "153.2428", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Park Ridge", City: "QLD", latitude: "-27.7167", longitude: "153.0333", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Sunnybank", City: "QLD", latitude: "-27.58", longitude: "153.0606", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Ripley", City: "QLD", latitude: "-27.6679", longitude: "152.7835", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Walloon", City: "QLD", latitude: "-27.6055", longitude: "152.6643", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Rocklea", City: "QLD", latitude: "-27.5392", longitude: "153.004", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Eight Mile Plains", City: "QLD", latitude: "-27.5833", longitude: "153.1", current: "temperature_2m,weather_code", forecast_days: "1"},
                    { name: "Samford", City: "QLD", latitude: "-27.3727", longitude: "152.8865", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "North Lakes", City: "QLD", latitude: "-27.2243", longitude: "153.0207", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Burpengay", City: "QLD", latitude: "-27.1575", longitude: "152.9576", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Caboolture", City: "QLD", latitude: "-27.0846", longitude: "152.9511", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Beerwah", City: "QLD", latitude: "-26.8588", longitude: "152.9614", current: "temperature_2m,weather_code", forecast_days: "1" },
                    { name: "Sunshine Coast", City: "QLD", latitude: "-26.6568", longitude: "153.0795", current: "temperature_2m,weather_code", forecast_days: "1" },
                ]
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
            this.onCityChange();
        },

        onCityChange: function (oEvent) {
            var sSelectedCity = oEvent ? oEvent.getSource().getSelectedKey() : this.byId("citySelect").getSelectedKey();
            var oModel = this.getView().getModel();
            var aCities = oModel.getProperty("/cities");

            var oCity = aCities.find(function (c) {
                return c.name === sSelectedCity;
            });

            if (!oCity || !oCity.latitude || !oCity.longitude) {
                oModel.setProperty("/selectedCityText", "Weather data unavailable");
                return;
            }
            this.byId("idWeatherBox").setBusy(true);
            $.ajax({
                url: "https://api.open-meteo.com/v1/forecast",
                method: "GET",
                dataType: "json",
                data: {
                    latitude: oCity.latitude,
                    longitude: oCity.longitude,
                    current: oCity.current,
                    forecast_days: oCity.forecast_days
                },
                success: function (oData) {
                    var fTemp = oData.current.temperature_2m;
                    var sUnit = oData.current_units.temperature_2m;
                    var iWmoCode = oData.current.weather_code;

                    var oWeather = this._getWmoData(iWmoCode);

                    var sTempText = fTemp.toFixed(1) + " " + sUnit;
                    oModel.setProperty("/selectedCityText",sTempText + ", " + oWeather.description + " in " + sSelectedCity);
                    oModel.setProperty("/weatherIconUrl", oWeather.iconUrl);
                    this.byId("idWeatherBox").setBusy(false);
                }.bind(this),
                error: function () {
                    this.byId("idWeatherBox").setBusy(false);
                    oModel.setProperty("/selectedCityText", "Failed to load weather data");
                }
            });
        },
        onPressButtonAF: function () {
            sap.m.URLHelper.redirect("https://avondalefc.com.au/media/news/", true)
        },
        onPressWinslow: function () {
            sap.m.URLHelper.redirect("https://www.winslow.com.au/", true)
        },
        onPressHub: function () {
            sap.m.URLHelper.redirect("https://myhubnews.winslow.com.au/", true)
        },
        onPressLP: function () {
            sap.m.URLHelper.redirect("https://www.winslow.com.au/login", true)
        },
        onPressBrandFolder:function(){
            sap.m.URLHelper.redirect("https://www.winslow.com.au/login", true)
        }
    });
});