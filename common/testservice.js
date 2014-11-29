(function () {
    'use strict';

    angular
        .module('app')
        .factory('testservice', testservice);

    testservice.$inject = [''];

    /* @ngInject */
    function testservice() {
        var service = {
            getdata: getdata
        };

        return service;

        ////////////////

        function getdata() {
        }
    }
})();