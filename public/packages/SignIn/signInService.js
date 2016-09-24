angular.module('boilerplate').factory('signInService', ['$http', function($http) {
    return {
        signIn: function (obj, success, error) {
            $http.post('/api/sign-in', obj).
                success(function (data) {
                    success(data)
                }).
                error(function (data) {
                    error(data);
                });
        },
        test : function (success, error) {
            $http.get('/api/test').
                success(function (data) {
                    success(data)
                }).
                error(function (data) {
                    error(data);
                });
        }
    }

}]);