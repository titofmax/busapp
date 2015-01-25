Template.billing_infos.helpers({
	data:function () {
		return Jobs.find({deal: {$exists: true}});
	}
});