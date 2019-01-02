sap.ui.controller("banking.OnlineBanking.details", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf OnlineBanking.details
*/

	
	navi1(custId){
		debugger;
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		let oCustomer = this.getOwnerComponent().getModel("MyInfo").getProperty("/customer");
		//router.navTo("AccountInfo",{"custId":this.getView().id });
		router.navTo("AccountInfo",{"custId": oCustomer.Customer.CustId});
	},
	
	navi2(){
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		let oCustomer = this.getOwnerComponent().getModel("MyInfo").getProperty("/customer");
		router.navTo("Newtrans",{"custId": oCustomer.Customer.CustId});
	},
	
	navi3(){
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		let oCustomer = this.getOwnerComponent().getModel("MyInfo").getProperty("/customer");
		router.navTo("TransactionHistory",{"custId": oCustomer.Customer.CustId});
	},
	
	navi4(){
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		let oCustomer = this.getOwnerComponent().getModel("MyInfo").getProperty("/customer");
		router.navTo("ActiveUsers",{"custId": oCustomer.Customer.CustId});
	},
	onInit: function() {

//		var router = sap.ui.core.UIComponent.getRouterFor(this);
//		onRouteMatched = (oEvt)=>{
//			this.getView().id = oEvt.getParameter("arguments").customerData;
//		};
// 		router.attachRouteMatched("details/{customerData}", onRouteMatched);
//		new sap.ui.getCore().getEventBus().subscribe("customerData", this.fnResponse ,this);

	},
	
	callServer1:(oOptions)=>{
		debugger;
	let oConfig = {
		    url: "http://gicomsap16.gicom.local:8000/gicom/jsonhandler/Z37_BANKING_ACNT_API?format=json&case=C&sap-client=100&sap-user=raavi&sap-password=padmavathi",
		    method: "POST",
		    data:JSON.stringify(oOptions) ,
		    dataType: "json",
		    contentType: "text/plain"

		};            		
		
    let oDeferred = jQuery.Deferred();

	jQuery.ajax(oConfig).done(function(response, status, xhr, cfg) {
		
		 oDeferred.resolve(response);
	 })
	 .fail(function(response, status, xhr, cfg)  {
		 
	        oDeferred.reject(response);
	 })
    .always(function(response, status, xhr, cfg) {
    	
        sap.ui.core.BusyIndicator.hide();
    });     		    	
	
	return oDeferred.promise();
},

callServer2:(oOptions)=>{
	debugger;
let oConfig = {
	    url: "http://gicomsap16.gicom.local:8000/gicom/jsonhandler/Z37_BANKING_TRNSHSTRY_API?format=json&case=C&sap-client=100&sap-user=raavi&sap-password=padmavathi",
	    method: "POST",
	    data:JSON.stringify(oOptions),
	    dataType: "json",
	    contentType: "text/plain"
	};            		
	
let oDeferred = jQuery.Deferred();

jQuery.ajax(oConfig).done(function(response, status, xhr, cfg) {
	
	 oDeferred.resolve(response);
 })
 .fail(function(response, status, xhr, cfg)  {
	 
        oDeferred.reject(response);
 })
.always(function(response, status, xhr, cfg) {
	
    sap.ui.core.BusyIndicator.hide();
});     		    	

return oDeferred.promise();
},

callServer3:(oOptions)=>{
	debugger;
let oConfig = {
	    url: "http://gicomsap16.gicom.local:8000/gicom/jsonhandler/Z37_BANKING_ACTUSRS_API?format=json&case=C&sap-client=100&sap-user=raavi&sap-password=padmavathi",
	    method: "POST",
	    data:JSON.stringify(oOptions),
	    dataType: "json",
	    contentType: "text/plain"

	};            		
	
let oDeferred = jQuery.Deferred();

jQuery.ajax(oConfig).done(function(response, status, xhr, cfg) {
	
	 oDeferred.resolve(response);
 })
 .fail(function(response, status, xhr, cfg)  {
	 
        oDeferred.reject(response);
 })
.always(function(response, status, xhr, cfg) {
	
    sap.ui.core.BusyIndicator.hide();
});     		    	

return oDeferred.promise();
},

navi( )
{
	 var router = sap.ui.core.UIComponent.getRouterFor(this);
		router.navTo("firstpage");
}


});