var OrgResults = function(el){
	this._self = this;
	this._el = $(el);
	this._el.on('click',this.handleClick);
	return this;
}

OrgResults.prototype = {
	setResults : function(results){
		var html = "";
		$.each(results,function(ind,res){
			html += "<li data-id='" + res.Id + "'>"+res.Name+"</li>";
		})
		this._el.append(html);
	},
	handleClick : function(evt){
		var id = $(evt.target).attr('data-id');
		$(document).trigger('view',id);
	}
}
