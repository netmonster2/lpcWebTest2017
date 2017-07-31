'use strict';

angular.module('LpcWebTest2017')
    .directive('lpcLazyBackground', ['PotsService',function (PotsService) {

        function donneesVersBase64(data) {
            var binary = '';
            var bytes = new Uint8Array(data);
            var len = bytes.byteLength;
            for (var i = 0; i < len; i++) {
                binary += String.fromCharCode(bytes[i]);
            }
            return window.btoa(binary);
        }

        var lpcLazyBackgroundLink = function (scope, elem, attr) {
            elem.attr('class', attr.class + ' ' + attr.loadingClass);

            PotsService.getImgData(scope.lpcLazyBackground)
                .then(function (data, status, headers, config) {
                    var imageData = 'data:image/png;base64,' + donneesVersBase64(data.data);
                    var cssObj = {
                        background: 'url("'+imageData+'") no-repeat center center'
                    };
                    cssObj["background-size"] = "cover";
                    elem.css(cssObj);
                }, function (data, status, header, config) {
                    console.error('Erreur lors du chargement de l image');
                });
        };
        return {
            restrict: 'A', scope: {lpcLazyBackground: '='}, link: lpcLazyBackgroundLink
        }

    }]);
