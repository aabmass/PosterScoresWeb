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
            var provider_backend = provider === "google" ? "google-oauth2" : provider;

            $auth.authenticate(provider, {
                provider: provider_backend
            })
            .then(function(response) {
                vm.loggedIn = true;
                
                $log.log(response.data.first_name);
                vm.user.first = response.data.first_name;
                vm.user.last = response.data.last_name;
            });
        };

    }
})();
