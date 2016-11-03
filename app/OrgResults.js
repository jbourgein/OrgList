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
			html += "<li data-id='" + res.Id + "'>"+res.Name+" - " + res.Login_Link__c + "</li>";
		})
		this._el.html(html);
	},
	handleClick : function(evt){
		var id = $(evt.target).attr('data-id');

		$(evt.target).parent().find("li,a").css("background","none");

		$(evt.target).css("background","red");
		$(document).trigger('view',id);
	},
	pending : function(){		
    	this._el.html( '<li class="searching">Searching</li>' );
	},
	filter : function(searchTerm){
		this._el.find("li").css("display","list-item");
		if(searchTerm.length < 3){		
			return;
		}
		else{
			this._el.find("li").filter(function(index){
			    return $(this).text().toUpperCase().indexOf(searchTerm) === -1;
			}).css("display","none")
		}
	}	
}
