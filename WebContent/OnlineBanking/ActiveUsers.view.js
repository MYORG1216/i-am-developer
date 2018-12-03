sap.ui.jsview("banking.OnlineBanking.ActiveUsers", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf OnlineBanking.ActiveUsers
	*/ 
	getControllerName : function() {
		return "banking.OnlineBanking.ActiveUsers";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf OnlineBanking.ActiveUsers
	*/ 
	createContent : function(oController) {
		 let oView = this;
	     let oModel = oController.getOwnerComponent().getModel("Users");
	     this.setModel(oModel, "Users");
	     
		oView.oTable2 = new sap.m.Table
		({
			
			columns:[
				
				new sap.m.Column({
					header:new sap.m.Text({text:"Customer Id"})
				}),
				new sap.m.Column({
					header:new sap.m.Text({text:"Account no"})
				}),
				new sap.m.Column({
					header:new sap.m.Text({text:"Branch"})
				}),
				new sap.m.Column({
					header:new sap.m.Text({text:"Branch code"})
				}),
				new sap.m.Column({
					header:new sap.m.Text({text:"IFSC Code"})
				}),
				new sap.m.Column({
					header:new sap.m.Text({text:"Status"})
				}),
				new sap.m.Column({
					header:new sap.m.Text({text:"Transaction Limit"})
				})
			],
			
			items:{
				 path: "Users>/customer/Activ",
               
                  factory: function(sIdx, oContxt) {
                      debugger;
                      return new sap.m.ColumnListItem({
                         cells:[ 
                      	   new sap.m.Text({text: "{Users>CustId}" }),
                      	   new sap.m.Text({text: "{Users>AccNo}" }),
                      	   new sap.m.Text({text: "{Users>Branch}" }),
                      	   new sap.m.Text({text: "{Users>Branchcode}" }),
                      	   new sap.m.Text({text: "{Users>Ifsccode}" }),
                      	   new sap.m.Text({text: "{Users>Status}" }),
                      	   new sap.m.Text({text: "{Users>Translimit}" })
                      	   
                         ]
                      })
                  }	
		}	
		})	
		
		let odialog = new sap.m.Dialog({
		content:[
			 new sap.ui.layout.form.Form({
				title: new sap.ui.core.Title({ text: "Active User" }),
				layout: new sap.ui.layout.form.ResponsiveGridLayout({}),
				formContainers:[
					new sap.ui.layout.form.FormContainer({
						formElements:[
							new sap.ui.layout.form.FormElement
							({	
								label:"Name",
								fields:[ new sap.m.Input({width:"250px",
									type:sap.m.InputType.Number
									})]
							}),
			new sap.ui.layout.form.FormElement
			({	
				label:"Account No",
				fields:[ new sap.m.Input({width:"250px",
					type:sap.m.InputType.Number
					})]
			}),
			
			new sap.ui.layout.form.FormElement
			({	
				label:"Re-AccountNo",
				fields:[ new sap.m.Input({width:"250px",
					type:sap.m.InputType.Text
					})]
			}),
			
			new sap.ui.layout.form.FormElement
			({	
				label:"Branch",
				fields:[ new sap.m.Input({width:"250px",
					type:sap.m.InputType.Text
					})]
			}),
			new sap.ui.layout.form.FormElement
			({	
				label:"Branch Code",
				fields:[ new sap.m.Input({width:"250px",
					type:sap.m.InputType.Number
					})]
			}),
			new sap.ui.layout.form.FormElement
			({	
				label:"IFSC Code",
				fields:[ new sap.m.Input({width:"250px",
					type:sap.m.InputType.Number
					})]
			}),
			
			new sap.ui.layout.form.FormElement
			({	
				label:"Transaction Limit",
				fields:[ new sap.m.Input({width:"250px",
					type:sap.m.InputType.Number
					})]
			}),
//			new sap.ui.layout.form.FormElement
//			({	
//				label:"",
//				fields:[ new sap.m.Button({width:"250px",text:"submit",
//					press:()=>{
//						odialog.close();
//						
//					}
//					})]
//			})
			
							]
					})
					
					]
			})
		],
		beginButton: new sap.m.Button({
			text:"submit",
			press:()=>{
				debugger;
				oController.box1();
			}
				
		}),
		endButton:new sap.m.Button({
					text:"cancel",
					press:()=>{
						odialog.close();
					}
				})
			
		});
		
 		    return new sap.m.Page({
			title: "Active Users",
			showNavButton:true,
		subHeader:new sap.m.Bar({
			contentRight:[
				new sap.m.Button({
					icon:"sap-icon://sys-add",
						press:function(){
							debugger;
							odialog.open();	
						}
				})
			]	
		}),
			navButtonPress: () => {
				var router = sap.ui.core.UIComponent.getRouterFor(this);
				//router.navTo("details");
				//router.navTo("details",{"custId": oCustomer.Customer.CustId});
			router.navBack();
			},

			content: [
			oView.oTable2
			]
			
		});
	}

});