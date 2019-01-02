sap.ui.controller("banking.OnlineBanking.AccountInfo", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf OnlineBanking.AccountInfo
*/
//	onInit: function() {
//
//	},
	
//onInit: function() {
//		debugger
//		var currentcustomer;
//		let oController = this;
//		
//		var router = sap.ui.core.UIComponent.getRouterFor(this);
//		onRouteMatched = (oEvt)=>{    
//			debugger;
//			this.getView().currentcustomer = oEvt.getParameter("arguments").customerId;
//			oController.performListActions(this.getView().currentcustomer)
//		};
//		
//		router.attachRouteMatched("AccountInfo/{customerId}", onRouteMatched);
//		},
//			
//			performListActions(currentcustomer) {	
//		let oController = this;
//			oView = oController.getView();
//			oView.presentUser = currentcustomer;
//			oTable= oView.oTable;  
//
//			
//		let oBinding = oTable.getBinding("items");
//	  if(oBinding) {
//			oBinding.filter([
//	  new sap.ui.model.Filter({
//			filters:[
//				new sap.ui.model.Filter(
//					"customerId", 
//					sap.ui.model.FilterOperator.EQ,
//					currentcustomer
//					)			
//		    ] 
//		})
//	  ]);
//	  }
//	},



    callServer4:(oOptions)=>{
        debugger;
        let oConfig = {
            url: "http://gicomsap16.gicom.local:8000/gicom/jsonhandler/Z37_BANKING_DEACCNT_API?format=json&case=C&sap-client=100&sap-user=raavi&sap-password=padmavathi",
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

	navi:function(selectedAcc){
		debugger
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		let oCustomer = this.getOwnerComponent().getModel("MyInfo").getProperty("/customer");
		router.navTo("totalInfo",{"custId": oCustomer.Customer.CustId, "accountId":selectedAcc.AccNo});
	}
		
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf OnlineBanking.AccountInfo
*/
//	onBeforeRendering: function() {
//
//	},

/**
 *
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf OnlineBanking.AccountInfo
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf OnlineBanking.AccountInfo
*/
//	onExit: function() {
//
//	}

});