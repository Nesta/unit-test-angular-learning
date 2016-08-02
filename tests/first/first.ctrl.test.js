describe('', function(){
  beforeEach(module('firstModule'));

  describe('getFullName()', function(){
    it('should handle names correctly', inject(function($controller){
      var myController = $controller('firstCtrl');

      myController.firstName = 'George';
      myController.lastName = 'Harrison';

      myController.getFullName().should.equal('George Harrison');
    }));
  });
});