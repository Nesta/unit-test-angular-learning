describe('', function() {
    beforeEach(module('thirdModule'));

    describe('get-instruments result', function() {
        it('should be added to scope', inject(function($controller, $httpBackend) {
            var scope = {};
            $httpBackend
                .when('GET', 'api/get-instruments')
                .respond([
                    'vocals', 'guitar', 'sitar'
                ]);
            var myController = $controller('thirdCtrl', {
                $scope: scope
            });

            $httpBackend.flush();

            scope.instruments.should.contain('guitar');
        }));
    });
});

describe('', function() {
    beforeEach(module('thirdModule'));

    describe('get-instruments with error', function() {
        it('should have a status with error', inject(function($controller, $httpBackend) {
            var scope = {};
            $httpBackend
                .when('GET', 'api/get-instruments')
                .respond(500, '');
            var myController = $controller('thirdCtrl', {
                $scope: scope
            });

            $httpBackend.flush();

            scope.status.should.equal('ERROR');
        }));
    });
});