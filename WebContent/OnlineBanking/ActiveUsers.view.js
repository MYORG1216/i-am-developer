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
								label:"customerId",
								fields:[ new sap.m.Input({width:"250px",
									type:sap.m.InputType.Number
									})]
							}),
			new sap.ui.layout.form.FormElement
			({	
				label:"AccountNo",
				fields:[ new sap.m.Input({width:"250px",
					type:sap.m.InputType.Number
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
				label:"BranchCode",
				fields:[ new sap.m.Input({width:"250px",
					type:sap.m.InputType.Number
					})]
			}),
			new sap.ui.layout.form.FormElement
			({	
				label:"IFSCCode",
				fields:[ new sap.m.Input({width:"250px",
					type:sap.m.InputType.Number
					})]
			}),
			new sap.ui.layout.form.FormElement
			({	
				label:"Status",
				fields:[ new sap.m.Input({width:"250px",
					type:sap.m.InputType.Text
					})]
			}),
			new sap.ui.layout.form.FormElement
			({	
				label:"TransactionLimit",
				fields:[ new sap.m.Input({width:"250px",
					type:sap.m.InputType.Number
					})]
			}),
			new sap.ui.layout.form.FormElement
			({	
				label:"",
				fields:[ new sap.m.Button({width:"250px",text:"submit",
					press:()=>{
						odialog.close();
						
					}
					})]
			})
			
							]
					})
					
					]
			})
		]
		});
		
 		return new sap.m.Page({
			title: "ActiveUsers",
			subHeader:new sap.m.Bar({
				contentLeft:[
					new sap.m.Button({text:"",
						icon:"sap-icon://nav-back",
						press:()=>{
						oController.navigate();
						}
					})
					],
					contentRight:[
						new sap.m.Button({
							icon:"sap-icon://sys-add",
								press:()=>{
									odialog.open();
								}
						}),
						new sap.m.Button({
							icon:"sap-icon://sys-minus"
						})
					]
				}),
			content: [
			
			]
		});
	}

});