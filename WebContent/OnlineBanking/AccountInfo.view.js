sap.ui.jsview("banking.OnlineBanking.AccountInfo", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf OnlineBanking.AccountInfo
	 */ 
	getControllerName : function() {
		return "banking.OnlineBanking.AccountInfo";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf OnlineBanking.AccountInfo
	 */ 
	createContent : function(oController) {
		 let oView = this;
	     let oModel = new sap.ui.model.json.JSONModel("JSON/Users.json");
	     debugger;
	     this.setModel(oModel, "Users");
	   oView.oTable = new sap.m.Table
		({
			
			columns:[
				
				new sap.m.Column({
					header:new sap.m.Text({text:"Customer Id"})
				}),
				new sap.m.Column({
					header:new sap.m.Text({text:"Account No"})
				}),
				new sap.m.Column({
					header:new sap.m.Text({text:"Name"})
				}),
				new sap.m.Column({
					header:new sap.m.Text({text:"Mobileno"})
				}),
				new sap.m.Column({
					header:new sap.m.Text({text:"Branch"})
				}),
				new sap.m.Column({
					header:new sap.m.Text({text:"Branchcode"})
				}),
				new sap.m.Column({
					header:new sap.m.Text({text:"Pin"})
				}),
				new sap.m.Column({
					header:new sap.m.Text({text:"Language"})
				}),
				new sap.m.Column({
					header:new sap.m.Text({text:"Status"})
				})
			],
			
				items: {
                    path: "Users>/Accountdetails",
                   // templateShareable: true,
                    factory: function(sIdx, oContxt) {
                        debugger;
                        return new sap.m.ColumnListItem({
                        	type: sap.m.ListType.Navigation,
                        	press:(oEvt)=>{
                        	oController.navi();
                        	},
                           cells:[
//                        	   new sap.m.Text({text: "{Users>generateId" }),
                        	   new sap.m.Text({text: "{Users>customerId}" }),
                        	   new sap.m.Text({text: "{Users>accountno}" }),
                        	   new sap.m.Text({text: "{Users>name}" }),
                        	   new sap.m.Text({text: "{Users>mobileno}" }),
                        	   new sap.m.Text({text: "{Users>branch}" }),
                        	   new sap.m.Text({text: "{Users>branchcode}" }),
                        	   new sap.m.Text({text: "{Users>pin}" }),
                        	   new sap.m.Text({text: "{Users>language}" }),
                        	   new sap.m.Text({text: "{Users>status}" })
                        	   
                           ]
                        
                        })
                    }
                }
		})
			
//	   oView.oTable.bindItems("Users>/Accountdetails",
//			   new sap.m.ColumnListItem({
//				   cells:[
////			  	new sap.m.Text({text: "{Users>generateId" }),
//			   	new sap.m.Text({text: "{Users>customerId}" }),
//			   	new sap.m.Text({text: "{Users>accountno}"}),
//	        	new sap.m.Text({text: "{Users>name}" }),
//	        	new sap.m.Text({text: "{Users>mobileno}" }),
//	        	new sap.m.Text({text: "{Users>branch}" }),
//	        	new sap.m.Text({text: "{Users>branchcode}" }),
//	        	new sap.m.Text({text: "{Users>pin}" }),
//	        	new sap.m.Text({text: "{Users>language}" }),
//	        	new sap.m.Text({text: "{Users>status" })    	   
//           ]
//        }))
 		return new sap.m.Page({
			title: "AccountInfo",
			showNavButton:true,
			navButtonPress: () => {
			
				var router = sap.ui.core.UIComponent.getRouterFor(this);
				router.navTo("details");
			},
			
			content: [
			   oView.oTable
			]
		});
	}
});