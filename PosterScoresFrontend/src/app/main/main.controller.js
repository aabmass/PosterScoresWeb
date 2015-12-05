(function() {
    'use strict';

    angular
    .module('posterScoresFrontend')
    .controller('MainController', MainController);

    /** @ngInject */
    function MainController($auth, $log) {
        var vm = this;

        vm.loggedIn = $auth.isAuthenticated();
        vm.user = {};

        $log.log($auth.getPayload());

        vm.authenticate = function(provider) {
            $auth.authenticate(provider)
            .then(function() {
                vm.loggedIn = true;

                var payload = $auth.getPayload();

                vm.user.email = payload.email;
                vm.user.username = payload.username;
                
            });
        };

    }
})();
