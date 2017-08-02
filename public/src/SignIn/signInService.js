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
        }
    }

}]);