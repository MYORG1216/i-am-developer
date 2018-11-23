sap.ui.jsview("banking.OnlineBanking.DetailView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf OnlineBanking.DetailView
	*/ 
	getControllerName : function() {
		return "banking.OnlineBanking.DetailView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf OnlineBanking.DetailView
	*/ 
	createContent : function(oController) {
		let View = this;

 		return new sap.m.Page({
			title: "DetailView",
			showNavButton:true,
			navButtonPress: () => {
				var router = sap.ui.core.UIComponent.getRouterFor(this);
				router.navTo("AccountInfo");
			},
			
			content: [
				View.UserHeader,
				View.IconTabBar
			]
		});
	},

//	View.createEnhHeaderPanel()
//	{
//	let View = this,
//	oController = View.getController();
//View.UserHeader = new sap.m.ObjectHeader({
//	title: "{Users>/AccountInfo/name}",
//	number: "{Users>/AccountInfo/domain}",
//	attributes:[,
//		new sap.m.ObjectAttribute({
//			title: Bundle.getText("customerId"),
//			text: "{Users>/AccountInfo/customerId}"
//		}),
//		new sap.m.ObjectAttribute({
//			title: Bundle.getText("accountno"),
//			text: "{Users>/AccountInfo/accountno}"
//		}),
//		new sap.m.ObjectAttribute({
//			title: Bundle.getText("mobileno"),
//			text: "{Users>/AccountInfo/mobileno}"
//		})
//	],
//	statuses: [
//		new sap.m.ObjectStatus({
//			title: Bundle.getText(""),
//			text: "{Users>/AccountInfo/Country}"
//		}),
//		new sap.m.ObjectStatus({
//			title: Bundle.getText("Services"),
//			text: "{Users>/AccountInfo/Services}"
//		})
//	]
//});
//	
//}	
	
	
});