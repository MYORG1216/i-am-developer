sap.ui.controller("banking.OnlineBanking.ActiveUsers", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf OnlineBanking.ActiveUsers
*/
//	onInit: function() {
//
//	},

     box1()
	{
		jQuery.sap.require("sap.m.MessageBox");
		sap.m.MessageBox.error("The record does not exist", {
			title:"Error Msg"
		})
	},
	
	dialog2()
	{
		
	}
	
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf OnlineBanking.ActiveUsers
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf OnlineBanking.ActiveUsers
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf OnlineBanking.ActiveUsers
*/
//	onExit: function() {
//
//	}

});