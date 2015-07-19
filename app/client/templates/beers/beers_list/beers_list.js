/*****************************************************************************/
/* BeersList: Event Handlers */
/*****************************************************************************/
Template.BeersList.events({
});

/*****************************************************************************/
/* BeersList: Helpers */
/*****************************************************************************/
Template.BeersList.helpers({
	beers: function () {
		return Beers.find();
	}
});

/*****************************************************************************/
/* BeersList: Lifecycle Hooks */
/*****************************************************************************/
Template.BeersList.created = function () {
};

Template.BeersList.rendered = function () {
};

Template.BeersList.destroyed = function () {
};
