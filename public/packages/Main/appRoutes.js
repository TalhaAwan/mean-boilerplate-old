angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'packages/Main/home.html',
			controller: 'mainController'
		})
        .when('/sign-in', {
            templateUrl: 'packages/SignIn/sign-in.html',
            controller: 'signInController'
        })
        .otherwise({
            redirectTo: '/'
        });

	$locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authHttpResponseInterceptor');

}])

    .factory('authHttpResponseInterceptor',['$q','$location',function($q,$location){

        return {
            request: function(request) {
                console.log("req")
                var token = localStorage.userToken;
                request.headers.token = token;
                return request;
            },
            response: function(response){
                if (response.status === 401) {
                    console.log("Response 401");
                }
                return response || $q.when(response);
            },
            responseError: function(rejection) {
                console.log(rejection);
                if (rejection.status === 401) {
                    console.log("Response Error 401",rejection);
                    localStorage.removeItem("userToken");
                    $location.path('/');
                }
                return $q.reject(rejection);
            }
        }
    }]);