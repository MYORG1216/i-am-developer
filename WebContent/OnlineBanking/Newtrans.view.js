sap.ui.jsview("banking.OnlineBanking.Newtrans", {

 
	getControllerName : function() {
		return "banking.OnlineBanking.Newtrans";
	},

	createContent : function(oController) {
		
	let oView = this;
	oController = oView.getController();
	let oModel8 = oController.getOwnerComponent().getModel("Users");
	 let oModel3 = new sap.ui.model.json.JSONModel({
	       "data":{
	    	   "AccountNo":"",
	    	   "Username":"",
	    	   "ToAccountNo":"",
	    	   "Amount":""
	       }		 
	 })
	 
	 oView.setModel(oModel3,"Mytrans");
		
		let Form = new sap.ui.layout.form.Form({
			title: new sap.ui.core.Title({ text: "Transaction Form" }),
			layout: new sap.ui.layout.form.ResponsiveGridLayout({}),
			formContainers:[
				new sap.ui.layout.form.FormContainer({
					formElements:[
				new sap.ui.layout.form.FormElement
				({	
					label:"Account No",
					fields:[ new sap.m.ComboBox({width:"250px",
					type:sap.m.InputType.Number,
					  value:"{MyTrans>/data/AccountNo}"
						})]
				}),
				
					new sap.ui.layout.form.FormElement
					({	
						label:"User Name",
						fields:[ new sap.m.ComboBox({width:"250px",
							type:sap.m.InputType.Text,
							value:"{MyTrans>/data/UserName}"
							})]
					}),
					
					new sap.ui.layout.form.FormElement
					({
						label:"TO AccountNo",
						fields:[ new sap.m.Input({width:"250px",
							type:sap.m.InputType.Number,
							value:"{MyTrans>/data/ToAccountNo}"
							})]		
					}),
					new sap.ui.layout.form.FormElement
					({
						label:"Amount",
					    fields:[ new sap.m.Input({width:"250px",
					    	type:sap.m.InputType.Number,
					        value:"{MyTrans>/data/Amount}"
					    })]
					}),
					new sap.ui.layout.form.FormElement
					({
						label:"Remarks",
						fields:[ new sap.m.Input({width:"250px",
						types:sap.m.InputType.Text	
						})]
					}),
					new sap.ui.layout.form.FormElement
					({
						
						fields:[ 

							new sap.m.SegmentedButton({
								buttons:[
									new sap.m.Button({
										text:"confirm",
										width:"100px",
											press:function(){
											odialog1.open();
											}
									}),
									new sap.m.Button({
										text:"clear",
									    width:"100px",
									    press:function(){
									    	odialog2.open();
									    }
									})
								]
							})
							
						]
					})
					
				]
				})
				]
				})  
		
				
		
		
		let odialog1 = new sap.m.Dialog({
			title:"MessageBox",
	content:[
		new sap.m.Text({
			text:"Confirm the transaction"
		})
		],
		beginButton: new sap.m.Button({
				text:"ok"
//				press:()=>{
//					var oModel9 = oView.getModel("Mytrans");
//					var oModel10 = oView.getModel("Users");
//					var odata =oModel9.getProperty("/data");
//					oConfig = {
//						CsCustomer:{
//							Transactions:{
//								
////								Amount: "500 "
////									Balance: "2500 "
////									Fromt: "EN1234567891234"
////									Tot: "EN1234567891235"
////									Trnsid: "123456789012345"
////									Trsdate: "2018-01-31"
////									Trstime: "10:23:23"
////									Trstype: "ATA"
////									Type: "C"
//								
//								
//								AccountNo:odata.Fromt,
//						    	Username:odata.Username,
//						    	ToAccountNo:odata.Tot,
//						    	Amount:odata.Amount
//								
//							}
//						}	
//					};
//					oController.callServer(oConfig).then((response)=>{
//						debugger
//						let oModel = oController.getOwnerComponent().getModel("Users");
//						
//						if(oModel){
//							oModel.setProperty("/customer", response.CsCustomer);
//						}
//						
//						if (response.CsCustomer.Customer.Name === "No customer"){
//
////							mess-strip										
//						}
//						else{
//							oController.navi();
//						}
//						
//						
//					});
					
					
//			}
			}),
			endButton: new sap.m.Button({
				text:"cancel",
				press:()=>{
					odialog1.close();
				}
			})
	
	
		});
		
		let odialog2 = new sap.m.Dialog({
			title:"MessageBox",
		content:[
			new sap.m.Text({
				text:" Clear the data"
			})
			],
			
			
		endButton:new sap.m.Button({
				text:"ok",
				press:()=>{
					odialog2.close();
				}
			})
		
			
		})
		
		
 		return new sap.m.Page({
 			showNavButton:true,
 			title:"New Transaction",
			navButtonPress: () => {
				var router = sap.ui.core.UIComponent.getRouterFor(this);
			//	router.navTo("details");
			//	router.navTo("details",{"custId": oCustomer.Customer.CustId});
			  router.navBack();
			},
			content: [
			      Form
			]
		});
	}
});