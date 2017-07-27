angular.module('LpcWebTest2017')
    .service('LpcTranslateService',['$http','$rootScope',function($http,$rootScope){
        var
            //TODO
            setPropertiesUrlImpl = function(url){
                //TODO
            },
            loadPropertiesImpl = function(){
                //TODO
            }

        return {
            setPropertiesUrl : setPropertiesUrlImpl,
            loadProperties : loadPropertiesImpl
        }
    }]);