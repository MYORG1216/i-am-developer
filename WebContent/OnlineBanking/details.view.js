sap.ui.jsview("banking.OnlineBanking.details", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf OnlineBanking.details
	*/ 
	getControllerName : function() {
		return "banking.OnlineBanking.details";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf OnlineBanking.details
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
 			title: "Title",
 			
			subHeader:new sap.m.Bar({
				contentRight:[
					new sap.m.Button({text:"SignOut",
					press:()=>{
						oController.navigate();
						}
					})
					]
				}),
				
			content: [
				
				
				
					
					new sap.m.GenericTile({
		 			header:"AccountInfo",
		 			headerImage:"sap-icon://account",
		 			subheader:"50%",
		 				press:function(){
		 					oController.navi1();
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