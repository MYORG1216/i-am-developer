sap.ui.controller("banking.OnlineBanking.details", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf OnlineBanking.details
*/

	
	navi1(cstmId){
		debugger;
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		let oCustomer = this.getOwnerComponent().getModel("Users").getProperty("/customer");
		//router.navTo("AccountInfo",{"custId":this.getView().id });
		
		router.navTo("AccountInfo",{"custId": oCustomer.Customer.CustId});
	},
	
	navi2(){
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		router.navTo("Newtrans");
	},
	
	navi3(){
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		router.navTo("TransactionHistory");
	},
	
	navi4(){
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		router.navTo("ActiveUsers");
	},
	onInit: function() {

//		var router = sap.ui.core.UIComponent.getRouterFor(this);
//		onRouteMatched = (oEvt)=>{    
//		
//			this.getView().id = oEvt.getParameter("arguments").customerData;
//		
//		};
//		
//		
//		router.attachRouteMatched("details/{customerData}", onRouteMatched);
//		new sap.ui.getCore().getEventBus().subscribe("customerData", this.fnResponse ,this);

	},
	
//	fnResponse :(oResponse)=>{
//		
//		this.getView().response = oResponse;
//	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf OnlineBanking.details
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf OnlineBanking.details
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf OnlineBanking.details
*/
//	onExit: function() {
//
//	}

});