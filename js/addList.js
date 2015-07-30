var addListView =  Library.View({
    
    el: ".addListView",

    events: {
      "click" : {
        ".js-add-list" : "addNewList",
        ".js-idle-button" : "showAddListView",
        ".js-cancel-edit" : "hideAddListView"
      }
    },

    addNewList :function (e){
      var listName = document.getElementById("new-list-name").value;
      var listView = new ListView();
      listView.render({el:".listView", name:listName});
      document.getElementById("new-list-name").value = "";
      this.hideAddListView();
    },

    showAddListView: function (e){
      QQ.removeCls(document.querySelectorAll(".js-idle-button")[0], "idle");
    },

    hideAddListView: function(e){
      QQ.addCls(document.querySelectorAll(".js-idle-button")[0], "idle");
    },

    render : function(){
      var tpl = document.querySelectorAll("#addListTpl")[0];
      var itemContainer = document.querySelectorAll(this.el)[0];
      itemContainer.innerHTML = tpl.innerHTML;
    }
});
