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