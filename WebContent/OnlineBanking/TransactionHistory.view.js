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
	    // let oModel = oController.getOwnerComponent().getModel("Users");
        let oModel1 = oController.getOwnerComponent().getModel("MyInfo");
        this.setModel(oModel1, "MyInfo");
		
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
	            //   path:"Users>/customer/Transactions" ,
                path:"MyInfo>/customer/Transactions",
                 factory: function(sIdx, oContxt) {
                     debugger;
                     return new sap.m.ColumnListItem({
                        cells:[

                     	   new sap.m.Text({text: "{MyInfo>Fromt}" }),
                     	   new sap.m.Text({text: "{MyInfo>Tot}" }),
                     	   new sap.m.Text({text: "{MyInfo>Type}" }),
                     	   new sap.m.Text({text: "{MyInfo>Amount}" }),
                     	   new sap.m.Text({text: "{MyInfo>Balance}" }),
                     	   new sap.m.Text({text: "{MyInfo>Trsdate}" }),
                     	   new sap.m.Text({text: "{MyInfo>Trstime}" }),
                     	  new sap.m.Text({text: "{MyInfo>Trstype}" })
                     	   
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