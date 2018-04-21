import UserDetailsController from './UserDetailsController'
/*import UserListController from 'src/users/components/list/UserListController'
*/
export default {
  name : 'userDetails',
  config : {
    bindings         : {  twits: '<', users: '<',  showUsers : '&onSelected'   },
    templateUrl      : 'src/users/components/details/UserDetails.html',
    controller       : [ '$http', UserDetailsController ]
  }
};