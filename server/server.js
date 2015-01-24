Meteor.startup(function () {
// code to run on server at startup
//Inserting tests
insertTests();
function insertTests(){

    //Cleaning DB
    Jobs.remove({});

	var now = Meteor.call('getTodayDate');

		var test_jobs = [
      { company: 'Ercom',     min: 40000, max: 50000, jobfee: 20, add_date: now },
      { company: 'Leboncoin', min: 40000, max: 50000, jobfee: 20, add_date: now },
      { company: 'MrDrive',   min: 40000, max: 50000, jobfee: 20, add_date: now }
    ]
    _.each(test_jobs, function(doc) { 
      Jobs.insert(doc);
    })
}

});