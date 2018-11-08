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
	     let oModel = new sap.ui.model.json.JSONModel("JSON/Users.json");
	     this.setModel(oModel, "Users");
		
		
		oView.oTable1 = new sap.m.Table
		({
			
			columns:[
				
				new sap.m.Column({
					header:new sap.m.Text({text:"From"})
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
					header:new sap.m.Text({text:"Transdate"})
				}),
				new sap.m.Column({
					header:new sap.m.Text({text:"Transtime"})
				}),
				new sap.m.Column({
					header:new sap.m.Text({text:"Transactiontype"})
				})
				
			],
			
			items:{
				 path: "Users>/TransactionHistory",
	               
                 factory: function(sIdx, oContxt) {
                     debugger;
                     return new sap.m.ColumnListItem({
                        cells:[

                     	   new sap.m.Text({text: "{Users>from}" }),
                     	   new sap.m.Text({text: "{Users>to}" }),
                     	   new sap.m.Text({text: "{Users>type}" }),
                     	   new sap.m.Text({text: "{Users>Amount}" }),
                     	   new sap.m.Text({text: "{Users>Balance}" }),
                     	   new sap.m.Text({text: "{Users>Transdate}" }),
                     	   new sap.m.Text({text: "{Users>Transtime}" }),
                     	  new sap.m.Text({text: "{Users>Transactiontype}" })
                     	   
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
				router.navTo("details");
			},
			content: [
			oView.oTable1
			]
		});
	}

});