sap.ui.jsview("banking.OnlineBanking.totalInfo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf OnlineBanking.totalInfo
	*/ 
	getControllerName : function() {
		return "banking.OnlineBanking.totalInfo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf OnlineBanking.totalInfo
	*/ 
	createContent : function(oController) {
        let oView = this;
        debugger;
        // let oModel = oController.getOwnerComponent().getModel("Users");
        // this.setModel(oModel, "Users");

        return new sap.m.Page({
            title: "Info",
            showNavButton: true,
            navButtonPress: () => {
                oController.navi();
            },
            content: [

                new sap.ui.layout.form.Form({
                    title: new sap.ui.core.Title({ text: "Active User" }),
                    layout: new sap.ui.layout.form.ResponsiveGridLayout({
                        // labelSpanXL : 4,
                        // labelSpanL : 4,
                        // labelSpanM : 12,
                        // labelSpanS : 12,
                        // adjustLabelSpan : false,
                        // emptySpanXL : 0,
                        // emptySpanL :  0,
                        // emptySpanM :0,
                        // emptySpanS : 0,
                        // columnsXL : 2,
                        // columnsL : 2,
                        // columnsM : 1,
                        // singleContainerFullSize :false
                        }),
                    formContainers:[
                        new sap.ui.layout.form.FormContainer({
                            formElements:[
                                new sap.ui.layout.form.FormElement
                                ({
                                    label:"CustomerId",
                                    fields:[ new sap.m.Label({width:"250px",
                                        design:sap.m.LabelDesign.Bold,
                                       // text:"{Users>/CsCustomerinfo/Account/CustId}"
                                        text:"{MyInfo>/CsCustomerinfo/Account/CustId}"
                                    })]
                                }),
                                new sap.ui.layout.form.FormElement
                                ({
                                    label:"GenId",
                                    fields:[ new sap.m.Label({width:"250px",
                                        design:sap.m.LabelDesign.Bold,
                                        // text:"{Users>/CsCustomerinfo/Account/GenId}"
                                        text:"{MyInfo>/CsCustomerinfo/Account/GenId}"
                                    })]
                                }),

                                new sap.ui.layout.form.FormElement
                                ({
                                    label:"Account No",
                                    fields:[ new sap.m.Label({width:"250px",
                                        design:sap.m.LabelDesign.Bold,
                                        // text:"{Users>/CsCustomerinfo/Account/AccNo}"
                                        text:"{MyInfo>/CsCustomerinfo/Account/AccNo}"
                                    })]
                                }),

                                new sap.ui.layout.form.FormElement
                                ({
                                    label:"Name",
                                    fields:[ new sap.m.Label({width:"250px",
                                        design:sap.m.LabelDesign.Bold,
                                      //  text:"{Users>/CsCustomerinfo/Account/Name}"
                                        text:"{MyInfo>/CsCustomerinfo/Account/Name}"
                                    })]
                                }),
                                new sap.ui.layout.form.FormElement
                                ({
                                    label:"Mobile no",
                                    fields:[ new sap.m.Label({width:"250px",
                                        design:sap.m.LabelDesign.Bold,
                                        // text:"{Users>/CsCustomerinfo/Account/Mobileno}"
                                        text:"{MyInfo>/CsCustomerinfo/Account/Mobileno}"
                                    })]
                                }),
                                new sap.ui.layout.form.FormElement
                                ({
                                    label:"Branch",
                                    fields:[ new sap.m.Label({width:"250px",
                                        design:sap.m.LabelDesign.Bold,
                                        //text:"{Users>/CsCustomerinfo/Account/Branch}"
                                        text:"{MyInfo>/CsCustomerinfo/Account/Branch}"
                                    })]
                                }),

                                new sap.ui.layout.form.FormElement
                                ({
                                    label:"Branch code",
                                    fields:[ new sap.m.Label({width:"250px",
                                        design:sap.m.LabelDesign.Bold,
                                        //text:"{Users>/CsCustomerinfo/Account/Branchcode}"
                                        text:"{MyInfo>/CsCustomerinfo/Account/Branchcode}"
                                    })]
                                }),

                                new sap.ui.layout.form.FormElement
                                ({
                                    label:"Pin",
                                    fields:[ new sap.m.Label({width:"250px",
                                        design:sap.m.LabelDesign.Bold,
                                        // text:"{Users>/CsCustomerinfo/Account/Pin}"
                                        text:"{MyInfo>/CsCustomerinfo/Account/Pin}"
                                    })]
                                }),

                                new sap.ui.layout.form.FormElement
                                ({
                                    label:"Language",
                                    fields:[ new sap.m.Label({width:"250px",
                                        design:sap.m.LabelDesign.Bold,
                                        // text:"{Users>/CsCustomerinfo/Account/Language}"
                                        text:"{MyInfo>/CsCustomerinfo/Account/Language}"
                                    })]
                                }),

                                new sap.ui.layout.form.FormElement
                                ({
                                    label:"Status",
                                    fields:[ new sap.m.Label({width:"250px",
                                        design:sap.m.LabelDesign.Bold,
                                        // text:"{Users>/CsCustomerinfo/Account/Status}"
                                        text:"{MyInfo>/CsCustomerinfo/Account/Status}"
                                    })]
                                }),
                                new sap.ui.layout.form.FormElement
                                ({
                                    label:"Balance",
                                    fields:[ new sap.m.Label({width:"250px",
                                    design:sap.m.LabelDesign.Bold,
                                    // text:"{Users>/CsCustomerinfo/Account/Balance}"
                                        text:"{MyInfo>/CsCustomerinfo/Account/Balance}"
                                    })]
                                })

                            ]
                        })

                    ]
                }),
                new sap.m.Bar({
                       contentMiddle:[
                           new sap.m.Text({
                               text:"LATEST TRANSACTIONS",

                           })
                       ]
                }),
                new sap.m.Table({
                    alternateRowColors : true,
                    columns:[
                        new sap.m.Column({
                            header:new sap.m.Text({text : "from"})
                        }),
                        new sap.m.Column({
                            header:new sap.m.Text({text: "To"})
                        })  ,
                        new sap.m.Column({
                            header:new sap.m.Text({text: "Type"})
                        }),
                        new sap.m.Column({
                            header:new sap.m.Text({text:"Amount"})
                        }),
                        new sap.m.Column({
                            header:new sap.m.Text({text:"Balance"})
                        }),
                        new sap.m.Column({
                            header:new sap.m.Text({text:"Transaction date"})
                        }),
                        new sap.m.Column({
                            header:new sap.m.Text({text:"Transaction time"})
                        }),
                        new sap.m.Column({
                            header:new sap.m.Text({text:"Transaction type"})
                        })

                    ],

                    items:{

                       // path:"Users>/CsCustomerinfo/Transactions" ,
                        path:"MyInfo>/CsCustomerinfo/Transactions" ,
                        factory: function(sIdx, oContxt) {
                            debugger;
                            return new sap.m.ColumnListItem({
                                cells:[

                                    new sap.m.Text({text: "{MyInfo>Fromt}" }),
                                    new sap.m.Text({text: "{MyInfo>Tot}" }),
                                    new sap.m.Text({text: "{MyInfo>Type}" }),
                                    new sap.m.Text({text: "{MyInfo>Amount}" }),
                                    new sap.m.Text({text: "{MyInfo>Balance}" }),
                                    new sap.m.Text({text: "{MyInfo>Trsdate}" }),
                                    new sap.m.Text({text: "{MyInfo>Trstime}" }),
                                    new sap.m.Text({text: "{MyInfo>Trstype}" })

                                ]
                            })
                        }

                    }
                })

            ]
        });


    }
});


