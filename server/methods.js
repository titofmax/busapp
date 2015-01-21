Meteor.methods({

  	jobCreate: function (company, min, max, jobfee) {
		var newJob  = {
	  		company:company, min:min, max:max, jobfee:jobfee, 
		  	ca:(parseFloat(min)+parseFloat(max))/2*jobfee/100,
		  	add_date: Meteor.call('getTodayDate')
	  	};
	  	Jobs.insert(newJob);
	},

	getTodayDate: function (){
		var today = new Date();
	    var dd = today.getDate();
	    var mm = today.getMonth()+1; //January is 0!
	    var yyyy = today.getFullYear();
	    if(dd<10){
	        dd='0'+dd
	    } 
	    if(mm<10){
	        mm='0'+mm
	    } 
	    return dd+'/'+mm+'/'+yyyy;
	},

	jobEdit: function (job, company, min, max, jobfee) {
		var jobNewInfos = {
	  		company:company, min:min, max:max, jobfee:jobfee, 
		  	ca:(parseFloat(min)+parseFloat(max))/2*jobfee/100, deal:job.deal, 
		};
		Jobs.update(job._id, {$set: jobNewInfos}, false, true);
	},

	jobToDeal: function (job, dealSalary, dealJobFee, dealDate, dealStartDate) {
		var deal = {dealSalary:dealSalary, dealJobFee:dealJobFee, dealDate:dealDate, dealStartDate:dealStartDate};
		Jobs.update(job._id, {$set: {deal: deal}});
	},

	jobRemove: function (job) {
		Jobs.remove(job._id);
	}
})