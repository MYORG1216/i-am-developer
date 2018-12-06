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
        let oModel = oController.getOwnerComponent().getModel("Users");
        this.setModel(oModel, "Users");

        return new sap.m.Page({
            title: "Info",
            showNavButton: true,
            navButtonPress: () => {
                oController.navi();
            },
            content: [

                new sap.ui.layout.form.Form({
                    title: new sap.ui.core.Title({ text: "Active User" }),
                    layout: new sap.ui.layout.form.ResponsiveGridLayout({}),
                    formContainers:[
                        new sap.ui.layout.form.FormContainer({
                            formElements:[
                                new sap.ui.layout.form.FormElement
                                ({
                                    label:"CustomerId",
                                    fields:[ new sap.m.Label({width:"250px",
                                        design:sap.m.LabelDesign.Bold
                                    })]
                                }),
                                new sap.ui.layout.form.FormElement
                                ({
                                    label:"GenId",
                                    fields:[ new sap.m.Label({width:"250px",
                                        design:sap.m.LabelDesign.Bold
                                    })]
                                }),

                                new sap.ui.layout.form.FormElement
                                ({
                                    label:"Account No",
                                    fields:[ new sap.m.Label({width:"250px",
                                        design:sap.m.LabelDesign.Bold
                                    })]
                                }),

                                new sap.ui.layout.form.FormElement
                                ({
                                    label:"Name",
                                    fields:[ new sap.m.Label({width:"250px",
                                        design:sap.m.LabelDesign.Bold
                                    })]
                                }),
                                new sap.ui.layout.form.FormElement
                                ({
                                    label:"Mobile no",
                                    fields:[ new sap.m.Label({width:"250px",
                                        design:sap.m.LabelDesign.Bold
                                    })]
                                }),
                                new sap.ui.layout.form.FormElement
                                ({
                                    label:"Branch",
                                    fields:[ new sap.m.Label({width:"250px",
                                        design:sap.m.LabelDesign.Bold
                                    })]
                                }),

                                new sap.ui.layout.form.FormElement
                                ({
                                    label:"Branch code",
                                    fields:[ new sap.m.Label({width:"250px",
                                        design:sap.m.LabelDesign.Bold
                                    })]
                                }),

                                new sap.ui.layout.form.FormElement
                                ({
                                    label:"Pin",
                                    fields:[ new sap.m.Label({width:"250px",
                                        design:sap.m.LabelDesign.Bold
                                    })]
                                }),

                                new sap.ui.layout.form.FormElement
                                ({
                                    label:"Language",
                                    fields:[ new sap.m.Label({width:"250px",
                                        design:sap.m.LabelDesign.Bold
                                    })]
                                }),

                                new sap.ui.layout.form.FormElement
                                ({
                                    label:"Status",
                                    fields:[ new sap.m.Label({width:"250px",
                                        design:sap.m.LabelDesign.Bold
                                    })]
                                }),

                            ]
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
                    ]
                })

            ]
        });


    }
});


