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
						label:"UserName",
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
		
				
		
		
		let odialog1 = new sap.m.Dialog({
			title:"MessageBox",
	content:[
		new sap.m.Text({
			text:"Confirm the transaction"
		}),
//		],
//		footer: new sap.m.Bar({
//			content:[
			new sap.m.Button({
				text:"ok"
			}),
			new sap.m.Button({
				text:"cancel",
				press:()=>{
					odialog1.close();
				}
			})
			]
//		})
//		
	
		})
		
		
 		return new sap.m.Page({
 			showNavButton:true,
 			title:"New Transaction",
			navButtonPress: () => {
				var router = sap.ui.core.UIComponent.getRouterFor(this);
				router.navTo("details");
			},
			content: [
			      Form
			]
		});
	}
});