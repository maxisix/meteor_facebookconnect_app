Meteor.startup(function () {
});

ServiceConfiguration.configurations.remove({
    service: 'facebook'
});

ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '...',
    secret: '...'
});

// ServiceConfiguration.configurations.upsert(
//   { service: "facebook" },
//   {
//     $set: {
//       clientId: "...",
//       loginStyle: "popup",
//       secret: "..."
//     }
//   }
// );


// Fixture data 
if (Beers.find().count() === 0) {

  for (var i = 0; i < 10; i++) {
    Beers.insert({
    	brewery: 'Trou du diable',
		beer_name: 'Test post #' + i,
		votes: 0
    });
  }

}