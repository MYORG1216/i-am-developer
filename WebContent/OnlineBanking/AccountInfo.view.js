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
	    // let oModel = new sap.ui.model.json.JSONModel("JSON/Users.json");
		// let oModel = oController.getOwnerComponent().getModel("Users");
        let oModel = oController.getOwnerComponent().getModel("MyInfo");
		//router.navTo("details",{"custId":oCustomer.CsCustomer.Customer.CustId});
	     debugger;
	    // this.setModel(oModel,"Users");
        this.setModel(oModel,"MyInfo");
        oView.oTable = new sap.m.Table({
			//mode: sap.m.ListMode.SingleSelectMaster,
				items: {
					// path:"Users>/customer/Accounts",
                    path:"MyInfo>/customer/Accounts",
                  //  path: "Users>/customer/Account",  
                  //  templateShareable: true,
                    factory: function(sIdx, oContxt) {
                        return new sap.m.ColumnListItem({
                       	type: sap.m.ListType.Navigation,
                        	press:(oEvt)=>{
                        		let selectedAcc = oEvt.getSource().getBindingContext("MyInfo").getObject();

                                let oModel1 = oController.getOwnerComponent().getModel("MyInfo");
                               // let oModel = oController.getOwnerComponent().getModel("Users");
                               // var odata = oModel1.getProperty("/customer/Customer");
                                 var odata = oModel1.getProperty("/data");
                                oConfig = {
                                    IsCustomer: {
                                        Customerid : odata.customerId,
                                        Password  :   odata.Password,
										AccNo :  selectedAcc.AccNo
                                    }
                                };

                                        oController.callServer4(oConfig).then((response)=>{
                                    if(oModel){
                                        oModel.setProperty("/CsCustomerinfo", response.CsCustomerinfo);
                                    }
                                    else{
                                        oController.navi();
                                    }
                                    oController.navi(selectedAcc);
                                });
                        	},
                           cells:[
                        	   new sap.m.Text({text: "{MyInfo>CustId}" }),
                        	   new sap.m.Text({text: "{MyInfo>GenId}" }),
                        	   new sap.m.Text({text: "{MyInfo>AccNo}" }),
                        	   new sap.m.Text({text: "{MyInfo>Name}" }),
                        	   new sap.m.Text({text: "{MyInfo>Mobileno}" }),
                        	   new sap.m.Text({text: "{MyInfo>Branch}" }),
                        	   new sap.m.Text({text: "{MyInfo>Branchcode}" }),
                        	   new sap.m.Text({text: "{MyInfo>Pin}" }),
                        	   new sap.m.Text({text: "{MyInfo>Language}" }),
                        	   new sap.m.Text({text: "{MyInfo>Status}" }),
							   new sap.m.Text({text: "{MyInfo>Bankname}"}),
							   new sap.m.Text({text:"{MyInfo>Nickname}"})

                           ]
                        })
                    }
                },
                columns:[		
    				new sap.m.Column({
    					header:new sap.m.Text({text:"Customer Id"})
    				}),
    				new sap.m.Column({
    					header:new sap.m.Text({text:"Gen Id"})
    				}),
    				new sap.m.Column({
    					header:new sap.m.Text({text:"Account No"})
    				}),
    				new sap.m.Column({
    					header:new sap.m.Text({text:"Name"})
    				}),
    				new sap.m.Column({
    					header:new sap.m.Text({text:"Mobile no"})
    				}),
    				new sap.m.Column({
    					header:new sap.m.Text({text:"Branch"})
    				}),
    				new sap.m.Column({
    					header:new sap.m.Text({text:"Branch code"})
    				}),
    				new sap.m.Column({
    					header:new sap.m.Text({text:"Pin"})
    				}),
    				new sap.m.Column({
    					header:new sap.m.Text({text:"Language"})
    				}),
    				new sap.m.Column({
    					header:new sap.m.Text({text:"Status"})
    				}),
					new sap.m.Column({
						header:new sap.m.Text({text:"Bank name"})
					}),
					new sap.m.Column({
						header:new sap.m.Text({text:"Nick name"})
					})
    			],
//    			select :(oEvt)=>{
//    				debugger;
//    				oController.navi();
//    				
//    			}

		});

        oView.odialog = new sap.m.Dialog({
            title:" Another account",
            content:[
                new sap.ui.layout.form.Form({

                    layout: new sap.ui.layout.form.ResponsiveGridLayout({}),
                    formContainers:[
                        new sap.ui.layout.form.FormContainer({
                            formElements:[
                                new sap.ui.layout.form.FormElement
                                ({
                                    label:"Customer Id",
                                    fields:[  new sap.m.Label({
                                        design:sap.m.LabelDesign.Bold,
                                        text: "{MyInfo>/customer/Customer/CustId}"
                                    })]
                                }),
                                new sap.ui.layout.form.FormElement
                                ({
                                    label:"Name",
                                    fields:[ new sap.m.Input({width:"250px",
                                        type:sap.m.InputType.Text,
                                        value: "{MyInfo>/addCustomer/Name}"
                                    })]
                                }),

                                new sap.ui.layout.form.FormElement
                                ({
                                    label:"NickName",
                                    fields:[ new sap.m.Input({width:"250px",
                                        type:sap.m.InputType.Text,
                                        value: "{MyInfo>/addCustomer/NickName}"
                                    })]
                                }),

                                new sap.ui.layout.form.FormElement
                                ({
                                    label:"Account No",
                                    fields:[ new sap.m.Input({width:"250px",
                                        type:sap.m.InputType.Text,
                                        value: "{MyInfo>/addCustomer/AccountNo}"
                                    })]
                                }),

                                new sap.ui.layout.form.FormElement
                                ({
                                    label:"Mobile No",
                                    fields:[ new sap.m.Input({width:"250px",
                                        type:sap.m.InputType.Number,
                                        value: "{MyInfo>/addCustomer/MobileNo}"
                                    })]
                                }),

                                new sap.ui.layout.form.FormElement
                                ({
                                    label:"BankName",
                                    fields:[ new sap.m.Input({width:"250px",
                                        type:sap.m.InputType.Text,
                                        value: "{MyInfo>/addCustomer/BankName}"
                                    })]
                                }),


                                new sap.ui.layout.form.FormElement
                                ({
                                    label:"Branch",
                                    fields:[ new sap.m.Input({width:"250px",
                                        type:sap.m.InputType.Text,
                                        value: "{MyInfo>/addCustomer/Branch}"
                                    })]
                                }),
                                new sap.ui.layout.form.FormElement
                                ({
                                    label:"Branch Code",
                                    fields:[ new sap.m.Input({width:"250px",
                                        type:sap.m.InputType.Number,
                                        value: "{MyInfo>/addCustomer/BranchCode}"
                                    })]
                                }),
                                new sap.ui.layout.form.FormElement
                                ({
                                    label:"Pin",
                                    fields:[ new sap.m.Input({width:"250px",
                                        type:sap.m.InputType.Number,
                                        value: "{MyInfo>/addCustomer/Pin}"
                                    })]
                                }),
                                new sap.ui.layout.form.FormElement
                                ({
                                    label:"Language",
                                    fields:[ new sap.m.Input({width:"250px",
                                        type:sap.m.InputType.Text,
                                        value: "{MyInfo>/addCustomer/Language}"
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
                    let oModel1 = oController.getOwnerComponent().getModel("MyInfo");
                    var odata = oModel1.getProperty("/addCustomer");
                    var odata1 = oModel1.getProperty("/customer/Customer");
                    oConfig = {
                        "IsNewcustomer": {
                            "CustId": odata1.CustId,
                             "Name":odata.Name,
                            "Nickname":odata.NickName,
                            "AccNo": odata.AccountNo,
                            "Bankname": odata.BankName,
                            "Mobileno":odata.MobileNo,
                            "Branch": odata.Branch,
                            "Branchcode": odata.BranchCode,
                            "Pin": odata.Pin,
                            "Language": odata.Language,
                            "Status": "A"
                        }
                    };
                    oController.getOwnerComponent().callServer1(oConfig,"Z37_BANKING_NEWCUSTOMER_API").then((response)=>{
                        if(oModel1){
                            oModel1.setProperty("/customer/Activ",response.CtAcnt);
                        }
                    });
                odata = {};
                    oModel1.setProperty("/addCustomer",odata);
                }
            }),
            endButton:new sap.m.Button({
                text:"cancel",
                press:()=>{
                  oView.odialog.close();
                }
            })
        });

//	   oView.oTable.bindItems("Users>/Accountdetails",
//			   new sap.m.ColumnListItem({
//				   cells:[
////			new sap.m.Text({text: "{Users>generateId" }),
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

           headerContent:[
           	new sap.m.Button({text:"add",
               icon: "sap-icon://citizen-connect",
				press:()=>{
           		oView.odialog.open();
			}
            }),
		   ],
			 title: "Account Info",
			showNavButton:true,
			navButtonPress: () => {
			
				var router = sap.ui.core.UIComponent.getRouterFor(this);
				router.navBack("details");

//				 router.navTo("details",{"custId": oCustomer.Customer.CustId});
//				router.navTo("details",custId);
			},
			
			content: [
			   oView.oTable,
                oView.odialog
			]
		});
	}
});