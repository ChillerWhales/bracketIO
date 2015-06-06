angular.module('new.invite', [])
.controller('inviteFriendsCtrl', function ($scope, invite) {
  $scope.invitedUsers = invite.getInvitedUsers();

  $scope.inviteUser = function() {
    invite.inviteUser($scope.league.id, $scope.username);
    $scope.username = "";
  }
})


.factory('invite', function($http) {
  //should be an empty array once route works
  var invitedUsers = [];

  var inviteUser = function(leagueId, username) {

    $http.post('/league/' + leagueId + '/invite', {'username': username})
      .success(function(invitedUser){
        invitedUsers.push(invitedUser);
      })
      .error(function(err){
        console.log('error:', err);
      });
  }

  var getInvitedUsers = function() {
    return invitedUsers;
  }

  return {
    inviteUser: inviteUser,
    getInvitedUsers: getInvitedUsers
  }
});