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
		let oView = this;
	     //let oModel = new sap.ui.model.json.JSONModel("JSON/Users.json");
	    let oModel = oController.getOwnerComponent().getModel("Users"); 
		this.setModel(oModel, "Users");
		
		oView.oTable1 = new sap.m.Table
		({
			
			columns:[
				
				new sap.m.Column({
					header:new sap.m.Text({text:"from"})
				}),
				new sap.m.Column({
					header:new sap.m.Text({text:"To"})
				}),
				new sap.m.Column({
					header:new sap.m.Text({text:"Type"})
				}),
				new sap.m.Column({
					header:new sap.m.Text({text:"Amount"})
				}),
				new sap.m.Column({
					header:new sap.m.Text({text:"Balance"})
				}),
				new sap.m.Column({
					header:new sap.m.Text({text:"Transaction date"})
				}),
				new sap.m.Column({
					header:new sap.m.Text({text:"Transaction time"})
				}),
				new sap.m.Column({
					header:new sap.m.Text({text:"Transaction type"})
				})
				
			],
			
			items:{
				// path: "Users>/TransactionHistory",
	              path:"Users>/customer/Transactions" ,
                 factory: function(sIdx, oContxt) {
                     debugger;
                     return new sap.m.ColumnListItem({
                        cells:[

                     	   new sap.m.Text({text: "{Users>Fromt}" }),
                     	   new sap.m.Text({text: "{Users>Tot}" }),
                     	   new sap.m.Text({text: "{Users>Type}" }),
                     	   new sap.m.Text({text: "{Users>Amount}" }),
                     	   new sap.m.Text({text: "{Users>Balance}" }),
                     	   new sap.m.Text({text: "{Users>Trsdate}" }),
                     	   new sap.m.Text({text: "{Users>Trstime}" }),
                     	  new sap.m.Text({text: "{Users>Trstype}" })
                     	   
                        ]
                     })
                 }	
				
				}	
				
		})
		
 		return new sap.m.Page({
			title: "TransactionHistory",
			showNavButton:true,
			navButtonPress: () => {
				var router = sap.ui.core.UIComponent.getRouterFor(this);
				//router.navTo("details");
				//router.navTo("details",{"custId": oCustomer.Customer.CustId});
				router.navBack();
			},
			content: [
			oView.oTable1
			]
		});
	}

});