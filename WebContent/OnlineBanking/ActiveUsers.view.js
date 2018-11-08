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
	     let oModel = new sap.ui.model.json.JSONModel("JSON/Users.json");
	     this.setModel(oModel, "Users");
	     
		oView.oTable2 = new sap.m.Table
		({
			
			columns:[
				
				new sap.m.Column({
					header:new sap.m.Text({text:"CustomerId"})
				}),
				new sap.m.Column({
					header:new sap.m.Text({text:"Accountno"})
				}),
				new sap.m.Column({
					header:new sap.m.Text({text:"Branch"})
				}),
				new sap.m.Column({
					header:new sap.m.Text({text:"Branchcode"})
				}),
				new sap.m.Column({
					header:new sap.m.Text({text:"IFSCCode"})
				}),
				new sap.m.Column({
					header:new sap.m.Text({text:"TransactionLimit"})
				}),
				new sap.m.Column({
					header:new sap.m.Text({text:"Status"})
				})
				
				
			],
			
			items:{
				 path: "Users>/ActiveUsers",
               
                  factory: function(sIdx, oContxt) {
                      debugger;
                      return new sap.m.ColumnListItem({
                         cells:[

                      	   new sap.m.Text({text: "{Users>customerId}" }),
                      	   new sap.m.Text({text: "{Users>accountno}" }),
                      	   new sap.m.Text({text: "{Users>branch}" }),
                      	   new sap.m.Text({text: "{Users>branchcode}" }),
                      	   new sap.m.Text({text: "{Users>IFSCCode}" }),
                      	   new sap.m.Text({text: "{Users>TransactionLimit}" }),
                      	   new sap.m.Text({text: "{Users>status}" })
                      	   
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
				label:"AccountNo",
				fields:[ new sap.m.Input({width:"250px",
					type:sap.m.InputType.Number
					})]
			}),
			
			new sap.ui.layout.form.FormElement
			({	
				label:"RetypeAccountNo",
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
		],
		footer: new sap.m.Bar({
			contentLeft:[
				new sap.m.Button({
					text:"submit"
				
				})
			], 
			contentRight: [
				new sap.m.Button({
					text:"cancel"
					
				})
			]
		})
		
		});
		
 		    return new sap.m.Page({
			title: "ActiveUsers",
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
				router.navTo("details");
			},

			content: [
			oView.oTable2
			]
			
		});
	}

});