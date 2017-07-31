'use strict';

angular.module('LpcWebTest2017')
    .controller('PotsController',['$scope','$window','PotsService',function($scope,$window,PotsService){
        var storedLocale = $window.localStorage.getItem('locale');

        //Français comme language par défaut
        $scope.locale = storedLocale ? storedLocale : 'fr' ;

        $scope.changeLocale = function(lang){
            $scope.locale = lang;
            $window.localStorage.setItem('locale', lang);
        };

        PotsService.get().then(function (data, status, headers, config) {
            $scope.pots = data.data;
        }, function (data, status, header, config)  {
            console.error('Erreur lors du chargement des pots');
        });
    }]);