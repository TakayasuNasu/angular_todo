'use strict';

angular.module('todoApp')
  .controller('MemberCtrl', function ($scope, $http, socket) {
    $scope.members = [];

    $http.get('/api/members').success(function(members) {
    	$scope.members = members;
    	socket.syncUpdates('member', $scope.members);
    });

    $scope.createMember = function() {
    	if ($scope.member && $scope.member.name) {
    		$http.post('/api/members', $scope.member).success(function() {
    		  // 登録後はmember.nameをemptyにする
    		  $scope.member.name = ''
    		});

    	}
    }

  });
