sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History","sap/m/MessageToast",
	"satya/prasad/mvcapp/utlities/utlities","sap/ui/model/Filter","sap/ui/model/FilterOperator"],
	function(Controller,History,MessageToast,utlities,Filter,FilterOperator){
	"use strict";
	return Controller.extend("satya.prasad.mvcapp.controller.List",{
		variable:utlities,
		onSearch:function(oEvent){
			var sQuery = oEvent.getParameter("query");
			var oTable = this.getView().byId("tbid_1");
			var oBinding = oTable.getBinding("items");
			var aFilter = [];
			aFilter.push(new Filter(
				[new Filter("ProductID",FilterOperator.Contains,sQuery),new Filter("Category",FilterOperator.Contains,sQuery)],
				false));
			oBinding.filter(aFilter);
		}
	});
	
});