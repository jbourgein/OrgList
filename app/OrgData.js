var OrgData = function(){}

OrgData.prototype = {
	query : function(query){
		var dfd = $.Deferred();

		if(!query){
			
			dfd.resolve([]);
			return dfd.promise();
		}

		force.query(query,function(res){
			return dfd.resolve(res.records);
		})

		return dfd.promise();
	},
	fetchOrgs : function(){
		var query = 'SELECT id, Name from Org__c ORDER BY Name ASC';
		return this.query(query);
	},
	fetchSandboxesForOrgId : function(orgId){
		var query = "SELECT id, Name, Login_Link__c from Sandbox__c WHERE Org__c = '" + orgId + "'";
		return this.query(query);
	}
}