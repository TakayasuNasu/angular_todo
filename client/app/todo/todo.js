'use strict';

angular.module('todoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('todo', {
        url: '/todo',
        templateUrl: 'app/todo/todo.html',
        controller: 'TodoCtrl'
      })
      .state('detail', {
      	url: "/todo/:id",
      	templateUrl: 'app/todo/todo.detail.html',
      	controller: 'TodoDetailCtrl'
      });
  });