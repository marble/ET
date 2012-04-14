Handlebars.registerHelper('highlight', function(property) {
	var value = Ember.getPath(this, property);
	return new Handlebars.SafeString('<span class="highlight">'+value+'</span>');
});

Person = Ember.Object.extend({
	sayHello: function() {
		console.log("Hello from " + this.get('name'));
	}
});

var people = [
	Person.create({ name: "Juan" }),
	Person.create({ name: "Charles" }),
	Person.create({ name: "Majd" })
]

	// If else & Binding
var ifElse = App.View.IfElse = Ember.View.create({
	templateName: 'handlebars-if_else',
	classNames: ['well'],

	firstName: 'Jane',
	lastName: 'Doe',

	color: 'red',
	_loggedIn: false,

	todos: [
		Ember.Object.create({ isDone: false })
	],

	single: ['foo'],
	singleValueBinding: Ember.Binding.single('single', 'multiple entries available'),
	multiple: ['foo'],
	multipleValueBinding: Ember.Binding.multiple('multiple', 'single entry available'),

	remaining: function() {
		var todos = this.get('todos');
		return todos.filterProperty('isDone', false).get('length');
	}.property('todos.@each.isDone'),

	fullName: function() {
		return this.get('firstName') + ' ' + this.get('lastName');
	}.property('firstName', 'lastName').cacheable(),


	login: function() {
		this.set('_loggedIn', true);
	},

	sayHello: function() {
		people.invoke('sayHello');
	},

	closeTask: function() {
		var todos = this.get('todos');
		var todo = todos.objectAt(0);
		todo.set('isDone', true);
	}

}).appendTo('#examples');

