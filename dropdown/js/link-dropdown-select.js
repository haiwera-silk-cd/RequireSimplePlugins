define([
	'jquery'
],function($){

	var loadingImg = "data:image/gif;base64,R0lGODlhIAAgAPMAAP///wAAAMbGxoSEhLa2tpqamjY2NlZWVtjY2OTk5Ly8vB4eHgQEBAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHRLYKhKP1oZmADdEAAAh+QQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY/CZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB+A4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6+Ho7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq+B6QDtuetcaBPnW6+O7wDHpIiK9SaVK5GgV543tzjgGcghAgAh+QQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK++G+w48edZPK+M6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE+G+cD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm+FNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk+aV+oJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0/VNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc+XiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30/iI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE/jiuL04RGEBgwWhShRgQExHBAAh+QQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR+ipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY+Yip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd+MFCN6HAAIKgNggY0KtEBAAh+QQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1+vsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d+jYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg+ygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0+bm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h+Kr0SJ8MFihpNbx+4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX+BP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA==";
	var HistorySelect = function(options){
		this.controlElement = $(options.selector);
		/*
		 * data [{ id : "",label : "",link : "",addition : {}}]
		 */

		this.data = options.data;
		this.onClear = options.onclear;
		this.onUpdate = options.onupdate;
		this.onSelectAnOther = options.onswitch;
		this.toolBtns = options.tools || {};
		this.onInit = options.oninit;
		this.linkLabel = options.linkLabel || "link";
		this.onSelectCallback = undefined;
		this.isShow = false;
		this.enabled = true;
		this.element = $("<div class='dropdown-pannel'></div>");
		this.historyContainer = $("<ul></ul>");
		this.toolBar = $("<div><span class='tool-btn clear-all'>Clear All</span></div>");
		this.element.append(this.historyContainer);
		this.element.append(this.toolBar);
		this.element.hide();

		this.controlElement.after(this.element);
		this.budget = $('<span class="fa fa-chevron-down"></span>');
		this.controlElement.parent().css({
			"position" : "relative"
		});
		this.controlElement.css({
			"position":"relative"
		});
		this.budget.css({
			"marginTop" : "5px",
			"float" : "right"
		});

		this.label = this.controlElement.text();

		this.controlElement.empty();
		this.controlElement.append($("<span class='text'>"+this.label+"</span>"));
		this.controlElement.append(this.budget);
		var elemSelf = this;

		this.controlElement.on('click','a',function(e){
			elemSelf.pending();
			e.stopPropagation();
		});
		this.controlElement.click(function(e){
			elemSelf.toggle();
			e.stopPropagation();
		});
		this.historyContainer.on('click','li span.remove',function(e){
			var id = $(this).closest('li').data('id');
			elemSelf.removeItem(id);
			e.stopPropagation();
		});
		this.historyContainer.on('click','li',function(e){
			var id = $(this).data('id');
			var selectionChanged = false;
			for(var i in elemSelf.data){
				if(elemSelf.data[i].id == id){
					if((!elemSelf.selectedItem || elemSelf.selectedItem.id != id) && elemSelf.onSelectCallback){
						selectionChanged = true;
					}
					elemSelf.selectItem(id);
				}
			}
			elemSelf.toggle();
			if(selectionChanged){
				elemSelf.onSelectCallback.call(elemSelf,e,elemSelf.selectedItem);	
			}
		});
		this.toolBar.find('.clear-all').click(function(){
			elemSelf.clear();
		});
		for(var i in this.toolBtns){
			var tclass="tool-" + Math.random().toString().substr(2);
			var ele = $("<span class='tool-btn "+tclass+"'>"+i+"</span>");
			this.toolBar.append(ele);
			ele.click(function(e){
				var ind = $(this).text();
				elemSelf.toolBtns[ind].call(elemSelf,e,elemSelf);
			});
		}
		this.toolBar.find('.select-other').click(function(){
			elemSelf.hide();
			if(elemSelf.onSelectAnOther){
				elemSelf.onSelectAnOther.call(elemSelf,elemSelf);
			}
		});
		$(document).click(function(){
			setTimeout(function(){
				elemSelf.hide();
			},100);
		});

		if(this.data && this.data[0]){
			this.selectedItem = this.data[0];
		}else{
			this.clear();
		}
		this.update();
		if(this.onInit){
			this.onInit.call(this,this);
		}
	}

	HistorySelect.prototype = {
		pending : function(){
			this.controlElement.find('a').replaceWith($('<img style="height:21px;" src="'+ loadingImg +'" />'));
		},
		hide : function (){
			this.budget.removeClass("fa-chevron-up").addClass("fa-chevron-down");
			this.element.hide();
			this.isShow = false;
		},
		toggle : function(){
			this.update();
			if(this.isShow){
				this.hide();
			}	
			else{
				this.budget.removeClass("fa-chevron-down").addClass("fa-chevron-up");
				this.element.css("left",this.controlElement.offset().left);
				this.element.css("width",this.controlElement.width());
				this.element.show();
				this.isShow = true;
			}
		},
		triggerLink : function(){
			var elem = this.controlElement.find('a')[0];
			if(elem){
				this.pending();
				location.href = elem.href;
			}
		},
		addItem : function (label,link,addition){
			var maxId = 0;
			for(var i in this.data){
				if(parseInt(this.data[i].id) > maxId){
					maxId = parseInt(this.data[i].id);
				}
				if(label == this.data[i].label){
					this.selectedItem = this.data[i];
					return ;
				}
			}
			var id = maxId + 1;
			var item = {id : id,label : label,link : link,addition : addition};
			this.data.push(item);
			return id;
		},
		selectItem : function (index){
			for(var i in this.data){
				if(this.data[i].id == index){
					this.selectedItem = this.data[i];
					var tmp = this.data[0];
					this.data[0] = this.selectedItem;
					this.data[i] = tmp;
				}
			}
			this.update();
		
		},
		removeItem : function (index){
			if(this.selectedItem && this.selectedItem.id == index){
				this.selectedItem = undefined;
			}
			for(var i in this.data){
				if(this.data[i].id == index){
					this.data.splice(i,1);
				}
			}
			this.update();
		},
		clear : function(){
			this.data = [];
			this.selectedItem = undefined;
			this.update();
			if(this.onClear){
				this.onClear.call(this);
			}
			this.hide();
		},
		loadItems : function (items){
			this.data = items;
		},
		getItems : function (){
			return this.data;
		},
		onSelect : function(callback){
			this.onSelectCallback = callback;
		},
		update : function (){
			this.historyContainer.empty();
			for(var i in this.data){
				if(this.selectedItem && this.selectedItem.id != this.data[i].id){
					li = $("<li data-id='"+this.data[i].id+"'><span>"
						+this.data[i].label+
						"</span><span class='remove fa fa-remove' ></span></li>");
					this.historyContainer.append(li);	
				
				}
			}
			if(this.selectedItem){
				this.controlElement.find('.text').empty();
				if(this.selectedItem.link){
					this.controlElement.find('.text').html(this.selectedItem.label + 
							"&nbsp;&nbsp;(&nbsp;<a href='"+this.selectedItem.link+"'>"+
							this.linkLabel+"</a>&nbsp;)");
				}
				else{
					this.controlElement.find('.text').html(this.selectedItem.label);
				}
			}
			if(this.onUpdate){
				this.onUpdate.call(this,this.data);
			}
		}
	};

	return {
		create : function (options){
			return new HistorySelect(options);
		}
	}
});
