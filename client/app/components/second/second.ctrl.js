(function() {
    angular.module('secondModule', []);

    angular
        .module('secondModule')
        .controller('secondCtrl', [
            '$scope',
            function($scope) {
                var self = this;

                $scope.songs = [
                    'Here Comes The Sun'
                ];

                $scope.addSong = function(song) {
                    $scope.songs.push(song);
                };

                return self;
            }
        ]);
})();