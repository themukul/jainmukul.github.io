var app= angular.module('CompetitionEvent', ['ngRoute']);

app.config(function($routeProvider)
{
	$routeProvider
	.when('/robowar',{
		controller : 'MainController',
		templateUrl : 'views/robowary.html',
	})
	.when('/transporter',{
		controller : 'MainController',
		templateUrl : 'views/transporterk.html'
	})
	.when('/linefollower',{
		controller : 'MainController',
		templateUrl : 'views/linefolloweryy.html'
	})
	.when('/lumos',{
		controller : 'MainController',
		templateUrl : 'views/lumosk.html'
	})
	.when('/roborace',{
		controller : 'MainController',
		templateUrl : 'views/roboracey.html'
	})
	.when('/robosoccer',{
		controller : 'MainController',
		templateUrl : 'views/robosoccerk.html'
	})
	.when('/technovation',{
		controller : 'MainController',
		templateUrl : 'views/eventx.html'
	})
	.when('/aceinventure',{
		controller : 'MainController',
		templateUrl : 'views/eventx.html'
	})
	.when('/iupc',{
		controller : 'MainController',
		templateUrl : 'views/eventx.html'
	})
	.when('/sif',{
		controller : 'MainController',
		templateUrl : 'views/sifxx.html'
	})
	.when('/bplan',{
		controller : 'MainController',
		templateUrl : 'views/bplanx.html'
	})
	.when('/bigq',{
		controller : 'MainController',
		templateUrl : 'views/techqx.html'
	})
	.when('/techq',{
		controller : 'MainController',
		templateUrl : 'views/bigqx.html'
	})
	.when('/iupc',{
		controller : 'MainController',
		templateUrl : 'views/iupc.html'
	})
	.when('/diupc',{
		controller : 'MainController',
		templateUrl : 'views/diupc.html'
	})
	.when('/fixtb',{
		controller : 'MainController',
		templateUrl : 'views/fixtb.html'
	})
	.when('/asgard',{
		controller : 'MainController',
		templateUrl : 'views/asgardx.html'
	})
	.when('/into',{
		controller : 'MainController',
		templateUrl : 'views/intox.html'
	})
	.when('/astrohunt',{
		controller : 'MainController',
		templateUrl : 'views/astrohuntx.html'
	})
	.when('/turncoat',{
		controller : 'MainController',
		templateUrl : 'views/turncoatx.html'
	})
	.when('/floorcrossing',{
		controller : 'MainController',
		templateUrl : 'views/floorcrossingx.html'
	})
	.when('/finderskeepers',{
		controller : 'MainController',
		templateUrl : 'views/finderskeepersx.html'
	})
	.when('/lyrewrite',{
		controller : 'MainController',
		templateUrl : 'views/lyrewritex.html'
	})
});