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
	
//	validate : function() {
////		
////		var oView = this.getView();
////		
////		var oModel3 = oView.getModel("MyInfo");
////		var oModel4 = oView.getModel("Users");
////		var odata = oModel3.getProperty("/data");
////		var aCustomersList = oModel4.getProperty("/customersList");
////		jQuery.sap.require("sap.m.MessageBox");
////		let oExisted = aCustomersList.find((oObj)=>{return oObj.customerId === odata.customerId  && oObj.Password === odata.Password});
//		
//		if(oExisted){
//			this.getOwnerComponent().getModel("Users").setProperty("/currentUser",oExisted);
//			this.navi("details");
//		}
//		else{
//			   sap.m.MessageBox.error("your credentials doesnt exist",{
//				title:"Error Msg"
//			})
//		}
//		
//		 oModel3.setProperty("/data/customerId","");
//		 oModel3.setProperty("/data/Password","");
//	},
		
	navi : function(){
		debugger;
		let router = sap.ui.core.UIComponent.getRouterFor(this);
		//new sap.ui.getCore().getEventBus().publish("customerData", response );
		let oModel = this.getView().getModel("MyInfo");
		let oCustomer = oModel.getProperty("/customer");
		router.navTo("details",{"custId":oCustomer.Customer.CustId});

	},

	navi1:function(){
		var oView = this.getView();
		var Core =  sap.ui.getCore();
        jQuery.sap.require("sap.m.MessageBox");

        let oCustomer = this.getOwnerComponent().getModel("MyInfo").getProperty("createUser");
		// var customData = {}
		// var myModel = oView.getModel("Users1");
		//  oCreateData = myModel.getProperty("/createUser");
		// var sName = oCreateData["Name"];
		// var sMobileNo = oCreateData["MobileNo"];
		// var sDOB = oCreateData["sDOB"];
		// var scountry  = oCreateData["scountry"];
		// var sMail = oCreateData["Mail"];
		// var sPassword = oCreateData["sPassword"];
		// var sRetypePassword = oCreateData["RePwd"];
		// var scustomerId = oCreateData["scustomerId"];
		
		if(name == null|| name == "")
			{
			oView.a.setProperty("valueState",sap.ui.core.ValueState.Error);
			sap.m.MessageBox.error("The name field should not be empty", {
				title:"Error Msg"
			})
			return false;
			}
		
		else if (MobileNo ==null || MobileNo ==""|| sMobileNo.length < 10)
		{ 
			oView.b.setProperty("valueState",sap.ui.core.ValueState.Error);
			sap.m.MessageBox.error("phno can't be blank", {
				title:"Error Msg"
			})
			  return false;  
			}
		else if(!country === null || country == "")
		     { 
			oView.e.setProperty("valueState",sap.ui.core.ValueState.Error);
			sap.m.MessageBox.error("sPassword must be at least 6 characters long", {
				title:"Error Msg"
			})
			  return false;  
			  }
		else if(DOB == null || DOB == NaN)
		{
			oView.c.setProperty("valueState",sap.ui.core.ValueState.Error);
			sap.m.MessageBox.error("sPassword should be matched", {
				title:"Error Msg"
			})
			return false;
		}
		else if(Password.length<6)
	     { 
		oView.e.setProperty("valueState",sap.ui.core.ValueState.Error);
		  
		sap.m.MessageBox.error("sPassword must be at least 6 characters long", {
			title:"Error Msg"
		})
		  return false;  
		  }
	else if(Password!==RetypePassword)
	{
		oView.f.setProperty("valueState",sap.ui.core.ValueState.Error);
		sap.m.MessageBox.error("sPassword should be matched", {
			title:"Error Msg"
		})
		return false;
	}
	else if (customerId === !NaN || customerId === "" || customerId<10)
		{
		oView.g.setProperty("valueState",sap.ui.core.ValueState.Error);
		sap.m.MessageBox,error("give scustomerId properly",{
			title:"Error Msg"
		})
		}
		
		// var omyModel2 = oView.getModel("Users");
		// var data2 = omyModel2.getProperty("/customersList");
		// data2.push(CreateData);
	    // omyModel2.setProperty("/customersList",data2);
		// var eventBus = sap.ui.getCore().getEventBus();
	    // var c=oView.getModel("Users1");
	    // var d= c.getProperty("/createUser");
		// eventBus.publish("channel1","event1");
		// this.getOwnerComponent().getModel("Users").setProperty("/currentUser",d);
		// var router = sap.ui.core.UIComponent.getRouterFor(this);
		// router.navTo("details");
	},



        callServer:(oOptions)=>{
		debugger;
	let oConfig = {
		    url: "http://gicomsap16.gicom.local:8000/gicom/jsonhandler/Z37_BANKING_API?format=json&case=C&sap-client=100&sap-user=raavi&sap-password=padmavathi",
		    method: "POST",
		    data:JSON.stringify(oOptions),
		    dataType: "json",
		    contentType: "text/plain"
//		    crossDomain: true
//		    headers: {
//		    	"Accept": "application/json",
//		    	"Content-Type": "application/json"
//		    }
		};
    let oDeferred = jQuery.Deferred();

	jQuery.ajax(oConfig).done(function(response, status, xhr, cfg) {
		
		 oDeferred.resolve(response);
	 })
	 .fail(function(response, status, xhr, cfg) {
		 
	        oDeferred.reject(response);
	 })
    .always(function(response, status, xhr, cfg) {
    	
        sap.ui.core.BusyIndicator.hide();
    });     		    	
	
	return oDeferred.promise();
},

backendCall(oOptions,fnSuccess, fnReject){
	 let oDefObj = jQuery.Deferred();
	 let xhttp = new XMLHttpRequest();
	    xhttp.onreadystatechange = function() {
	        if (this.readyState == 4 && this.status == 200) {
	           oDefObj.resolve(xhttp);
	       }
//	        else {
//	           oDefObj.reject(xhttp);
//	          }
	    };
	    xhttp.open("POST", "http://gicomsap16.gicom.local:8000/gicom/jsonhandler/Z37_BANKING_API?format=json&case=C&sap-client=100&sap-user=raavi&sap-password=padmavathi", true);
	    xhttp.timeout = 0; 
//	    xhttp.setRequestHeader("Accept-Language", "EN");
//	    xhttp.setRequestHeader("Authorization", "Basic QU1CSFU6anJ0QDE5OTI=");
	   // xhttp.setRequestHeader("Content-Type", "application/json");
//	    xhttp.setRequestHeader("X-Stateful", "stateful");
	   // xhttp.setRequestHeader("Accept", "application/json");
	    xhttp.send(JSON.stringify(oOptions));  
	    oDefObj.done(function(xhttp){
	    	fnSuccess(JSON.parse(xhttp.response))
	    });
//	    oDefObj.fail(function(xhttp){
//	    		
//	    	fnReject(JSON.parse(xhttp.response))
//	    })
}
});