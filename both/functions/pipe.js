//All the Pipe methods

//Returns the number of jobs in the pipe
getPipeJobsNb = function () {
	return getPipeJobsList().count();
};

//Lists the jobs in the pipe
getPipeJobsList = function () {
	return Jobs.find({deal: {$exists: false}});
};

//Returns the potential turnover that can be made with pipe's jobs
getPotentialTurnover = function () {
	var turnover = 0;
	_.each(getPipeJobsList().fetch(), function(job) {
		turnover = turnover + parseFloat(job.turnover);
  	})
	return (turnover);
};

getPipeOldestJob = function () {
	return null;
};

getPipeYougestJob = function () {
	return null;
};

getPipeAverageAge = function () {
	return null;
};

getAverageDealingTime = function () {
	return null;
};

getPipeAverageFee = function () {
	var fee = 0;
	_.each(getPipeJobsList().fetch(), function(job) {
		fee = fee + parseFloat(job.fee);
  	})
  	var n = getPipeJobsNb();
  	if( n == 0 ) {
  		return null;
  	} else {
		return fee = fee/n;
  	}
};

getPipeMaxFee = function () {
	return null;
};

getPipeMinFee = function () {
	return null;
};

getPipeAverageJobTurnover = function () {
  	var n = getPipeJobsNb();
  	if( n == 0 ) {
  		return null;
  	} else {
		return getPotentialTurnover()/n;
  	}
};

getPipeMaxSalary = function () {
	return null;
};

getPipeMinSalary = function () {
	return null;
};

getPipeAverageSalary = function () {
	var salary = 0;
	var n = getPipeJobsNb();
	if( n == 0 ){
		return null;
	} else {
		_.each(getPipeJobsList().fetch(), function(job) {
			salary = salary + (parseFloat(job.min)+parseFloat(job.max))/2;
	  	})
	  	salary = salary/n;
		return salary;
	}
};