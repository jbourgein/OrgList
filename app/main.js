var orgResults =  new OrgResults('#orgList');    
var orgDetails = new OrgDetails('#orgDetails');
var orgData = new OrgData();

var fullOrgList = [];

if(force.isAuthenticated()){
	orgResults.pending();
	orgData.fetchOrgs().then(function(res){
		fullOrgList = res;
		orgResults.setResults(res);
	})
}
else{
	force.login(function() {
		orgResults.pending();	
		orgData.fetchOrgs().then(function(res){
			fullOrgList = res;
			orgResults.setResults(res);
		})
	});
}

$(document).on('view',function(evt,arg1){
	orgDetails.pending();
    var id = arg1;    
    orgData.fetchSandboxesForOrgId(id).then(function(res){
    	orgDetails.setDetails(res);
    })       
});

$('#searchBox').keyup(function(){
	var val = $(this).val().toUpperCase();
	orgResults.filter(val);
	// $('#orgList').find("li").css("display","list-item");
	// if(val.length < 3){		
	// 	return;
	// }
	
	// $('#orgList').find("li").filter(function(index){
	//     return $(this).text().toUpperCase().indexOf(val) === -1;
	// }).css("display","none")
});
