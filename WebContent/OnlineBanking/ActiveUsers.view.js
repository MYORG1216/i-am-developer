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
	   //  let oModel1 = oController.getOwnerComponent().getModel("Users");
         let oModel1 = oController.getOwnerComponent().getModel("MyInfo");
	     //this.setModel(oModel, "Users");
	      this.setModel(oModel1,"MyInfo");
	     
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
			    path:"MyInfo>/customer/Activ",
				 // path: "MyInfo>/customer/Activ",
                // parts: ['MyInfo>/loginbutton','MyInfo>/form2'],
                  factory: function(sIdx, oContxt) {
                      debugger;
                          return new sap.m.ColumnListItem({
                         cells:[ 
                      	   new sap.m.Text({text: "{MyInfo>CustId}" }),
                      	   new sap.m.Text({text: "{MyInfo>AccNo}" }),
                      	   new sap.m.Text({text: "{MyInfo>Branch}" }),
                      	   new sap.m.Text({text: "{MyInfo>Branchcode}" }),
                      	   new sap.m.Text({text: "{MyInfo>Ifsccode}" }),
                      	   new sap.m.Text({text: "{MyInfo>Status}" }),
                      	   new sap.m.Text({text: "{MyInfo>Translimit}" })
                         ]
                      })
                  }	
		}	
		})
		
		 oView.odialog = new sap.m.Dialog({
			title:"Active User",
		content:[
			 new sap.ui.layout.form.Form({
				// title: new sap.ui.core.Title({ text: "Active User" }),
				layout: new sap.ui.layout.form.ResponsiveGridLayout({}),
				formContainers:[
					new sap.ui.layout.form.FormContainer({
						formElements:[
                            new sap.ui.layout.form.FormElement
                            ({
                                label:"CustomerId",
                                 fields:[ new sap.m.Label({
                                     // width:"250px",
                                    // type:sap.m.InputType.Number,
                                    design:sap.m.LabelDesign.Bold,
                                    text: "{MyInfo>/customer/Customer/CustId}"
                                })]
                            }),
                            new sap.ui.layout.form.FormElement
							({	
								label:"Bankname",
								fields:[ new sap.m.Input({width:"250px",
									type:sap.m.InputType.Text,
                                    value: "{MyInfo>/addUser/Bankname}"
									})]
							}),
			new sap.ui.layout.form.FormElement
			({	
				label:"Account No",
				fields:[ new sap.m.Input({width:"250px",
					type:sap.m.InputType.Text,
                    value: "{MyInfo>/addUser/AccNo}"
					})]
			}),
			new sap.ui.layout.form.FormElement
			({	
				label:"Branch",
				fields:[ new sap.m.Input({width:"250px",
					type:sap.m.InputType.Text,
                    value: "{MyInfo>/addUser/Branch}"
					})]
			}),
			new sap.ui.layout.form.FormElement
			({	
				label:"Branch Code",
				fields:[ new sap.m.Input({width:"250px",
					type:sap.m.InputType.Number,
                    value: "{MyInfo>/addUser/Branchcode}"
					})]
			}),
			new sap.ui.layout.form.FormElement
			({	
				label:"IFSC Code",
				fields:[ new sap.m.Input({width:"250px",
					type:sap.m.InputType.Number,
                    value: "{MyInfo>/addUser/IFSCCODE}"
					})]
			}),
			
			new sap.ui.layout.form.FormElement
			({	
				label:"Transaction Limit",
				fields:[ new sap.m.Input({width:"250px",
					type:sap.m.InputType.Number,
                    value: "{MyInfo>/addUser/Translimit}"
					})]
			}),

					]
					})
					]
			}).addStyleClass("Styling2")
		],
		beginButton: new sap.m.Button({
			text:"submit",
			press:()=>{
				debugger;
				//oController.box1();
                    let oModel1 = oController.getOwnerComponent().getModel("MyInfo");
                   // let oModel = oController.getOwnerComponent().getModel("Users");
                    var odata = oModel1.getProperty("/addUser");
                    var odata1 = oModel1.getProperty("/customer/Customer");
                    oConfig = {
                        "IsActuser": {
                            "CustId": odata1.CustId,
                            "Bankname": odata.Bankname,
                            "AccNo": odata.AccNo,
                            "Branch": odata.Branch,
                            "Branchcode": odata.Branchcode,
                            "IFSC CODE": odata.IFSCCODE,
                            "Translimit": odata.Translimit,
                            "Status": "A"
                        }
                    };
                    oController.getOwnerComponent().callServer1(oConfig,"z37_BANKING_ACTUSER_API").then((response)=>{
                    //oView.page.setBusy(false);
                    if(oModel1){
                        odata = {};
                        oModel1.setProperty("/addUser",odata);
                        oModel1.setProperty("/customer/Activ", response.CtActusers);
                        }
                });
                oView.odialog.close();
			}
		}),
		endButton:new sap.m.Button({
					text:"cancel",
					press:()=>{
						oView.odialog.close();
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
							oView.odialog.open();
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
			oView.oTable2,
				oView.odialog
			]
		});
	}
});