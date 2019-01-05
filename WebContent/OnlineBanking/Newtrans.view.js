sap.ui.jsview("banking.OnlineBanking.Newtrans", {
	getControllerName : function() {
		return "banking.OnlineBanking.Newtrans";
	},

	createContent : function(oController) {
		
	let oView = this;
	oController = oView.getController();
	let oModel1= oController.getOwnerComponent().getModel("MyInfo");
	 // let oModel1 = new sap.ui.model.json.JSONModel({
	 //       "data":{
	 //    	   "AccountNo":"",
	 //    	   "Username":"",
	 //    	   "ToAccountNo":"",
	 //    	   "Amount":""
	 //       }
	 // })
	 // oView.setModel(oModel3,"Mytrans");
		
		let Form = new sap.ui.layout.form.Form({
			title: new sap.ui.core.Title({ text: "Transaction Form" }),
			layout: new sap.ui.layout.form.ResponsiveGridLayout({}),
			formContainers:[
				new sap.ui.layout.form.FormContainer({
					formElements:[
			/*	new sap.ui.layout.form.FormElement
				({	
					label:"Account No",
					fields:[ new sap.m.Input({width:"250px",
					type:sap.m.InputType.Text,
					  value:"{MyInfo>/addTrans/Account}"
						})]
				}),
					*/	new sap.ui.layout.form.FormElement({
                            label: "AccountNo",
                            fields: [new sap.m.ComboBox({width:"250px",
                              // value:"{MyInfo>/customer/Activ/AccNo}",
                                items: {
                                    path: "MyInfo>/customer/Activ",
                                    factory: function (sIdx, oContxt) {
                                        debugger;
                                        return new sap.ui.core.Item({
                                            text: "{MyInfo>AccNo}"
                                        })
                                    }
                                }
								/*items:{
									text: path: "MyInfo>/customer/Activ",
									factory: function(sIdx, oContxt) {
		   							 key: ,
								}
								}*/

							})]
                        }),

                        new sap.ui.layout.form.FormElement({
                            label: "To AccountNo",
                            fields: [new sap.m.ComboBox({width:"250px",

                            })]
                        }),

					new sap.ui.layout.form.FormElement
					({
						label:"TO AccountNo",
						fields:[ new sap.m.Input({width:"250px",
							type:sap.m.InputType.Text,
							value:"{MyInfo>/addTrans/AccountNo}"
							})]		
					}),
					new sap.ui.layout.form.FormElement
					({
						label:"Amount",
					    fields:[ new sap.m.Input({width:"250px",
					    	type:sap.m.InputType.Number,
					        value:"{MyInfo>/addTrans/Amount}"
					    })]
					}),

					new sap.ui.layout.form.FormElement
					({
						label:"Remarks",
						fields:[ new sap.m.Input({width:"250px",
						type:sap.m.InputType.Text
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
				text:"ok",
				press:()=>{
					debugger
					let oModel1 = oController.getOwnerComponent().getModel("MyInfo");
					var odata = oModel1.getProperty("/addTrans");
                    var sId = `TRN${((Math.random() * 9999).toString()).substr(0,3)}${"ATA"}${((new Date().getTime() * Math.random()).toString()).substr(2, 6)}`;
					oConfig = {
							"IsTransactions":{
								"Fromt":odata.Account,
								"Trnsid":sId,
						    	// Username:odata.Username,
						    	"Tot":odata.AccountNo,
						    	"Amount":odata.Amount,
								"Type":"D",
								"Trstype":"ATA"
							}
					};
                    oController.getOwnerComponent().callServer1(oConfig,"Z37_TRASCOUNT_API").then((response)=>{
					// oController.callServer(oConfig).then((response)=>{
						debugger;
						// let oModel = oController.getOwnerComponent().getModel("MyInfo");
						if(oModel1){
							oModel1.setProperty("/rvmsg", response.rvmsg);
						}
					});
                    odialog1.close();
			}
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
                    odata = {};
                    oModel1.setProperty("/addTrans",odata);

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