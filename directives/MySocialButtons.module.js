(function () {
    'use strict';

    angular
        .module('MySocialButtons', [])
        .directive('mySocialButtons', loadButtons);


    function loadButtons() {
        return {
            restrict: 'E',
            template:
                '<div>' +
                '<a href="no"> <i class="fa fa-facebook"></i></a>  ' +
                '<a href="no"> <i class="fa fa-twitter"></i></a>  ' +
                '<a href="no"> <i class="fa fa-google-plus"></i></a>  ' +
                '</div>'
        }
    }
})();