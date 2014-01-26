var eventoApp = angular.module('eventoApp', []);

eventoApp.controller('MyController', function ($scope) {
    $scope.categories = [
    {"title":"Music", "subcategories":["Music1", "Music2", "Music3", "Music4", "Music5"]}, 
    {"title":"Sports", "subcategories":["Sports1", "Sports2", "Sports3"]}, 
    {"title":"Food", "subcategories":["Food1", "Food2", "Food3", "Food4", "Food5", "Food6"]}
    ];
   
    $scope.gotCategory = ["fakeCategory"];
    $scope.subcategories = false;

    $scope.categoryPicked = function(data) {
      $scope.gotCategory[0] = data;
      $scope.subcategories = true;
  };
});
