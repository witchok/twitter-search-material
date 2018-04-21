/**
 * User Details Controller - controll view with twits
 * @constructor
 */

class UserDetailsController  {

  /**
   * Constructor
   *
   * @param $http
   */
  
  constructor($http) {
    this.$http = $http;
    this.readonly = false;             //readonly for chips in html
    this.removable = true;             //removable for chips in html
    this.chipsRequest = [];           //chipsRequest - model for chips
    this.switchPosition = "normal";   //switchPosition - model for switch("normal" or "reversed")

  }

/**
* Make request for a server to get twits with phrases from chips.
*/
  searchTwits(){
    var s = 'Twits: '
    for (let i = 0; i < this.chipsRequest.length; i++) {
      s += this.chipsRequest[i] + '; ';
    }
    alert(s)

  }

/**
* Change order of the twits to opposite.
*/
  changeSwitch(){
    this.twits.reverse();
  }

/**
* Sort twits by author 
*   - A-Z if switchPosition = "normal"
*   - Z-A if switchPosition = "reversed".
*/
  sortTwitsByAuthor(  ) {
    this.twits.sort( (a, b) => {
        
        if (this.switchPosition == "normal");
            if (a.user.name > b.user.name) {
                return 1;
            }
            if (a.user.name < b.user.name) {
                return -1;
            }
        if (this.switchPosition == "reversed"){
            if (a.user.name < b.user.name) {
                return 1;
            }
            if (a.user.name > b.user.name) {
                return -1;
            }
        }
        return 0;
    });
  }

/**
* Sort twits by text 
*   - A-Z if switchPosition = "normal"
*   - Z-A if switchPosition = "reversed".
*/
  sortTwitsByText(  ) {
    this.twits.sort( (a, b) => {
        
        if (this.switchPosition == "normal");
            if (a.text > b.text) {
                return 1;
            }
            if (a.text < b.text) {
                return -1;
            }
        if (this.switchPosition == "reversed"){
            if (a.text < b.text) {
                return 1;
            }
            if (a.text > b.text) {
                return -1;
            }
        }
        return 0;
    });
  }

/**
* Sort twits by date 
*   - A-Z if switchPosition = "normal"
*   - Z-A if switchPosition = "reversed".
*/

  sortTwitsByDate( ) {
    this.twits.sort( (a, b) => {
        
        if (this.switchPosition == "normal");
            if (this.dateCompare(a,b)) {
                return 1;
            }
            if (!this.dateCompare(a,b)) {
                return -1;
            }
        if (this.switchPosition == "reversed"){
            if (!this.dateCompare(a,b)) {
                return 1;
            }
            if (this.dateCompare(a,b)) {
                return -1;
            }
        }
        return 0;
    });
  }
 

 /**
 * Compare 2 string dates.
 * @param {string}a - date 1 
 * @param {string}b - date 2
 * @return {boolean} a greater than b
 */
  dateCompare(a,b){
    return (new Date(a.created_at).valueOf()) > (new Date(b.created_at).valueOf())
  }

/**
* Get twits from server and write it to the varriable twits
*/
  getTwits() {
    this.$http
            .get('data/searchTweets.json')
            .success((data) => {
                this.twits = data.statuses;
        });
    }
}


export default UserDetailsController;

