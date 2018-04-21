/**
 * Main App Controller for the AngularJS Material Starter App
 * @param $mdSidenav
 * @constructor
 */
class AppController{
  constructor(){
    /*
    */
    this.users        = [ ];
    this.twits        = [ ];

  }
/**
 * Make request for a server to get twits of selected user .
 * @param {object}user - Selected user
 */
  selectUser ( user ) {
    /*Must be request for a server */
    this.twits = [user.status];
  }

/**
* Make request for a server to get user of selected twit.
* @param {object} twit - Selected twit
*/
  selectTwit(twit){
    /*Must be request for a server */
    this.users = [twit.user];
  }
  
}


export default [AppController ];
