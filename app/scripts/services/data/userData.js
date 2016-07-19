angular.module('watchLikesHappenApp.Data', [])
  .factory('userData',['$resource','baseUrl' , '$http', '$q','auth',function($resource, baseUrl, $http, $q, auth){
    function registerUser(user) {
      // TODO:: implement register
    }

    function loginUser(user) {
      // TODO : implement login
    }

    function getCurrentUserDetails(){
     // todo : implement
    }

    function logoutUser() {
      // todo : implement
    }

    function getAllUsers() {
      // todo : implement
    }

    function changePasswords(passwords) {
      // todo : implement
    }

    return {
      register: registerUser,
      login: loginUser,
      logout: logoutUser,
      getCurrentUserDetails: getCurrentUserDetails,
      changePasswords:changePasswords,
      getAllUsers: getAllUsers
    }
  }]);
