function ContactController(whomever, wherever) {
	whomever.name = 'Bill Gates';

	wherever(function () {
		whomever.name = 'Steve Jobs';
	}, 5000);
}
ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);
