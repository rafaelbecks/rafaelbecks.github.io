var embassy_app = angular.module("embassy_app", ['ngSanitize', 'ui.router']);

embassy_app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/");
	$stateProvider
	.state("main",{
		url:"/",
		templateUrl:'home.html'
	})
	.state("embassy",{
		url:"/embassy",
		templateUrl:'embassy.html'
	})
});