(function() {
    'use strict';

    angular
    .module('posterScoresFrontend')
    .config(config);

    /** @ngInject */
    function config($logProvider, $authProvider, $locationProvider) {
        // Enable log
        $logProvider.debugEnabled(true);

        /*
         * use HTML5 mode for nicer urls. Note:
         *
         * the real server will eventually have to be configured to handle this
         * with rewrites. For more info, see:
         * https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions#how-to-configure-your-server-to-work-with-html5mode
         */
        $locationProvider.html5Mode(true)

        $authProvider.facebook({
            url: 'api/login/social/jwt_user/',
            clientId: '1495812887379106',
            scope: ['email']
        });

    }

})();
