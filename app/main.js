var orgResults =  new OrgResults('#orgList');    
var orgDetails = new OrgDetails('#orgDetails');
var orgData = new OrgData();

if(force.isAuthenticated()){
	orgData.fetchOrgs().then(function(res){
		orgResults.setResults(res);
	})
}
else{
	force.login(function() {	
		orgData.fetchOrgs().then(function(res){
			orgResults.setResults(res);
		})
	});
}

$(document).on('view',function(evt,arg1){
    var id = arg1;    
    orgData.fetchSandboxesForOrgId(id).then(function(res){
    	orgDetails.setDetails(res);
    })       
});


