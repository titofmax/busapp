Meteor.startup(function () {
// code to run on server at startup

  Meteor.publish('Jobs', function() {
    return Jobs.find();
  });

  insertTests();

  function insertTests() {
      //Cleaning DB
      Jobs.remove({});
      var now = getTodayDate();
  		var test_jobs = [
        { company: 'Ercom',     min: 40000, max: 50000, fee: 20},
        { company: 'Leboncoin', min: 40000, max: 50000, fee: 20},
        { company: 'MrDrive',   min: 40000, max: 50000, fee: 20}
      ]
      _.each(test_jobs, function(job) { 
        jobCreate(job.company,job.min,job.max,job.fee);
      })
  }

});