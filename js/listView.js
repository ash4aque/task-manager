function ListView(){
	this.event = {
		"click .js-add-list" : "addNewList",
		"click .lists-view" : "addItemInList",
		"ondrop .lists-view" : "dropHandler",
		"ondragover .lists-view" : "dragOverEvent",
		"ondragstart .lists-view" : "dragStartHandler"
	};
	this.addNewList = function (e){
		var tpl = document.querySelectorAll("#listTpl")[0];
		var input = document.querySelectorAll(".list-name")[0];
		var listContainer = document.querySelectorAll(".main-container .lists-view")[0];
		tpl.querySelectorAll(".list-header")[0].innerHTML = input.value;
		input.value = "";
		listContainer.innerHTML += tpl.innerHTML;
	};
	this.addItemInList = function (e){
		if (e.target.classList.contains("js-add-item")) {			
			var tpl = document.querySelectorAll("#itemTpl")[0];
			var itemContainer = e.target.parentNode.querySelectorAll(".list-content")[0];
			itemContainer.innerHTML += tpl.innerHTML;
		};
	};
	this.dropHandler = function(e){
		e.preventDefault();
		if (e.target.classList.contains("list-content")) {
			var data=e.dataTransfer.getData("move");
			e.target.appendChild(document.getElementById(data));
		};
	};
	this.dragOverEvent =function(e){
		e.preventDefault();
	};
	this.dragStartHandler = function(e){
		e.dataTransfer.setData("move",ev.target.id);
	};
	this.render = function(){
		var mainContainer = document.querySelectorAll(".main-container")[0];
		this.bindEvent();
	};
	this.bindEvent = function(){
		for( var prop in this.event ){
			var eventname = prop.split(" ")[0];
			var targetEls = document.querySelectorAll(prop.split(" ")[1]);
			for (var i = 0; i < targetEls.length; i++){				
				targetEls[i].addEventListener(eventname, this[this.event[prop]], false)
			}
		}
	}
}