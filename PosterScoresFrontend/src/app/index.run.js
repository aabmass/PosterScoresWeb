(function() {
  'use strict';

  angular
    .module('posterScoresFrontend')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
