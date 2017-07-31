'use strict';

angular.module('LpcWebTest2017')
    .filter('lpcTranslate',['LpcTranslateService','$rootScope',function(LpcTranslateService,$rootScope){
        LpcTranslateService.loadProperties();
        var filter = function(key,locale){
            return $rootScope.propData ? $rootScope.propData[locale][key] : '';
        };
        filter.$stateful = true;
        return filter;
    }]);