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
            .then(function(response) {
                vm.loggedIn = true;
                
                $log.log(response.data.first_name);
                vm.user.first = response.data.first_name;
                vm.user.last = response.data.last_name;
            });
        };

    }
})();
