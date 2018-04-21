/**
 * User Details Controller - controll view with users
 * @constructor
 */

class UserListController  {
  /**
   * Constructor
   *
   * @param $http
   * @param $mdDialog
   */
  constructor($http, $mdDialog) {
    this.$http = $http;
    this.$mdDialog = $mdDialog;
    this.readonly = false;
    this.removable = true;
    this.chipsRequest = [];
    this.mainCheckValue = false;
    this.switchPosition = "normal";
    this.saved = [];
  }

  /**
  * Save users to the array of saved usesrs if checkbox's value == true.
  */
  saveUsers(){
    if(this.users != null){
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].checked && !this.isSavedContains(this.users[i])) {    
          // deep copy of a user
          let obj = JSON.parse(JSON.stringify(this.users[i]));
          this.saved.push(obj);
          this.saved[this.saved.length-1].checked = false;
          console.log(this.saved[this.saved.length-1].name);
        }
      }
    }
  }

  /**
  * Show users from the array of saved usesrs.
  */
  showSavedUsers(){
      this.makeUsers(this.saved);
  }

  /**
  * Delete users from the array of saved usesrs if checkbox's value == true.
  */
  deleteSavedUsers(){
    this.saved = this.deleteChecked(this.saved);
    this.showSavedUsers();
  }

  /**
  * Check if saved contains this user
  * @param {object}user - user to check
  * @return {boolean} - if user in saved -> true
  */
  isSavedContains(user){
    var flag = false;

    //make checked 'false' for right test of containing
    user.checked = false;
    for (let i = 0; i < this.saved.length; i++) {
      if(JSON.stringify(this.saved[i]) == JSON.stringify(user)){
        flag = true;
        break;
      }
    }
    user.checked = this.switchPosition;
    return flag;
  }
  

  /**
  * Make request for a server to get users using phrases from the chips.
  */
  search(){
    var s = 'Users: '
    for (let i = 0; i < this.chipsRequest.length; i++) {
      s += this.chipsRequest[i] + '; ';
    }
    alert(s)

  }


  /**
  * Make request for a server to get users using phrases from the chips.
  */
  getUsers() {
    this.$http
      .get('data/searchUsers.json')
      .success((data) => {
        this.makeUsers(data);
    });
  }

  
  /**
  * Make users equals to data
  * @param {object}data - data JSON with inforamtion about users
  */
  makeUsers(data){
    this.users = [];
    for(let i = 0; i < data.length; i++){
        this.users.push(data[i]);
        this.users[i].checked = this.mainCheckValue;
    }
  }
  
  /**
  * Make users equals to value of deleteChecked(users).
  */
  deleteUsers(){
    this.users = this.deleteChecked(this.users);
  }

  /**
  * Delete users from the list if checkbox's value == true.
  */
  deleteChecked(list){
    var newList = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].checked == false){
        newList.push(list[i]);
      }
    }
    return newList;
  }

  /**
  * Function works if checkbox is changed.
  */
  checkBoxChanged(){
    console.log("chenged checkbox: ");
      
    /*this.users[this.users.indexOf(user)].selected = true;*/ 
    /*user.checked = true;*/
  }

  /**
  * Make all users checked or opposite if toolbar's checkbox was changed.
  */
  checkBoxMain(){
      for (let i = 0; i < this.users.length; i++) {
        this.users[i].checked = this.mainCheckValue;
      }
  }

  testForMessage(){
    alert("messagge");
  }

  /**
  * Make message to invate checked users
  * @param ev {Event} - event for message
  */
  makeMessage(ev) {
    var confirm = this.$mdDialog.prompt()
      .title('Message for users')
      /*.textContent('')*/
      .placeholder('Invate')
      .ariaLabel('Invate')
      .initialValue('I want to invate you!')
      .targetEvent(ev)
      .required(true)
      .ok('Ok')
      .cancel('Cancel');

    this.$mdDialog.show(confirm).then(function(result) {
      $scope.status = 'You decided to name your dog ' + result + '.';
    }, function() {
      $scope.status = 'You didn\'t name your dog.';
    });
  }

  /**
  * Change order of the users to opposite.
  */
  changeSwitch(){
    this.users.reverse();
  }
  /**
  * Sort users by name 
  *   - A-Z if switchPosition = "normal"
  *   - Z-A if switchPosition = "reversed".
  */
  sortUsersByName() {
    this.users.sort( (a, b) => {
      if (this.switchPosition == "normal");
          if (a.name > b.name) {
              return 1;
          }
          if (a.name < b.name) {
              return -1;
          }
      if (this.switchPosition == "reversed"){
          if (a.name < b.name) {
              return 1;
          }
          if (a.name > b.name) {
              return -1;
          }
      }
      return 0;
   });
  }

  /**
  * Sort users by count of followers 
  *   - A-Z if switchPosition = "normal"
  *   - Z-A if switchPosition = "reversed".
  */
  sortUsersByFollowersCount() {
    this.users.sort( (a, b) => {
      if (this.switchPosition == "normal");
          if (a.followers_count > b.followers_count) {
              return 1;
          }
          if (a.followers_count < b.followers_count) {
              return -1;
          }
      if (this.switchPosition == "reversed"){
          if (a.followers_count < b.followers_count) {
              return 1;
          }
          if (a.followers_count > b.followers_count) {
              return -1;
          }
      }
      return 0;
   });
  }
}


export default UserListController;

