jQuery.sap.declare("banking.Component");
sap.ui.core.UIComponent.extend("banking.Component", {
	"metadata" : {
		"rootView" : {
			"viewName" : "banking.OnlineBanking.OnlineBanking",
			"type" : "JS"
		},
		"routing" : {
			"config" : {
				"routerClass" : "sap.m.routing.Router",
				"viewType" : "JS",
				"viewPath" : "banking.OnlineBanking",
				"controlId" : "appcontainer",
				"controlAggregation" : "pages",
				"async" : true
			},
			"routes" : [ {
				"pattern" : "",
				"name" : "first",
				"target" : "firstpage"
			},
			
			{
				"pattern" : "details",
				"name" : "details",
				"target" : "details"	
			},
			
			{
				"pattern" : "AccountInfo",
				"name" : "AccountInfo",
				"target" : "AccountInfo"
			},
			
			{
				"pattern" : "Newtrans",
				"name" : "Newtrans",
				"target" : "Newtrans"	
			},
			
			{
				"pattern" : "TransactionHistory",
				"name" : "TransactionHistory",
				"target" : "TransactionHistory"
			},
			
			{
				"pattern" : "ActiveUsers",
				"name" : "ActiveUsers",
				"target" : "ActiveUsers"
			}
			],
			"targets" : {
				"firstpage" : {
					"viewName" : "firstpage",
					"controlAggregation" : "pages"
				},

				"details" : {
					"viewName" : "details",
					"controlAggregation" : "pages"
				},
				
			     "AccountInfo" : {
					"viewName" : "AccountInfo",
					"controlAggregation" : "pages"
				},
				
				"Newtrans" : {
					"viewName" : "Newtrans",
					"controlAggregation" : "pages"
				},
				
			"TransactionHistory" : {
					"viewName" : "TransactionHistory",
					"controlAggregation" : "pages"
				},
			"ActiveUsers" : {
					"viewName" : "ActiveUsers",
					"controlAggregation" : "pages"
				},	
				
			}
		}
	},

	init : function() {
		debugger;
//		let Data = new sap.ui.model.json.JSONModel({
//			
//				
//		});
		
		
		let Model = new sap.ui.model.json.JSONModel();
		Model.loadData("JSON/Users.json");
		this.setModel(Model, "Users");
		
		
		

		let Locale = sap.ui.getCore().getConfiguration().getLanguage();
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
		this.getRouter().initialize();
	}
});
