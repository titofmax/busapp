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
}

Template.billing_infos.helpers({
	data:function () {
		return Jobs.find({deal: {$exists: true}});
	}
})