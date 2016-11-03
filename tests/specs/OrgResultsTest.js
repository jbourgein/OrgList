QUnit.module('OrgResults tests',{
    beforeEach: function(){
        this.ul = $("<ul id='orgList'></ul>");
        this.dummyData = [
            {
                Name: "foo",
                Id: "123456789"
            },
            {
                Name: "bar",
                Id:"987654321"
            }
        ]        
    }
});

QUnit.test( "constructor", function( assert ) {
    var orgResults = new OrgResults(this.ul);
    assert.ok(true,orgResults);
});

QUnit.test( "setting results", function( assert ) {
    var orgResults = new OrgResults(this.ul);
    orgResults.setResults(this.dummyData);
    
    assert.ok($(this.ul.find('li')[0]).text().indexOf("foo") !== -1,"should be foo");
    assert.equal($(this.ul.find('li')[1]).attr("data-id"),"987654321","should be 987654321");
    assert.equal(this.ul.find('li').length,2,"2 li found");

});

QUnit.test("checking click",function(assert){
    var done = assert.async(1);
    var orgResults = new OrgResults(this.ul);
    orgResults.setResults(this.dummyData);
    var clickedId;
    $(document).on('view',function(evt,arg1){
        clickedId = arg1;
        assert.equal(clickedId,"123456789","should be 123456789");
        done();
    });
    var firstListElement = $(this.ul.find('li')[0]);
    firstListElement.trigger("click");
})

QUnit.test("pending",function(assert){
    var orgResults = new OrgResults(this.ul);
    orgResults.pending();

    assert.equal(this.ul.find('li').length,1,"1 li found");
    assert.ok($(this.ul.find('li')[0]).text().indexOf("Searching") !== -1,"should be searching");
});