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

Template.jobRemove.events({
	'click .submit': function (event, template) {
		event.preventDefault();
		var job = Jobs.findOne(Session.get("selectedJob"));
		Meteor.call('jobRemove', job);
	}
})

Template.jobEdit.helpers({
    selectedJob: function () {
      return Jobs.findOne(Session.get("selectedJob"));
    }
})

Template.jobEdit.events({
	'click .submit': function (event, template) {
		event.preventDefault();
		var job = Jobs.findOne(Session.get("selectedJob"));
		var company = document.getElementById('edit-company').value;
		var min     = document.getElementById('edit-min').value;
		var max     = document.getElementById('edit-max').value;
		var jobfee  = document.getElementById('edit-jobfee').value;
		Meteor.call('jobEdit', job, company, min, max, jobfee);
		// editJob(job, company, min, max, jobfee);
	}
})

Template.jobs_infos.helpers({
	data: function () {
		return Jobs.find({});
	},

	nbJobs: function () {
		return Jobs.find({}).count();
	},

    selectedJob: function () {
    	return Jobs.findOne(Session.get("selectedJob"));
    }
});

Template.jobs_infos.events({
	'click tr': function () {
		selectedJob = Session.set("selectedJob", this._id);
	}
})

//Start manage template jobToDeal
Template.jobToDeal.helpers({
    selectedJob: function () {
      return Jobs.findOne(Session.get("selectedJob"));
    }
})

Template.jobToDeal.events({
	'click .submit': function (event, template) {
		event.preventDefault();
		var job = Jobs.findOne(Session.get("selectedJob"));
		var dealSalary = document.getElementById('deal-salary').value;
		var dealJobFee = document.getElementById('deal-job-fee').value;
		var dealStartDate = document.getElementById('deal-start-date').value;
		var dealDate = document.getElementById('deal-date').value;
		Meteor.call('jobToDeal', job, dealSalary, dealJobFee, dealDate, dealStartDate);
		// jobToDeal(job, dealSalary, dealJobFee, dealDate, dealStartDate);
	}
})
// End manage template jobToDeal

Template.addJob.events({
  'click .submit': function (event, template) {
	  event.preventDefault();
	  var company = document.getElementById('company').value;
	  var min     = document.getElementById('min').value;
	  var max     = document.getElementById('max').value;
	  var jobfee  = document.getElementById('jobfee').value;
	  Meteor.call('jobCreate', company, min, max, jobfee);
    }
});

Template.billing_infos.helpers({
	data:function () {
		return Jobs.find({deal: {$exists: true}});
	}
})