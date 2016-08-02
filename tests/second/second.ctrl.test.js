describe('', function() {
    beforeEach(module('secondModule'));

    describe('addSong()', function() {
        it('should add songs', inject(function($controller) {
            var scope = {};
            var myController = $controller('secondCtrl', {
                $scope: scope
            });

            scope.addSong('While My Guitar Gently Weeps');

            scope.songs.should.contain('While My Guitar Gently Weeps');
        }));
    });
});
