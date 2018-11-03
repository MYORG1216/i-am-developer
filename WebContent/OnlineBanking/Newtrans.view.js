sap.ui.jsview("banking.OnlineBanking.Newtrans", {

 
	getControllerName : function() {
		return "banking.OnlineBanking.Newtrans";
	},

	
	createContent : function(oController) {
		
		let Form = new sap.ui.layout.form.Form({
			title: new sap.ui.core.Title({ text: "Transaction Form" }),
			layout: new sap.ui.layout.form.ResponsiveGridLayout({}),
			formContainers:[
				new sap.ui.layout.form.FormContainer({
				formElements:[
					new sap.ui.layout.form.FormElement
					({	
						label:"UserInfo",
						fields:[ new sap.m.Input({width:"250px",
							type:sap.m.InputType.Number
							})]
					}),
					new sap.ui.layout.form.FormElement
					({	
						label:"AccountNo",
						fields:[ new sap.m.ComboBox({width:"250px",
						
							type:sap.m.InputType.Number
							})]
					}),
					
					new sap.ui.layout.form.FormElement
					({
						label:"TO AccountNo",
						fields:[ new sap.m.Input({width:"250px",
							type:sap.m.InputType.Number
							})]	
						
					}),
					new sap.ui.layout.form.FormElement
					({
						label:"Amount",
					    fields:[ new sap.m.Input({width:"250px",
					    	type:sap.m.InputType.Number
					    })]
					}),
					new sap.ui.layout.form.FormElement
					({
						label:"Remarks",
						fields:[ new sap.m.Input({width:"250px",
						types:sap.m.InputType.Number	
						})]
					}),
					new sap.ui.layout.form.FormElement
					({
						
						fields:[ 

							new sap.m.SegmentedButton({
								buttons:[
									new sap.m.Button({
										text:"proceed",
										width:"100px"
									}),
									new sap.m.Button({
										text:"cancel",
									    width:"100px"
									})
								]
							})
							
						]
					})
					
				]
				})
				]
				})  
		
		
 		return new sap.m.Page({
			
			subHeader:new sap.m.Bar({
				
				contentLeft:[
					new sap.m.Button({text:"",
						icon:"sap-icon://nav-back",
						press:()=>{
						oController.navigate();
						}
					})
					],
					contentMiddle:[
						new sap.m.Text({text:"Newtrans",
							})
					]
				}),
			content: [
				
			      Form
			]
		});
	}

});