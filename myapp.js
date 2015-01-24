Jobs = new Mongo.Collection('Jobs');

if (Meteor.isClient) {
	toto = Meteor.call('getPotentialTurnover', function (error, result) {
			if (error) {
			// handle error
				return "error";
			} else {
				return result;
			}	
  		});
	tatat = 'prout';
}

if (Meteor.isServer) {

}