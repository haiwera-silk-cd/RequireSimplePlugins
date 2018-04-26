Link Dropdown Select
---

### Description

### Usage

- You must custom the css style before use this plugin, and also copy the to your project.

~~~html
	<style type="text/css">
		.dropdown-pannel{
			text-align:left;
			z-index:999;
			position:absolute;
			background:#fff;
			padding:10px;
			border: 1px solid #ccc;
			box-shadow: 0px 0px 5px;
			border-radius: 5px;

		}
		.dropdown-pannel div{
			padding-top:5px;
			border-top:1px solid #eee;
		}
		.dropdown-pannel ul{
			list-style:none;
			padding-left:0px;
		}
		.dropdown-pannel ul li{
			cursor:default;
			margin:0px;
			padding:5px 10px;

		}
		.dropdown-pannel ul li:hover{
			background:#eee;

		}
		.dropdown-pannel ul li span.remove{
			float:right;margin-top:5px;
		}
		ul li span.text{
			cursor:pointer;
		}
		.dropdown-pannel span.tool-btn{
			padding:5px;
			margin:5px;
			cursor:pointer;
		}
		.dropdown-pannel span.tool-btn:hover{
			background:#eee;
		}
	</style>
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
	require(['js/link-dropdown-select.js'],function(selector){
			
		var elem = selector.create({
			"selector":"#dropdown-select",
			"linkLabel" : "click me",
			"data" :[ 
				{"id" : "10032","label" : "Javascript","link" : "http://www.haiwera.xyz","addition":{}},
				{"id" : "10033","label" : "Haiwera","link" : "http://www.haiwera.xyz","addition":{}},
				{"id" : "10034","label" : "Blog","link" : "http://www.haiwera.xyz","addition":{}},
			],
			onclear : function(){
				console.log('clear');
			},
			oninit : function(ctrl){
				console.log('init');
			},
			onupdate : function(data){
				console.log('update');
				console.log(data);
				console.log('---------');
			},
			tools : {
				"Add Item" : function(evt,ctrl){
					console.log(ctrl);
					var ind = elem.addItem(Math.random().toString().substr(2,6), "http://haiwera.xyz");
					console.log(ind);
					elem.update();
					evt.stopPropagation();
				},
				"Hello" : function(evt,ctrl){
					console.log("hello");
					evt.stopPropagation();
				}
			}
		});

		elem.addItem("My No Link Label");
		elem.addItem("My Link Label","http://haiwera.xyz");

		elem.onSelect(function(evt,value){
			console.log(value);		
		});
		
	});
~~~
