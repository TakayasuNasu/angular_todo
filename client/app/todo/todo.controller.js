'use strict';

angular.module('todoApp')
  .controller('TodoCtrl', function ($scope, $http, Auth, User, socket) {

    $scope.todo                    = {};
  	$scope.users                   = User.query();
  	$scope.todos                   = [];
  	$scope.todo.registrant_user    = Auth.getCurrentUser().name;

    /**
     * MongoDBからtodo一覧情報を取得
     */
  	$http.get('/api/todos').success(function(todos) {
      $scope.todos = todos;
      socket.syncUpdates('todo', $scope.todos);
    });

  	/**
     * todo期限日取得
     * DatepickerCtrlに通知を出す
     */
  	$scope.emitTodo = function () {
      $scope.$broadcast('createTodo', $scope.todo.content);
    };

    /**
     * todoの期限を適用する
     */
    $scope.$on('applyDate', function (event, data) {
    	$scope.todo.limit = data;
    });

    /**
     * todo削除
     */
    $scope.deleteTodo = function(todo) {
      $http.put('/api/todos/' + todo._id, {deleted_at: new Date()})
        .success(function(todos) {

      });
    }

    /**
     * todo新規作成
     */
  	$scope.createTodo = function() {
  	  $scope.emitTodo(); // DatepickerCtrlから期限日を取得

      // 初期登録時は商事するためnullを代入
  	  $scope.todo.deleted_at = null;
      if ($scope.todo.responsible_user && $scope.todo.content) {
      	$http.post('/api/todos', $scope.todo)
      	  .success(function(){
      	  	$scope.todo.content = '';
      	 });
      }
  	}

  });
