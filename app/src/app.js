// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import AppController from 'src/AppController';
import Users from 'src/users/Users';

export default angular.module( 'twitter-search-app', [ 'ngMaterial', Users.name ] )
  .config(($mdIconProvider, $mdThemingProvider) => {
    
    $mdIconProvider
      .defaultIconSet("./assets/svg/avatars.svg", 128)
      .icon("menu", "./assets/svg/menu.svg", 24)
      .icon("share", "./assets/svg/share.svg", 24)
      .icon("google_plus", "./assets/svg/google_plus.svg", 24)
      .icon("hangouts", "./assets/svg/hangouts.svg", 24)
      .icon("twitter", "./assets/svg/twitter.svg", 24)
      .icon("phone", "./assets/svg/phone.svg", 24)
      .icon("close", "./assets/svg/ic_close_24px.svg", 24)
      .icon("search", "./assets/svg/icons8-search.svg", 24)
      .icon("email", "./assets/svg/email.svg", 24)
      .icon("delete","./assets/svg/icons8-cancel-filled.svg",24)
      .icon("sort","./assets/svg/sort.svg",24)
      .icon("twitterInvate","./assets/svg/icons8-twitter.svg",24);

    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('indigo');
  })
.controller('AppController', AppController);
