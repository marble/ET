var App;
//
require(
	[
		'order!lib/jquery-1.7.1.min.js',
		'order!lib/ember-0.9.6.min.js',
		'order!lib/ember-data/ember-data.min.js',
		'order!lib/bootstrap/js/bootstrap.min.js'
	],
	function() {
		App = Ember.Application.create();
		App.View = {};

		require(
			[
				'examples.js'
			], function () {
			}
		)
	}
);