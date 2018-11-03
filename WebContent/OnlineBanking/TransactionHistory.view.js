sap.ui.jsview("banking.OnlineBanking.TransactionHistory", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf OnlineBanking.TransactionHistory
	*/ 
	getControllerName : function() {
		return "banking.OnlineBanking.TransactionHistory";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf OnlineBanking.TransactionHistory
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "TransactionHistory",
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