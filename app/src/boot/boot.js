import angular from 'angular';

import App from 'src/app';

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
  .element( document )
  .ready( function() {
    angular
      .module( 'twitter-search-app-bootstrap', [ App.name ] )
      .run(()=>{
        console.log(`Running the 'twitter-search-app-bootstrap'`);
      });

    let body = document.getElementsByTagName("body")[0];
    angular.bootstrap( body, [ 'twitter-search-app-bootstrap' ]);
  });
