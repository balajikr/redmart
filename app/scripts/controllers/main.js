'use strict';

/**
 * @ngdoc function
 * @name redmartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the redmartApp
 */
angular.module('redmartApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];



var i;
    
    $scope.contacts = [
        {'id':'0', 'name': 'Balaji KR', 'email':'balajikr@gmail.com', 'phone': '998-6697-894'},
        {'id':'1', 'name': 'Ravi K', 'email':'ravik@gmail.com', 'phone': '123-2343-44'},
        {'id':'2', 'name': 'Sandy K', 'email':'sandy@gmail.com', 'phone': '123-2343-44'},
        {'id':'3', 'name': 'Ramesh A', 'email':'ramesha@gmail.com', 'phone': '123-2343-44'},
        {'id':'4', 'name': 'Karthick K', 'email':'karthick@gmail.com', 'phone': '123-2343-44'},
        {'id':'5', 'name': 'Sajesh Jose', 'email':'sajeshj@gmail.com', 'phone': '123-2343-44'},
        {'id':'6', 'name': 'Denny G', 'email':'denny@gmail.com', 'phone': '123-2343-44'},
        {'id':'7', 'name': 'Bala K', 'email':'balak@gmail.com', 'phone': '123-2343-44'},
        {'id':'8', 'name': 'Sarath T', 'email':'saratht@gmail.com', 'phone': '123-2343-44'}
    ];
    $scope.newcontact = [{}];
    $scope.addContact = function() {
        $scope.contacts.push({id:$scope.newcontactid, name: $scope.newcontactname, email: $scope.newcontactemail, phone:$scope.newcontactphone });       
        $scope.newcontactid="";
        $scope.newcontactname="";
        $scope.newcontactemail="";
        $scope.newcontactphone="";
        $scope.addShow = false;
    };
    $scope.addApper = function(){
        $scope.addShow = true;
    };
    
    $scope.saveContact = function() {
        
             for(i in $scope.contacts) {
                    if($scope.contacts[i].id === $scope.newcontact.id) {
                        $scope.contacts[i] = $scope.newcontact;
                    }
             }                
        $scope.saveShow = false;
    };
    
 $scope.delete = function(id) {
        
        for(i in $scope.contacts) {
            if($scope.contacts[i].id === id) {
                $scope.contacts.splice(i,1);
                $scope.newcontact = {};
            }
        }
        
    };
    
    
    $scope.edit = function(id) {
        for(i in $scope.contacts) {
            if($scope.contacts[i].id === id) {
                $scope.newcontact = angular.copy($scope.contacts[i]);
            }
        }
        $scope.saveShow = true;
    };
});
