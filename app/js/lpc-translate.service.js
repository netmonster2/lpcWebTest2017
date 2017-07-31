angular.module('LpcWebTest2017')
    .service('LpcTranslateService',['$http','$rootScope',function($http,$rootScope){
        var propUrl;
            setPropertiesUrlImpl = function(url){
                propUrl = url;
            };
            loadPropertiesImpl = function(){
               if(!$rootScope.propData && propUrl){
                   $http.get(propUrl)
                       .then(function (data, status, headers, config) {
                           // This function handles success
                           $rootScope.propData = data.data;
                       }, function (data, status, header, config)  {
                           console.error('Erreur lors du chargement des traductions');
                       });
               }
            };
        return {
            setPropertiesUrl : setPropertiesUrlImpl,
            loadProperties : loadPropertiesImpl
        }
    }]);