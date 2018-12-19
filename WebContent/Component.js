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
				"name" : "firstpage",
				"target" : "firstpage"
			},
			
			{
				"pattern" : "home/{custId}",
				"name" : "details",
				"target" : "details",
				"parent": "firstpage"
			},
			
			{
				"pattern" : "Accounts/{custId}",
				"name" : "AccountInfo",
				"target" : "AccountInfo",
				"parent": "details"
			},
			
			{
				"pattern" : "Newtrans/{custId}",
				"name" : "Newtrans",
				"target" : "Newtrans",
				"parent": "details"
			},
			
			{
				"pattern" : "TransactionHistory/{custId}",
				"name" : "TransactionHistory",
				"target" : "TransactionHistory",
				"parent": "details"
			},
			
			{
				"pattern" : "ActiveUsers/{custId}",
				"name" : "ActiveUsers",
				"target" : "ActiveUsers",
				"parent": "details"
			},
			{
//				"pattern" : "AccountInfo/{custId}/{accountId}",
				"pattern" : "AccountInfo/{custId}/{accountId}",
				"name" : "totalInfo",
				"target" : "totalInfo",
					"parent": "AccountInfo"
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
				"totalInfo" : {
					"viewName" : "totalInfo",
					"controlAggregation" : "pages"
					
				}
				
			}
		}
	},

	init : function() {
	
//		let Data = new sap.ui.model.json.JSONModel({
//			
//				
//		});

	//	let Locale = sap.ui.getCore().getConfiguration().getLanguage();

		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

		this.getRouter().initialize();
		
		this.getRouter().navBack = ()=>{
            this.getRouter();
            debugger;
			history.go(-1)
		};
		debugger
		let Model = new sap.ui.model.json.JSONModel();
		//Model.loadData("JSON/Users.json");
		this.setModel(Model,"Users");

		let Model1 = new sap.ui.model.json.JSONModel({
       // /**/ let oModel2 = new sap.ui.model.json.JSONModel({
            "data": {
                "customerId": "",
                "Password": ""
            },
            "createUser": {
                "customerId": "",
                "Name": "",
                "Password": "",
                "RePwd": "",
                "mobileNo": "",
                "DOB": "",
                "Mail": "",
                "Country": ""
            },
            "Accountinfo" : {
                "AccountNo":"",
                "Bank name":"",
                "Mobile No":"",
                "Branch":"",
                "Branch code":"",
                "Pin":"",
                "Language":"",
                "Status":""
            },
            "addUser" : {
                "CustomerId" :"",
                "Name" : "",
                "AccountNo":"",
                "Branch":"",
                "BranchCode":"",
                "IFSCCode":"",
                "TransactionLimit":"",
                "Status":""
            },
            "loginbutton": true,
            "register": false,
            "form2":false
            // "submitbutton":true
        });
		this.setModel(Model,"MyInfo");

//		let Model2 = new sap.ui.model.json.JSONModel();
//		this.setModel(Model,"Users1");
	}
});
