sap.ui.jsview("banking.OnlineBanking.firstpage", {

    getControllerName: function () {
        return "banking.OnlineBanking.firstpage";
    },

    createContent: function (oController) {
        let oView = this;
        oController = oView.getController();
        // let oModel2 = new sap.ui.model.json.JSONModel({
        //     "data": {
        //         "customerId": "",
        //         "Password": ""
        //     },
        //     "createUser": {
        //         "customerId": "",
        //         "Name": "",
        //         "Password": "",
        //         "RePwd": "",
        //         "mobileNo": "",
        //         "DOB": "",
        //         "Mail": "",
        //         "Country": ""
        //     },
        //     "Accountinfo" : {
        //         "AccountNo":"",
        //         "Bank name":"",
        //         "Mobile No":"",
        //         "Branch":"",
        //         "Branch code":"",
        //         "Pin":"",
        //         "Language":"",
        //         "Status":""
        //     },
        //     "addUser" : {
        //         "CustomerId" :"",
        //         "Name" : "",
        //         "AccountNo":"",
        //         "Branch":"",
        //         "BranchCode":"",
        //         "IFSCCode":"",
        //         "TransactionLimit":"",
        //         "Status":""
        //     },
        //     "loginbutton": true,
        //     "register": false,
        //     "form2":false
        //     // "submitbutton":true
        // });
        // oView.setModel(oModel2, "MyInfo");
        // let oModel7 = oController.getOwnerComponent().getModel("users");

        jQuery.sap.require("sap.m.MessageBox");
        // let CreateUserModel = new sap.ui.model.json.JSONModel({
        // "createUser": {
        //     "customerId": "",
        //     "Name": "",
        //     "Password": "",
        //     "RePwd": "",
        //     "mobileNo": "",
        //     "DOB": "",
        //     "Mail": "",
        //     "Country": ""
        // },
        //
        // // "form1":true,
        // "form2":false
        // });
        // oView.setModel(CreateUserModel, "Users1");
        // let Locale = sap.ui.getCore().setModel(CreateUserModel, "Users1");
        oView.a = new sap.m.Input({
            width: "250px",
            type: sap.m.InputType.Text,
            value:"{MyInfo>/Registeruser/Name}"
        });

        oView.b = new sap.m.Input({
            width: "250px",
            type: sap.m.InputType.Number,
            value:"{MyInfo>/Registeruser2/mobileNo}"
        });

        oView.c = new sap.m.Input({
            width: "250px",
            type: sap.m.InputType.Number,
            value:"{MyInfo>/Registeruser2/DOB}"
        });

        oView.d = new sap.m.Input({
            width: "250px",
            type: sap.m.InputType.Text,
            value:"{MyInfo>/Registeruser2/Country}"
        });

        oView.e = new sap.m.Input({
            width: "250px",
            type: sap.m.InputType.Password,
            value:"{MyInfo>/Registeruser2/Password}"

        });

        oView.f = new sap.m.Input({
            width: "250px",
            type: sap.m.InputType.RetypePassword
        });

        oView.g = new sap.m.Input({
            width: "250px",
            type: sap.m.InputType.Number,
            value:"{MyInfo>/Registeruser2/customerId}"
        });

        oView.oForm = new sap.ui.layout.form.Form({
            visible:
                {
                    path: 'MyInfo>/loginbutton',
                    formatter: (bValue) => {
                        return bValue === false ? false : true;
                    }
                },

            title: new sap.ui.core.Title({text: "ONLINE BANKING SERVICES"}),
            layout: new sap.ui.layout.form.ResponsiveGridLayout({}),
            formContainers: [
                new sap.ui.layout.form.FormContainer({
                    formElements: [
                        new sap.ui.layout.form.FormElement({
                            label: "Customer Id",
                            fields: [new sap.m.Input({
                                width: "100px",
                                type: sap.m.InputType.customerId,
                                value: "{MyInfo>/data/customerId}"
                            })]
                        }),
                        new sap.ui.layout.form.FormElement
                        ({
                            label: "Password",
                            fields: [new sap.m.Input({
                                width: "100px",
                                type: sap.m.InputType.Password,
                                value: "{MyInfo>/data/Password}"
                            })]
                        }),
                    ]
                })
            ]
        });

        oView.oForm1 = new sap.ui.layout.form.Form({
            visible:
                {
                    parts: ['MyInfo>/loginbutton','MyInfo>/form2'],
                    //  path:'{MyInfo>/loginbutton}',
                    formatter: (bValue,cValue) => {
                        return bValue === false && cValue === false;
                    }
                },
            title: new sap.ui.core.Title({text: "User Info"}),
            layout: new sap.ui.layout.form.ResponsiveGridLayout({}),
            formContainers: [
                new sap.ui.layout.form.FormContainer({
                    formElements: [
                        new sap.ui.layout.form.FormElement({
                            label: "CustomerId",
                            fields: [oView.g]
                        }),

                        new sap.ui.layout.form.FormElement({
                            label: "Name",
                            fields: [oView.a]
                        }),

                        new sap.ui.layout.form.FormElement({
                            label: "Password",
                            fields: [oView.e]
                        }),

                        new sap.ui.layout.form.FormElement({
                            label: "Retype Pwd",
                            fields: [oView.f]
                        }),

                        new sap.ui.layout.form.FormElement({
                            label: "MobileNo",
                            fields: [oView.b]
                        }),
                        new sap.ui.layout.form.FormElement({
                            label: "DOB",
                            fields: [oView.c]
                        }),
                        new sap.ui.layout.form.FormElement({
                            label: "Mail",
                            fields: [new sap.m.Input({
                                width: "250px",
                                type: sap.m.InputType.Mail,
                                value:"{MyInfo>/Registeruser2/Mail}"
                            })]
                        }),
                        new sap.ui.layout.form.FormElement({
                            label: "Country",
                            fields: [oView.d]
                        })
                    ]
                })
            ]
        }).addStyleClass("Styling");

        oView.oForm2 = new sap.ui.layout.form.Form({
            visible:
                {
                    path: 'MyInfo>/form2',
                    formatter: (cValue) => {
                        return cValue === true ;

                    }
                },
            title: new sap.ui.core.Title({text: "YOU COMPLETED FIRST PHASE"}),
            layout: new sap.ui.layout.form.ResponsiveGridLayout({}),
            formContainers: [
                new sap.ui.layout.form.FormContainer({
                    formElements: [
                        new sap.ui.layout.form.FormElement({
                            label: "AccountNo",
                            fields: [new sap.m.Input({
                                width: "100px",
                                type: sap.m.InputType.Text,
                                value:"{MyInfo>/Registeruser/Accountno}"
                            })]
                        }),
                        new sap.ui.layout.form.FormElement({
                            label: "Bank name",
                            fields: [new sap.m.Input({
                                width: "100px",
                                type: sap.m.InputType.Text,
                                value:"{MyInfo>/Registeruser/Bankname}"
                            })]
                        }),
                        new sap.ui.layout.form.FormElement({
                            label: "Mobile No",
                            fields: [new sap.m.Input({
                                width: "100px",
                                type: sap.m.InputType.Number,
                                value:"{MyInfo>/Registeruser/Mobileno}"
                            })]
                        }),
                        new sap.ui.layout.form.FormElement({
                            label: "Branch",
                            fields: [new sap.m.Input({
                                width: "100px",
                                type: sap.m.InputType.Text,
                                value:"{MyInfo>/Registeruser/Branch}"
                            })]
                        }),
                        new sap.ui.layout.form.FormElement({
                            label: "Branch code",
                            fields: [new sap.m.Input({
                                width: "100px",
                                type: sap.m.InputType.Number,
                                value:"{MyInfo>/Registeruser/Branchcode}"
                            })],
                        }),
                        new sap.ui.layout.form.FormElement({
                            label: "Pin",
                            fields: [new sap.m.Input({
                                width: "100px",
                                type: sap.m.InputType.Number,
                                value:"{MyInfo>/Registeruser/Pin}"
                            })]
                        }),
                        new sap.ui.layout.form.FormElement({
                            label: "Language",
                            fields: [new sap.m.Input({
                                width: "100px",
                                type: sap.m.InputType.Text,
                                value:"{MyInfo>/Registeruser/Language}"
                            })]
                        }),
                        new sap.ui.layout.form.FormElement({
                            label: "Status",
                            fields: [new sap.m.Input({
                                width: "100px",
                                type: sap.m.InputType.Text,
                                value:"{MyInfo>/Registeruser/Status}"
                            })]
                        })
                    ]
                })
            ]
        }).addStyleClass("Styling1");

        oView.page = new sap.m.Page({
            title: "AXIS ONLINE BANKING SERVICES",
            customHeader: new sap.m.Bar({
                contentMiddle: [
                    new sap.m.Text({text: "ONLINE BANKING SERVICE"})
                ],
                contentRight: [
//						new sap.m.Toolbar({
//
//							content:[
//							text:"ONLINE BANKING SERVICE"
//						]
//						}),
                    new sap.m.ActionSelect({
                        icon: "sap-icon://pull-down",
//							buttons:[
//							new sap.m.Button({
//								icon:"sap-icon://person-placeholder",
//								text:"Login",
////								press: ()=>{
////									let oModel = oView.getModel("MyInfo");
////									oModel.setProperty("/loginbutton", true);
////								}
//							}),
//							new sap.m.Button({
//								icon:"sap-icon://customer",
//								text:"NewUser",
////								  press:()=>{
////								    	let oModel = oView.getModel("MyInfo");
////										oModel.setProperty("/loginbutton", false);
////								    }
//							})
//							],
                        items: [
                            new sap.ui.core.Item({
                                key: "Login",
                                text: "Login"
                            }),
                            new sap.ui.core.Item({
                                key: "Register",
                                text: "Register"
                            })
                        ],
                        change: (oEvent) => {
                            debugger;
                            let oSelectedItem = oEvent.getParameter("selectedItem");
                            if (oSelectedItem) {
                                let oModel = oController.getOwnerComponent().getModel("MyInfo");
                                sKey = oSelectedItem.getKey();

                                // if (sKey && oModel) {
                                // (sKey === "Register") ? oModel.setProperty("/loginbutton", false) :
                                //     oModel.setProperty("/loginbutton", true);
                                // }
                                if(sKey === "Register" )
                                {
                                    oModel.setProperty("/loginbutton",false);
                                    debugger
                                }
                                else if(sKey === "Login")
                                {
                                    oModel.setProperty("/loginbutton",true);
                                    oModel.setProperty("/form2",false);
                                    debugger
                                    // oView.oForm2.setVisible(false);
                                }
                                // if(sKey === "Login")
                                // {
                                //     oModel.setProperty("/loginbutton",true);
                                //     oView.oForm2.setVisible(false);
                                // }
                            }
                        }
                    })
                ]
            }),
            busyIndicatorDelay: 1,
            content: [
                new sap.m.VBox({
                    justifyContent: "Center",
                    alignItems: "Center",
                    items: [
//				new sap.m.HBox({
//					items:[
//				new sap.m.SegmentedButton({
//					buttons:[
//						new sap.m.Button({
//							text:"Login",
//							width:"100px",
//							press: ()=>{
//								let oModel = oView.getModel("MyInfo");
//								oModel.setProperty("/loginbutton", true);
//							}
//
//						}),
//						new sap.m.Button({
//							text:"New User",
//						    width:"100px",
//						    press:()=>{
//						    	let oModel = oView.getModel("MyInfo");
//								oModel.setProperty("/loginbutton", false);
//						    }
//						})
//
//					]
//				})
//				]
//				}),
                        new sap.m.VBox({
                            items: [
                                oView.oForm,
                                oView.oForm1,
                                oView.oForm2
                            ]
                        }),
                        new sap.m.HBox({
                            items: [
                                new sap.m.SegmentedButton({
                                    buttons: [
                                        new sap.m.Button({
                                            text:"continue",
                                            visible:
                                                {
                                                    parts: ['MyInfo>/loginbutton','MyInfo>/form2'],
                                                    formatter: (bValue,cValue) => {
                                                        return bValue === false && cValue === false;
                                                    }
                                                },
                                            press:(oEvt) => {
                                                oController.navi1();
                                                oView.getModel("MyInfo").setProperty("/form2", true)
                                               //
                                               //  let oModel1 = oController.getOwnerComponent().getModel("MyInfo");
                                               //  let  odata =    oModel1.getProperty("/Registeruser");
                                               //
                                               //  // let oModel1 = sap.ui.getCore().getModel("Users1");
                                               //  // let oModel  = oController.getOwnerComponent().getModel("Users");
                                               //  // let contnue = oView.getModel("Users1").getProperty("/form2");
                                               //  // var odata   = oModel1.getProperty("/createUser");
                                               //  oConfig = {
                                               //      IsCustomerinfo: {
                                               //          CustId : odata.customerId,
                                               //          Password : odata.Password,
                                               //          Name :odata.Name,
                                               //          Mobileno :odata.mobileNo,
                                               //          DOB:odata.DOB,
                                               //          Email: odata.Mail,
                                               //          Country:odata.Country
                                               //
                                               //      }
                                               //  };
                                               //  oController.getOwnerComponent().callServer1(oConfig,"Z37_BANKING_NEWCUSTOMER_API").then((response)=> {
                                               //      if (oModel1) {
                                               //          oModel1.setProperty("/customer/Activ", response.CtAcnt);
                                               //      }
                                               //  })
                                            }
                                        }),
                                        new sap.m.Button({
                                            text: "submit",
                                            width: "100px",
                                            visible:
                                                {
                                                    parts: ['MyInfo>/loginbutton','MyInfo>/form2'],
                                                    formatter: (bValue,cValue) => {
                                                        return bValue || cValue;
                                                    }
                                                },
                                            press: () => {
                                                debugger
                                                var oModel1 = oController.getOwnerComponent().getModel("MyInfo");
                                                var submit =  oView.getModel("MyInfo").getProperty("/loginbutton");
                                                // var oModel = oController.getOwnerComponent().getModel("Users");
                                                var odata =    oModel1.getProperty("/data");
                                                var odata1 =   oModel1.getProperty("/Registeruser");
                                                var odata2 =  oModel1.getProperty("/Registeruser2");
                                                oConfig = {
                                                    IsCustomer: {
                                                        Customerid: odata.customerId,
                                                        Password: odata.Password
                                                    },
                                                    IsCustomerinfo: {
                                                                 "CustId": odata2.customerId,
                                                                 "Password" : odata2.Password,
                                                                 "Name" :odata2.Name,
                                                                 "Mobileno" :odata2.mobileNo,
                                                                 "DOB":odata2.DOB,
                                                                 "Email": odata2.Mail,
                                                                 "Country":odata2.Country
                                                             },
                                                    IsAccountholder:{
                                                        "AccNo":odata1.Accountno,
                                                        "Nickname":odata1.Nickname,
                                                        "Bankname":odata1.Bankname,
                                                        "Mobileno":odata1.Mobileno,
                                                        "Branch":odata1.Branch,
                                                        "Branchcode":odata1.Branchcode,
                                                        "Pin":odata1.Pin,
                                                        "Language":odata1.Language,
                                                        "Status":odata1.Status
                                                            }
                                                };
                                                // oView.page.setBusy(true);
                                                if (submit === false) {
                                                    oController.getOwnerComponent().callServer1(oConfig,"Z37_BANKING_CREATE_API").then((response)=> {
                                                        if (oModel1) {
                                                            oModel1.setProperty("/customer/Activ", response.CtAcnt);
                                                        }
                                                        // oController.callServer1(oConfig).then((response) => {
                                                        //     debugger
                                                        // oView.page.setBusy(false);
                                                        // let oModel1 = oController.getOwnerComponent().getModel("MyInfo");
                                                        // if (oModel1) {
                                                        //     oModel1.setProperty("/customer", response.CsCustomer);
                                                        // }
                                                        // if (response.CsCustomer.Customer.Name === "No customer") {
                                                        // sap.m.MessageBox.information("No user with these credentials", {
                                                        //     title: "Please enter the valid data",
                                                        // });
                                                        // }
                                                        // else {
                                                        //     oController.navi();
                                                        // }
                                                        // });
                                                    });
                                                }
                                                else {
                                                    oController.callServer(oConfig).then((response) => {
                                                        debugger
                                                        oView.page.setBusy(false);
                                                        let oModel1 = oController.getOwnerComponent().getModel("MyInfo");
                                                        debugger
                                                        if (oModel1) {
                                                            oModel1.setProperty("/customer", response.CsCustomer);
                                                        }

                                                        if (response.CsCustomer.Customer.Name === "No customer") {
                                                            sap.m.MessageBox.information("No user with these credentials", {
                                                                title: "Please enter the valid data",
                                                            });
                                                        }
                                                        else {
                                                            oController.navi();
                                                        }
                                                    });
                                                }
//								 oController.backendCall(oConfig,
//										 (oResponse)=>{
//											 debugger;
//										 },
//										 (oError)=>{
//											 debugger;
//										 });
                                            }
                                        }),
                                        new sap.m.Button({
                                            text: "cancel",
                                            width: "100px",
                                            // showValueHelp:true,
                                            visible:
                                                {
                                                    parts: ['MyInfo>/loginbutton','MyInfo>/form2'],
                                                    formatter: (bValue,cValue) => {
                                                        return bValue || cValue;
                                                    }
                                                },
                                            press: () => {
                                                debugger

                                                oConfig.empty;
                                                sap.m.MessageBox.error("you clicked cancel button", {
                                                    title: "Error Msg"

                                                })
                                            }
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        });
        return oView.page;
    }
});