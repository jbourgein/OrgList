QUnit.module('OrgDetails tests',{
    beforeEach: function(){
        this.ul = $("<ul id='orgDetails'></ul>");
        this.dummyData = [
            {
                Name: "foo",
                Login_Link__c: "<a href='foo'>Login</a>"
            },
            {
                Name: "bar",
                Login_Link__c: "<a href='bar'>Login</a>"
            }
        ]

        
    }
});

QUnit.test( "constructor", function( assert ) {
    var orgDetails = new OrgDetails(this.ul);
    assert.ok(true,orgDetails);
});

QUnit.test( "setting details", function( assert ) {
    var orgDetails = new OrgDetails(this.ul);
    orgDetails.setDetails(this.dummyData);
    
    assert.ok($(this.ul.find('li')[0]).text().indexOf('foo') !== -1,"first name correct");
    assert.equal(this.ul.find('li').length,2,"2 li found");

});