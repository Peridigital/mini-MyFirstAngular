angular.module('friendsList').controller('mainCtrl', function ($scope) {
  $scope.friends = ['Alex Medina','Alex Monson','Alex Boss']
  $scope.addFriend = function () {
    $scope.friends.push( $scope.newFriend )
  }
});
