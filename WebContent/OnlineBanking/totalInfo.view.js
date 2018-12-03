sap.ui.jsview("banking.OnlineBanking.totalInfo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf OnlineBanking.totalInfo
	*/ 
	getControllerName : function() {
		return "banking.OnlineBanking.totalInfo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf OnlineBanking.totalInfo
	*/ 
	createContent : function(oController) {
		let oView = this;
		
 		return new sap.m.Page({
			title: "Info",
			showNavButton:true,
	        navButtonPress: () => {
	        	var router = sap.ui.core.UIComponent.getRouterFor(this);
			     router.navTo("AccountInfo");
	        },
			content: [
			
			]
		});
	}
});


