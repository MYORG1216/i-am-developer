sap.ui.jsview("banking.OnlineBanking.AccountInfo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf OnlineBanking.AccountInfo
	*/ 
	getControllerName : function() {
		return "banking.OnlineBanking.AccountInfo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf OnlineBanking.AccountInfo
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "AccountInfo",
			subHeader:new sap.m.Bar({
				contentLeft:[
					new sap.m.Button({text:"",
						icon:"sap-icon://nav-back",
						press:()=>{
						oController.navigate();
						}
					})
					]
				}),
			content: [
				
			]
		});
	}
});