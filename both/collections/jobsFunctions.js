//Create a job
jobCreate = function (company, min, max, fee) {
	var today = new Date();
	var newJob  = {
  		company:company, min:min, max:max, fee:fee, 
	  	turnover:(parseFloat(min)+parseFloat(max))/2*fee/100,
	  	add_date: today
  	};
  	Jobs.insert(newJob);
};

//Edit a job
jobEdit = function (job, company, min, max, fee) {
	var jobNewInfos = {
  		company:company, min:min, max:max, fee:fee, 
	  	turnover:(parseFloat(min)+parseFloat(max))/2*fee/100, deal:job.deal, 
	};
	Jobs.update(job._id, {$set: jobNewInfos}, false, true);
};

//Create a deal and add it to the billings list
jobToDeal = function (job, dealSalary, dealFee, dealDate, dealStartingDate) {
	dealDate = new Date(dealDate);
	dealStartingDate = new Date(dealStartingDate);
	var deal = {salary:dealSalary, fee:dealFee, date:dealDate, startingDate:dealStartingDate};
	Jobs.update(job._id, {$set: {deal: deal}});
};

//Remove a job
jobRemove = function (job) {
	Jobs.remove(job._id);
};

//Potential turnover with the job
getJobTurnover = function (job) {
	var salary = ( parseFloat(job.min) + parseFloat(job.max) )/2;
	var jobTurnover = salary * parseFloat(job.fee) / 100;
	return jobTurnover;
};

//Number of jobs
getNbJobs = function () {
	return Jobs.find({}).count();
};

//Number of day this job has been in pipe
getJobAge = function (job) {
	var today = new Date();
	var age = today - job.add_date;
	age = parseFloat(age)/1000/60/60/24;
	return age;
}