'use strict';

angular.module('watchLikesHappenApp.Authentication',[])
  .factory('auth',function (userData) {

    function setUserData() {
      // todo
    }

    function getUserData() {
      // todo
    }

    function getHeaders() {
      // todo
    }

    function isLoggedIn() {
      // todo
    }

    function logoutUser() {

    }

    return {
      saveUser:setUserData,
      getUser: getUserData,
      getHeaders: getHeaders,
      logoutUser: logoutUser,
      isLoggedIn:isLoggedIn
    }
  });

