Load Dropdown Select
---

### Description

### Usage

- You must custom the css style before use this plugin, and also copy the to your project.

~~~html
	<style type="text/css">
		.dropdown-pannel ul{
			text-align:left;
		}
		.dropdown-pannel{
			position : absolute;
			background:#fff;
			z-index:999;
			background:#fff;
			text-align:center;
			padding:10px;
			border: 1px solid #ccc;
			box-shadow: 0px 0px 5px;
			border-radius: 5px;

		}
		.dropdown-pannel ul li{
			display:inline-block;
			cursor:default;
			margin:0px;
			padding:5px 10px;

		}
		.dropdown-pannel ul li:hover{
			background:#eee;

		}
	</style>
~~~

- Add this Block to you HTML file

~~~html
<div id="div" style="width:100%;text-align:center;">
	<span id="dropdown-select" style="display:inline-block;width:200px;padding:10px;border:1px solid #ccc;">Select</span>
</div>
~~~

- And then, you should define the jquery at you requirejs' entry for solve dependancy of the plugin, it is very easy

~~~javascript 

requirejs.config({
    baseUrl: 'js',
	paths : {
		"jquery" : "https://cdn.bootcss.com/jquery/3.3.1/jquery.min"
	}
});

~~~

- Example

~~~javascript
	require(['js/load-dropdown-select.js'],function(selector){
			
		var elem = selector.create({
			"selector":"#dropdown-select"		
		});
		elem.onDropdown(function (evt,ele){
			ele.pending();
			setTimeout(function(){
				ele.setData({
					"10032":"Javascript",
					"10033":"RequireJS"
				});		
			},1000);
		});
		elem.onSelect(function(evt,value){
			console.log(value);		
		});
	});
~~~
