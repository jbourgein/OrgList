var orgResults =  new OrgResults('#orgList');    
var orgDetails = new OrgDetails('#orgDetails');


force.login(function() {
    force.query('SELECT id, Name from Org__c ORDER BY Name ASC', function (response) {
        orgResults.setResults(response.records);        
    });
});

$(document).on('view',function(evt,arg1){
    var id = arg1;
    force.query("SELECT id, Name, Login_Link__c from Sandbox__c WHERE Org__c = '" + id + "'", function (response) {
        orgDetails.setDetails(response.records);        
    });        
});


