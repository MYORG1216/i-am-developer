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
 	let oModel = oController.getOwnerComponent().getModel("Users"),
 	box =	new sap.m.VBox({

 		items:[
 			new sap.m.Label({
 				text:"Customer Id"
 			}),
 			new sap.m.Text({
 				text:"{Users>/customer/CustId}"
 			}),
 			
 			new sap.m.Label({
 				text:"Name"
 			}),
 			new sap.m.Text({
 				text:"{Users>/customer/Name}"
 			}),
 			
 			new sap.m.Label({
 				text:"Email"
 			}),
 			new sap.m.Text({
 				text:"{Users>/customer/Email}"
 			}),
 			
 			new sap.m.Label({
 				text:"Mobile No"
 			}),
 			new sap.m.Text({
 				text:"{Users>/customer/Mobileno}"
 			})
 		]
 	});
 	popover = new sap.m.Popover({
 		title:"Customer Details",
 		placementType:sap.m.PlacementType.Bottom,
 		contentHeight:"100px",
 		contentWidth:"300px",
       // box : popover.box,
 		content:[
 			box
 		]
 	});
 	
		return new sap.m.Page({
			title:"Details",
//			showHeader:false,
					
			customHeader: new sap.m.Bar({
					contentLeft:[
						new sap.m.Button({
						     icon:"sap-icon://person-placeholder", 
						     press:function(oEvt){
							popover.openBy(oEvt.getSource());
								}
						})
					],
					contentRight:[
						new sap.m.Button({
							icon:"sap-icon://log",
							 press:function(){
								  oController.navi();
							  }
						})
					]
					
				}),
//			showNavButton:true,
//			navButtonPress: () => {
//				var router = sap.ui.core.UIComponent.getRouterFor(this);
//				router.navTo("firstpage");
//			},
			
				
			content: [
				
					new sap.m.GenericTile({
		 			header:"Account Info",
		 			headerImage:"sap-icon://account",
		 			//subheader:"50%",
		 				press:function(){
		 					let oModel1 = oController.getOwnerComponent().getModel("MyInfo");
		 					let oModel = oController.getOwnerComponent().getModel("Users");
		 					var odata = oModel1.getProperty("/customer/Customer");
		 					 oConfig = {
		 							 IsCustomer: { 
		 								 Customerid : odata.CustId,   
		 								 Password : odata.Password 	 
		 					 }		
		 					 };
		 					// oView.page.setBusy(true);
		 					oController.callServer1(oConfig).then((response)=>{
		 						//oView.page.setBusy(false);
		 						if(oModel){
		 							oModel.setProperty("/customer/Accounts", response.CtAcnt);
		 						}
		 						else{
		 							oController.navi();
		 						}
		 						oController.navi1(oView.id);
		 					});
		 								
		 				},
		 				tileContent:new sap.m.TileContent({
		 					content:[
		 						new sap.m.NumericContent({
			 			          value :"{Users>/customer/AccCount}",
		 						})
			 			]
			 			})
		 		}),
		 		
		 		new sap.m.GenericTile({
		 			header:"New transaction",
		 			headerImage:"sap-icon://visits",
		 			press:function(){
	 					oController.navi2(oView.id);
	 				}	
		 		}),
		 		
		 		new sap.m.GenericTile({
		 			header:"Transaction  history ",
		 			headerImage:"sap-icon://family-care",
		 			//subheader:"50%",
		 				press:function(){
		 					
		 					let oModel1 = oController.getOwnerComponent().getModel("MyInfo");
		 					let oModel = oController.getOwnerComponent().getModel("Users");
		 					var odata = oModel1.getProperty("/customer/Customer");
		 					 oConfig = {
		 							 IsCustomer: { 
		 								 Customerid : odata.CustId,   
		 								 Password : odata.Password 	 
		 					 }		
		 					 };
		 					// oView.page.setBusy(true);
		 					oController.callServer2(oConfig).then((response)=>{
		 						debugger;
		 						//oView.page.setBusy(false);
		 						debugger;
		 						if(oModel){
		 							oModel.setProperty("/customer/Transactions", response.CtTrans);
		 						}
		 						else{
		 							oController.navi();
		 						}
		 						oController.navi3(oView.id);
		 					});
		 				},
		 				tileContent:new sap.m.TileContent({
		 					content:[
		 						new sap.m.NumericContent({
			 			          value :"{Users>/customer/TrasCount}",
		 						})
			 			]
			 			})
		 		}),
		 		
		 		new sap.m.GenericTile({
		 			header:"Active Users",
		 			headerImage:"sap-icon://employee-lookup",
		 			//subheader:"50%",
		 				press:function(){
		 					
		 					let oModel1 = oController.getOwnerComponent().getModel("MyInfo");
		 					let oModel = oController.getOwnerComponent().getModel("Users");
		 					var odata = oModel1.getProperty("/customer/Customer");
		 					 oConfig = {
		 							 IsCustomer: { 
		 								 Customerid : odata.CustId,   
		 								 Password : odata.Password 	 
		 					 }		
		 					 };
		 					// oView.page.setBusy(true);
		 					oController.callServer3(oConfig).then((response)=>{
		 						debugger;
		 						//oView.page.setBusy(false);
		 						debugger;
		 						if(oModel){
		 							oModel.setProperty("/customer/Activ", response.CtActusers);
		 						}
		 						else{
		 							oController.navi();
		 						}
		 						oController.navi4(oView.id);
		 					});
		 					
		 				},
		 				tileContent:new sap.m.TileContent({
		 					content:[
		 						new sap.m.NumericContent({
			 			          value :"{Users>/customer/ActivCount}",
		 						})
			 			]
			 			})
		 		})			
			]
		});
	}

});