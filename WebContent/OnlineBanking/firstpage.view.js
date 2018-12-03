sap.ui.jsview("banking.OnlineBanking.firstpage", {

	
	getControllerName : function() {
		return "banking.OnlineBanking.firstpage";
	},

	
	createContent : function(oController) {
		
 		let oView = this;
 	
		oController = oView.getController();
//		let oModel1 = oController.getOwnerComponent().getModel("Users");
		
		let oModel2 = new sap.ui.model.json.JSONModel({
			"data":{
				"customerId":"",
				"Password":""
			},
			"loginbutton":true,
			"register" :false,
		   // "submitbutton":true
		});
		oView.setModel(oModel2,"MyInfo");
 		
		let  oModel7 = oController.getOwnerComponent().getModel("users");
        jQuery.sap.require("sap.m.MessageBox");
		let CreateUserModel = new sap.ui.model.json.JSONModel({
			"createUser":{
		         "customerId":"",
				"Name":"",
				"Password":"",
				"RePwd":"",
				"mobileNo":"",
				"DOB":"",
				"Mail":"",
				"Country":""
			}
		});
		oView.setModel("Users1",CreateUserModel);
		let Locale = sap.ui.getCore().setModel(CreateUserModel,"Users1");
		oView.a = new sap.m.Input({width:"250px", 
			type:sap.m.InputType.Text,
			value: "{Users1>/createUser/Name}"});
		
		oView.b = new sap.m.Input({width:"250px",
			type:sap.m.InputType.Number,
			value: "{Users1>/createUser/MobileNo}"});
		
		oView.c = new sap.m.Input({width:"250px",
			type:sap.m.InputType.Number,
			value: "{Users1>/createUser/DOB}"});
		
		oView.d = new sap.m.Input({width:"250px",
			type:sap.m.InputType.Text,
			value: "{Users1>/createUser/Country}"});
		
		oView.e = new sap.m.Input({width :"250px",
		type:sap.m.InputType.Password,
		value:"{Users1>/createUser/Password}"
		});
		
		oView.f= new sap.m.Input({width :"250px",
			type:sap.m.InputType.RetypePassword,
			value:"{Users1>/createUser/RePwd}"
			});
		
		oView.g=new sap.m.Input({width :"250px",
			type:sap.m.InputType.Number,
			value:"{Users1>/createUser/customerId}"
		});
		
		
		
		 oView.oForm = new sap.ui.layout.form.Form({
			 visible: 
			 {
				 path : 'MyInfo>/loginbutton',
				 formatter :	(bValue) => {
				 return bValue === false ? false: true;
				 }
			 },
			 
	    	title:new sap.ui.core.Title({ text: "ONLINE BANKING SERVICES"}),
			layout:new sap.ui.layout.form.ResponsiveGridLayout({}),
				formContainers:[
					new sap.ui.layout.form.FormContainer({
						formElements:[
							new sap.ui.layout.form.FormElement({
							label:"Customer Id",
					        fields:[ new sap.m.Input({width:"100px",
					    	type:sap.m.InputType.customerId,
					    	value:"{MyInfo>/data/customerId}"
					    })]
							}),
							new sap.ui.layout.form.FormElement
							({
								label:"Password",
							    fields:[ new sap.m.Input({width:"100px",
							    	type:sap.m.InputType.Password,
							    	value:"{MyInfo>/data/Password}"})]
							}),
								]
					})
					]
	    })
	   	    
	    oView.oForm1 = new sap.ui.layout.form.Form({
	    	visible: 
	    	{
	    		path : 'MyInfo>/loginbutton',
	    		formatter :(bValue)	=>	{
	    		return bValue === false ? true : false;
	    		}

	    	},
	    	title:new sap.ui.core.Title({ text:"User Info"}),
			layout:new sap.ui.layout.form.ResponsiveGridLayout({}),
		formContainers:[
			new sap.ui.layout.form.FormContainer({
				formElements:[
					         new sap.ui.layout.form.FormElement({
					        	 label:"CustomerId",
					             fields:[oView.g]
					         }),
						
							new sap.ui.layout.form.FormElement({
								label:"Name",
								fields:[oView.a]	
									}),
									
							new sap.ui.layout.form.FormElement({
								label:"Password",
							    fields:[oView.e]
							}),	
							
							new sap.ui.layout.form.FormElement({
								label:"Retype Pwd",
							    fields:[oView.f]
							}),	
									
						  new sap.ui.layout.form.FormElement({
						  label:"MobileNo",
						  fields:[oView.b]	
						}),
						new sap.ui.layout.form.FormElement({
						label:"DOB",
						fields:[oView.c]	
						}),
						new sap.ui.layout.form.FormElement({
						label:"Mail",
						fields:[new sap.m.Input({width:"250px",
							type:sap.m.InputType.Mail,
							value: "{Users1>/createUser/Mail}"}) ]	
						}),
						new sap.ui.layout.form.FormElement({
							label:"Country",
							fields:[oView.d]	
							})
//							new sap.ui.layout.form.FormElement({
//								label:"",
//								fields:[
//								new sap.m.Button({width:"150px",
//									text:"submit",
//									width:"100px",
//									press:()=>{
//						    			oController.navi1();
//						    		}
//								})
//								]	
//								}),
			           ]	
							})
						]
					}).addStyleClass("Styling");
	
		            oView.page =  new sap.m.Page({
				      title: "AXIS ONLINE BANKING SERVICES",
				
				      customHeader: new sap.m.Bar({
					
					   headerContent:[
						new sap.m.Text({text:"ONLINE BANKING SERVICE" })
					],
					
				         contentRight:[
//						new sap.m.Toolbar({
//							
//							content:[
//							text:"ONLINE BANKING SERVICE"
//						]
//						}),
						new sap.m.ActionSelect({
							icon:"sap-icon://pull-down",
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
							items:[
								new sap.ui.core.Item({
									key: "login",
									text:"Login"
								}),
								new sap.ui.core.Item({
									key: "Register",
									text:"Register"
								})
							],
							change:(oEvent)=>{
								debugger;
								let oSelectedItem = oEvent.getParameter("selectedItem");
								if(oSelectedItem){
							    	let oModel = oView.getModel("MyInfo");
							    	
								sKey = oSelectedItem.getKey();
									
									if(sKey && oModel) {
										(sKey === "Register") ? oModel.setProperty("/loginbutton", false) :
										oModel.setProperty("/loginbutton", true);
									}
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
					items:[
						oView.oForm,
						oView.oForm1
						]
					}),
            	new sap.m.HBox({
					items:[
				       new sap.m.SegmentedButton({
					         buttons:[
						       new sap.m.Button({
							     text:"submit",
							        width:"100px",
							          press:()=>{
                                              debugger
								             var oModel3 = oView.getModel("MyInfo");
                                              var submit = oView.getModel("MyInfo").getProperty("/loginbutton");
								             var oModel4 = oView.getModel("Users");
								             var odata = oModel3.getProperty("/data");
								               oConfig = {
										         IsCustomer:{
											
											        Customerid : odata.customerId,
											              Password : odata.Password
													}
										
								                  };
								               oView.page.setBusy(true);
								               
								               if(submit === false)
								            	   {

								            	   }
								               else
								               	{
                                                    oController.callServer(oConfig).then((response)=>{
                                                        debugger
                                                        oView.page.setBusy(false);
                                                        let oModel = oController.getOwnerComponent().getModel("Users");
                                                        debugger
                                                        if(oModel){
                                                            oModel.setProperty("/customer", response.CsCustomer);
                                                        }

                                                        if (response.CsCustomer.Customer.Name === "No customer"){                                                         
                                                            sap.m.MessageBox.information("No user with these credentials", {
                                                                title: "Please enter the valid data",

                                                            });
                                                        }
                                                        else{
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
							  text:"cancel",
						      width:"100px",
                              // showValueHelp:true,
						    	press:()=>{
							  	debugger
                                    var oModel3 = oView.getModel("MyInfo")
							  	   
                                    var oModel4 = oView.getModel("Users");
                                    var odata = oModel3.getProperty("/data");
                                    oConfig = {
                                        IsCustomer:{
                                            Customerid : odata.customerId,
                                            Password : odata.Password
                                        }
                                     };

                                       if(oConfig !== null);
									   {
                                           oConfig.empty;
                                           sap.m.MessageBox.error("you clicked cancel button", {
                                               title:"Error Msg"
                                           })
									   }

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