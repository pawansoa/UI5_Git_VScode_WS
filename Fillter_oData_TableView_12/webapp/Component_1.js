sap.ui.define(["sap/ui/model/json/JSONModel", "sap/ui/core/UIComponent"], (JSONModel, UIComponent) => {
    "use stict";
    return UIComponent.extend("satya.prasad.mvcapp.Component", () => {
        UIComponent.prototype.createContent.apply(this, arguments);
        var oData = {
            "CountSweets": "2",
            "SweetsSupplier": [
                {
                    "ID": 0,
                    "Name": "Sweet Magic",
                    "Address": {
                        "Street": "Sivarao Street",
                        "City": "Vijayawada",
                        "State": "Andhra Pradesh",
                        "ZipCode": "521456",
                        "Country": "INDIA"
                    }
                },
                {
                    "ID": "1",
                    "Name": "Aanjaneya Sweets",
                    "Address": {
                        "Street": "Bhavanipuram",
                        "City": "Vijayawada",
                        "State": "Andhra Pradesh",
                        "ZipCode": "521456",
                        "Country": "INDIA"
                    }
                }
            ]
        };

        // model creation and setting data
        var oModel = new JSONModel();
        oModel.setData(oData);
        // setting the model to the core
        // so that it’s available in the whol application
        //if the model is set at the component level it will avaialble 
        //at entire application level
        this.setModel(oModel);
        var oView = sap.ui.view("appView", {
            viewName: "satya.prasad.mvcapp.view.App",
            type: sap.ui.core.mvc.ViewType.XML
        });

        var oApp = oView.byId("app");
        oView.placeAt("content");
    });
});