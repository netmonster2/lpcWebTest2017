'use strict';

angular.module('LpcWebTest2017')
    .run(['LpcTranslateService','RESOURCES',function(LpcTranslateService,RESOURCES){
        //TODO
        LpcTranslateService.setPropertiesUrl(RESOURCES.PROPERTIES_URL);
    }]);