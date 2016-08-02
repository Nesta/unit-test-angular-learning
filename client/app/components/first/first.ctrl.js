(function() {
    angular.module('firstModule', []);

    angular
        .module('firstModule')
        .controller('firstCtrl', [
            function() {
                var self = this;

                self.firstName = '';
                self.lastName = '';

                self.getFullName = function() {
                    return self.firstName + ' ' + self.lastName;
                };

                return self;
            }
        ]);
})();