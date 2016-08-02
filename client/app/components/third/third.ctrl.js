(function() {
    angular.module('thirdModule', []);

    angular
        .module('thirdModule')
        .controller('thirdCtrl', [
            '$scope', '$http',
            function($scope, $http) {
                var self = this;

                // ...

                $scope.instruments = ['foo'];

                $http.get('api/get-instruments')
                    .success(function(data) {
                        $scope.instruments = data;
                    }).error(function(e) {
                        $scope.status = 'ERROR';
                    });;

                return self;
            }
        ]);
})();