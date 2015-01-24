Meteor.startup(function () {
// code to run on server at startup
//Inserting tests
insertTests();
function insertTests(){

    //Cleaning DB
    Jobs.remove({});

	var now = Meteor.call('getTodayDate');

		var test_jobs = [
      { company: 'Ercom',     min: 40000, max: 50000, fee: 20},
      { company: 'Leboncoin', min: 40000, max: 50000, fee: 20},
      { company: 'MrDrive',   min: 40000, max: 50000, fee: 20}
    ]
    _.each(test_jobs, function(job) { 
      Meteor.call('jobCreate',job.company,job.min,job.max,job.fee);
    })
}

});