Template.jobRemove.events({
	'click .submit': function (event, template) {
		event.preventDefault();
		var job = Jobs.findOne(Session.get("selectedJob"));
		jobRemove(job);
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
		var fee  = document.getElementById('edit-fee').value;
		jobEdit(job, company, min, max, fee);
	}
})

Template.jobs_infos.helpers({
	jobs: function () {
		return getPipeJobsList();
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
		var dealFee = document.getElementById('deal-fee').value;
		var dealStartDate = document.getElementById('deal-start-date').value;
		var dealDate = document.getElementById('deal-date').value;
		jobToDeal(job, dealSalary, dealFee, dealDate, dealStartDate);
	}
})

Template.addJob.events({
  'click .submit': function (event, template) {
	  event.preventDefault();
	  var company = document.getElementById('company').value;
	  var min     = document.getElementById('min').value;
	  var max     = document.getElementById('max').value;
	  var fee  = document.getElementById('fee').value;
	  jobCreate(company, min, max, fee);
    }
});

Template.widget.helpers({
	turnover: function () {
		return getPotentialTurnover();
	},

	fee: function () {
		return getPipeAverageFee();
	},

	salary: function () {
		return getPipeAverageSalary();
	},

	age: function () {
		return getPipeAverageAge();
	}
})