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
	}
})

Template.jobs_infos.helpers({
	job: function () {
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
	}
})

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

Template.widget.helpers({

	turnover: function () {
		Meteor.call('getPotentialTurnover', function (error, result) {
			if (error) {
			// handle error
				return "error";
			} else {
				// alert(result);
				$('#turnover').html(result);
				// return result;
			}	
  		});
	
	},

	turnover1: function () {
		return Meteor.call('getPotentialTurnover');
	}
})