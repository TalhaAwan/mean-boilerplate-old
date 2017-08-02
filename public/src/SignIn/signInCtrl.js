angular.module('boilerplate').controller('signInController', function($scope, signInService) {

    console.log("signin ctrl")

    $scope.signIn = {};


    $scope.userSignIn = function(){
        console.log($scope.signIn)

        signInService.signIn($scope.signIn, function(data){
                localStorage.setItem("userToken", data.token);
                console.log(data)
        },
        function(err){
            console.log(err)
        })
    }


});