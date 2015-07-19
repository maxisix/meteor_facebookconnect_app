HomeController = RouteController.extend({
  layoutTemplate: 'MasterLayout',

  subscriptions: function() {
  	this.subscribe('beers');
  },

  action: function() {
    this.render('Home');
  }
});
