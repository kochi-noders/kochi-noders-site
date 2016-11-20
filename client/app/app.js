angular
    .module('knjs', ['lbServices', 'ui.router', 'checklist-model', 'ui.mask'])
    .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            var path = 'app/components/'
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: path + 'home/home.html',
                    controller: 'HomeCtrl'
                })
                .state('signup', {
                    url: '/signup',
                    templateUrl: path + 'login/signup.html',
                    controller: 'SignupCtrl'
                })
                .state('speaker', {
                    url: '/speaker-registration',
                    templateUrl: path + 'speaker/speaker-registration.html',
                    controller: 'SpeakerCtrl'
                })
                .state('about-us', {
                    url: '/aboutus',
                    templateUrl: path + 'about-us/about-us.html',
                    controller: 'HomeCtrl'
                });
            // otherwise
            $urlRouterProvider.otherwise('/');
        }
    ])
