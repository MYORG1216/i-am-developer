sap.ui.jsview("banking.OnlineBanking.details", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf OnlineBanking.details
	*/ 
	getControllerName : function() {
		return "banking.OnlineBanking.details";
	},
	oInit: function(){
		new sap.ui.getCore().getEventBus().subscribe("customerData", this.fnResponse ,this);
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf OnlineBanking.details
	*/ 
	createContent : function(oController) {
 	let oView = this;
		return new sap.m.Page({
			title:"Details",
			showNavButton:true,
			navButtonPress: () => {
			
				var router = sap.ui.core.UIComponent.getRouterFor(this);
				router.navTo("firstpage");
			},

				
			content: [
					new sap.m.GenericTile({
		 			header:"AccountInfo",
		 			headerImage:"sap-icon://account",
		 			subheader:"50%",
		 				press:function(){
		 					oController.navi1(oView.id);
		 				}
		 		}),
		 		
		 		new sap.m.GenericTile({
		 			header:"Newtrans",
		 			headerImage:"sap-icon://visits",
		 			subheader:"50%",
		 				press:function(){
		 					oController.navi2();
		 				}
		 		}),
		 		
		 		new sap.m.GenericTile({
		 			header:"Transactionhistory ",
		 			headerImage:"sap-icon://family-care",
		 			subheader:"50%",
		 				press:function(){
		 					oController.navi3();
		 				}
		 		}),
		 		
		 		new sap.m.GenericTile({
		 			header:"ActiveUsers",
		 			headerImage:"sap-icon://employee-lookup",
		 			subheader:"50%",
		 				press:function(){
		 					oController.navi4();
		 				}
		 		})
					
			]
				
		});
	}

});