var OrgDetails = function(el){
	this._el = $(el);
	
	this._self = this;
	return this;
}

OrgDetails.prototype = {
	setDetails : function(results){
		var html = "";
		this._el.html(html);
		if(results.length === 0){
			html = "<p>no results</p>";	
		}
		$.each(results,function(ind,res){
			html += "<li>" + res.Name + " - " + res.Login_Link__c + "</li>";
		});

		this._el.append(html);
	}
}