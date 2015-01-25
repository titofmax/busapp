Meteor.subscribe('Jobs');

function styleSidenavSelectedItem() {
	var url = Router.current().route._path;
	var items = document.getElementsByClassName('side-nav-item');
    _.each(items, function(item) {
      if( item.getAttribute('href') == url) {
      	item.parentNode.setAttribute("class", "active");
      }
    })
}

Template.sidenav.rendered = function () {
	styleSidenavSelectedItem();
};

Template.sidenav.events ({
	'click #sidenav' : function(event, template) {
		styleSidenavSelectedItem();
	}
});