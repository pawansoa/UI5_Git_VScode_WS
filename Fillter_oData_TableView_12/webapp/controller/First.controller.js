sap.ui.define(["sap/ui/core/mvc/Controller"],function(Controller){
	"use strict";
	return Controller.extend("satya.prasad.mvcapp.controller.First",{
		onListItemPress:function(oEvent){
		
		/*this.getView().getModel().setDefaultBindingMode("OneWay");*/
		var selectedIndex = oEvent.getSource();
		var selectedContext = selectedIndex.getBindingContext();
		//sap.ui.core.UIComponent will return Component.js instance
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		oRouter.navTo("detail",{
			ID:selectedContext.getProperty('ID')
		});

		
		},
		toLowerCase:function(sValue){
			var sString = String(sValue);
			return sString.toLowerCase();
		}
	});
});