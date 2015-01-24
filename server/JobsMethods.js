Meteor.methods({

	//Create a job
  	jobCreate: function (company, min, max, fee) {
		var newJob  = {
	  		company:company, min:min, max:max, fee:fee, 
		  	turnover:(parseFloat(min)+parseFloat(max))/2*fee/100,
		  	add_date: Meteor.call('getTodayDate')
	  	};
	  	Jobs.insert(newJob);
	},

	//Edit a job
	jobEdit: function (job, company, min, max, jobfee) {
		var jobNewInfos = {
	  		company:company, min:min, max:max, jobfee:jobfee, 
		  	turnover:(parseFloat(min)+parseFloat(max))/2*fee/100, deal:job.deal, 
		};
		Jobs.update(job._id, {$set: jobNewInfos}, false, true);
	},

	//Create a deal and add it to the billings list
	jobToDeal: function (job, dealSalary, dealFee, dealDate, dealStartingDate) {
		var deal = {salary:dealSalary, jobFee:dealFee, date:dealDate, startingDate:dealStartingDate};
		Jobs.update(job._id, {$set: {deal: deal}});
	},

	//Remove a job
	jobRemove: function (job) {
		Jobs.remove(job._id);
	},

	//Potential turnover with the job
	getJobTurnover: function (job){
		var salary = ( job.min + job.max )/2
		var jobTurnover = salary * job.fee;
		return jobTurnover;
	},

	//Number of jobs
	getNbJobs: function () {
		return Jobs.find({}).count();
	}
})