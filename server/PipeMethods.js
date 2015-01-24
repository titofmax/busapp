//All the Pipe methods
Meteor.methods({

	//Returns the number of jobs in the pipe
	getPipeJobsNb : function () {
		return Meteor.call('getPipeJobsList').count();
	},

	//Lists the jobs in the pipe
	getPipeJobsList : function () {
		return Jobs.find({deal: {$exists: false}});
	},

	// //Returns the potential turnover that can be made with pipe's jobs
	getPotentialTurnover : function () {
		var jobList = Meteor.call('getPipeJobsList');
		var turnover = 0;
		_.each(jobList, function(job) {
			turnover = turnover + Meteor.call('getJobTurnover',job);
    	})
    	turnover = turnover / jobList.count();
		return (turnover);
	},

		//Returns the potential turnover that can be made with pipe's jobs
	// getPotentialTurnover : function () {
	// return ('totati');
	// },

	//
	getPipeOldestJob: function () {
		return null;
	},

	getPipeYougestJob: function () {
		return null;
	},

	getPipeAverageAge: function () {
		return null;
	},

	getAverageDealingTime: function () {
		return null;
	},

	getPipeAverageFee: function () {
		return null;
	},

	getPipeMaxFee: function () {
		return null;
	},

	getPipeMinFee: function () {
		return null;
	},

	getPipeAverageJobTurnover: function () {
		return null;
	},

	getPipeMaxSalary: function () {
		return null;
	},

	getPipeMinSalary: function () {
		return null;
	},

	getPipeAverageSalary: function () {
		return null;
	}
})