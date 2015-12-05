(function() {
    'use strict';

    angular
    .module('posterScoresFrontend')
    .config(config);

    /** @ngInject */
    function config($windowProvider, $logProvider, $authProvider, $locationProvider) {
        // Enable log
        $logProvider.debugEnabled(true);
        var $window = $windowProvider.$get();

        /*
         * use HTML5 mode for nicer urls. Note:
         *
         * the real server will eventually have to be configured to handle this
         * with rewrites. For more info, see:
         * https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions#how-to-configure-your-server-to-work-with-html5mode
         */
        $locationProvider.html5Mode(true)

        $authProvider.facebook({
            url: 'api/login/social/jwt/facebook',
            clientId: '1495812887379106'
        });

        $authProvider.google({
            url: 'api/login/social/jwt/google-oauth2',
            clientId: '916074107110-ok6risi8u3lppk9m43v4tj4efhcrroe9.apps.googleusercontent.com',
            redirectUri: $window.location.origin + '/'
        });

    }

})();
