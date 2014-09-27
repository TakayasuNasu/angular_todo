'use strict';

angular.module('todoApp')
  .controller('TodoDetailCtrl', function ($scope,
                                          $http,
                                          $stateParams,
                                          $location,
                                          User) {
    // 認証
    User.query();

    // MongoDBからTodo詳細を取得
  	$http.get('/api/todos/' + $stateParams.id)
  	  .success(function(todo) {
  	  	$scope.todo = todo;
  	})
  	  .error(function() {
  	    $location.path('/');
  	  });

  });
