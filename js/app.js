var app = (function(){
	var initController = function(){
		new Controller();
	}
	return {
		init: function(){
			initController();
		}
	}
})();
app.init();