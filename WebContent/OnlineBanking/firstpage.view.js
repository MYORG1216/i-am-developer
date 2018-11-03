sap.ui.jsview("banking.OnlineBanking.firstpage", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf OnlineBanking.firstpage
	 */ 
	getControllerName : function() {
		return "banking.OnlineBanking.firstpage";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf OnlineBanking.firstpage
	 */ 
	createContent : function(oController) {
		debugger;
 		let oView = this;
 		
 		
		oController = oView.getController();
		let oModel1 = oController.getOwnerComponent().getModel("Users");
		debugger;
		let oModel2 = new sap.ui.model.json.JSONModel({
			"data":{
				"customerId":"",
				"Password":""
			},
			"loginbutton":true,
		   // "submitbutton":true   
		});
		oView.setModel(oModel2,"MyInfo");
 		
		
		let  oModel7 = oController.getOwnerComponent().getModel("users");
		
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
		oView.setModel(CreateUserModel,"Users1");
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
		

		oView.d = new sap.m.Input({width	:"250px",
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
							label:"customerId",
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
					        	 label:"customerId",
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
								label:"RePwd",
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
							}),
							new sap.ui.layout.form.FormElement({
								label:"",
								fields:[
								new sap.m.Button({width:"150px",
									text:"submit",
									width:"100px",
									press:()=>{
						    			oController.navi1();
						    		}
								})
								]	
								}),
			           ]	
							})
						]
					})
	
			return new sap.m.Page({
				title: "AXIS ONLINE BANKING SERVICES",
			content: [
				
				new sap.m.HBox({		
					items:[
				new sap.m.SegmentedButton({
					buttons:[
						new sap.m.Button({
							text:"login",
							width:"100px",
							press: ()=>{
								let oModel = oView.getModel("MyInfo");
								oModel.setProperty("/loginbutton", true);	
							}
				
						}),
						new sap.m.Button({
							text:"NewUser",
						    width:"100px",
						    press:()=>{
						    	let oModel = oView.getModel("MyInfo");
								oModel.setProperty("/loginbutton", false);	
						    }
						})
						
					]
				})
				]
				}),
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
								oController.validate();
							}
						}),
						new sap.m.Button({
							text:"cancel",
						    width:"100px",
						    	press:()=>{
						    		sap.m.MessageBox.error("you clicked cancel button", {
										title:"Error Msg"
									})
						    	}
						})
						
					]
				})
				]
				})
	          
			]
		});
	}
});