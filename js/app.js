var eventoApp = angular.module('eventoApp', []);

eventoApp.controller('MyController', function ($scope) {
    $scope.categories = [
	{"title":"Music", "subcategories": [{"name":"M1", "events":["M1Event1", "M1Event2", "M1Event3"] }] },
    {"title":"Sports", "subcategories":[{"name":"Sports1", "events":[] }] }, //, "Sports2", "Sports3"]}, 
    {"title":"Food", "subcategories":[{"name": "Food1", "events":[] }] } //, "Food2", "Food3", "Food4", "Food5", "Food6"]}
    ];
   
    $scope.gotCategory = ["fakeCategory"];
    $scope.gotSubcat = ["fakeSubcat"];
    $scope.random = 3;

    $scope.subcategories = false;
    $scope.events = false;


    $scope.categoryPicked = function(data) {
      $scope.gotCategory[0] = data;
      $scope.subcategories = true;
  };

  $scope.subcatPicked = function(data) {
      $scope.gotSubcat[0] = data;
      $scope.events = true;
      $scope.random = Math.floor(Math.random()*2);
    };

     $scope.done = function() {
    
    };
});
