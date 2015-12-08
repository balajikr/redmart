'use strict';

/**
 * @ngdoc function
 * @name redmartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the redmartApp
 */
var app = angular.module('redmartApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

		app.controller('modifyCtrl', ['$scope', function($scope){
			$scope.tabelsData= [
				{'name':'Balaji', 'phone':'9876543210', 'emailId':'info@balajikr.com' },
				{'name':'Ravi',  'phone':'9874563210', 'emailId':'ravi@hr.com' },
				{'name':'Sandy', 'phone':'01234567890', 'emailId':'sandy@me.com' }
			];


			$scope.modify = function(tableData){

				$scope.modifyField = true;
				$scope.viewField = true;
			};


			$scope.update = function(tableData){
				$scope.modifyField = false;
				$scope.viewField = false;
			};

		}]);
		
