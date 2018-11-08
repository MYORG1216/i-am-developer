sap.ui.controller("banking.OnlineBanking.firstpage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf OnlineBanking.firstpage
*/
//	onInit: function() {
//
//	},
//
	
	validate : function() {
		debugger;
		var oView = this.getView();
		
		var oModel3 = oView.getModel("MyInfo");
		var oModel4 = oView.getModel("Users");
		var odata = oModel3.getProperty("/data");
		var aCustomersList = oModel4.getProperty("/customersList");
		jQuery.sap.require("sap.m.MessageBox");
		let oExisted = aCustomersList.find((oObj)=>{return oObj.customerId === odata.customerId  && oObj.Password === odata.Password});
		
		if(oExisted){
			this.getOwnerComponent().getModel("Users").setProperty("/currentUser",oExisted);
			this.navi("details");
		}
		else{
			   sap.m.MessageBox.error("your credentials doesnt exist",{
				title:"Error Msg"
			})
		}
		
		 oModel3.setProperty("/data/customerId","");
		 oModel3.setProperty("/data/Password","");
	},
		
	navi : function(){
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		router.navTo("details");
	},

	navi1:function(){	
		debugger;
		var oView = this.getView();
		var Core = sap.ui.getCore();
		var customData = {}  
		jQuery.sap.require("sap.m.MessageBox");
		var myModel = oView.getModel("Users1");
		oCreateData = myModel.getProperty("/createUser");
		
		var sName = oCreateData["Name"];
		var sMobileNo = oCreateData["MobileNo"];
		var sDOB = oCreateData["sDOB"];
		var scountry  = oCreateData["scountry"];
		var sMail = oCreateData["Mail"];
		var sPassword = oCreateData["sPassword"];
		var sRetypePassword = oCreateData["RePwd"];
		var scustomerId = oCreateData["scustomerId"];
		
		if(sname == null|| sname=="")
			{
			oView.a.setProperty("valueState",sap.ui.core.ValueState.Error);
			sap.m.MessageBox.error("The name field should not be empty", {
				title:"Error Msg"
			})
			return false;
			}
		
		else if (sMobileNo ==null || sMobileNo ==""|| sMobileNo.length < 10)	
		{ 
			oView.b.setProperty("valueState",sap.ui.core.ValueState.Error);
			
			sap.m.MessageBox.error("phno can't be blank", {
				title:"Error Msg"
			})
			  return false;  
			}
		else if(!scountry === null || scountry == "")
		     { 
			oView.e.setProperty("valueState",sap.ui.core.ValueState.Error);
			 
			sap.m.MessageBox.error("sPassword must be at least 6 characters long", {
				title:"Error Msg"
			})
			  return false;  
			  }
		else if(sDOB == null || sDOB == NaN)
		{
			oView.c.setProperty("valueState",sap.ui.core.ValueState.Error);
			sap.m.MessageBox.error("sPassword should be matched", {
				title:"Error Msg"
			})
			return false;
		}
		else if(sPassword.length<6)
	     { 
		oView.e.setProperty("valueState",sap.ui.core.ValueState.Error);
		  
		sap.m.MessageBox.error("sPassword must be at least 6 characters long", {
			title:"Error Msg"
		})
		  return false;  
		  }
	else if(sPassword!==sRetypePassword)
	{
		oView.f.setProperty("valueState",sap.ui.core.ValueState.Error);
		sap.m.MessageBox.error("sPassword should be matched", {
			title:"Error Msg"
		})
		return false;
	}
	else if (scustomerId === !NaN || scustomerId === "" || scustomerId<10)
		{
		oView.g.setProperty("valueState",sap.ui.core.ValueState.Error);
		sap.m.MessageBox,error("give scustomerId properly",{
			title:"Erroe Msg"
		})
		}
		
		var omyModel2 = oView.getModel("Users");
		var data2 = omyModel2.getProperty("/customersList");
		data2.push(CreateData);
	    omyModel2.setProperty("/customersList",data2);
	 
		var eventBus = sap.ui.getCore().getEventBus();
	    var c=oView.getModel("Users1");
	    var d= c.getProperty("/createUser");
		eventBus.publish("channel1","event1");
		this.getOwnerComponent().getModel("Users").setProperty("/currentUser",d);
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		router.navTo("details");
	},


/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf OnlineBanking.firstpage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf OnlineBanking.firstpage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf OnlineBanking.firstpage
*/
//	onExit: function() {
//
//	}

});