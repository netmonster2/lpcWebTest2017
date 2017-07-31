'use strict';

angular.module('LpcWebTest2017')
    .service('PotsService',['$http','RESOURCES',function($http,RESOURCES){
        var getImpl = function(){
            return $http.get(RESOURCES.GET_POTS_URL);
        };

        var getImgDataImpl = function(url){
            return $http({
                method: 'GET',
                url: url,
                responseType: 'arraybuffer'
            });
        };

        return {
            get : getImpl,
            getImgData : getImgDataImpl
        }
    }]);