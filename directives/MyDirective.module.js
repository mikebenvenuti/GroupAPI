(function () {
    'use strict';

    angular
        .module('MyDirective', [])
        .directive('myDirective', function() {
        return {
            restrict: 'A',
            link: function(scope,element){
                element.on("mouseup",function(event){
                    event.preventDefault();
                }).on("focus",function(){
                    this.select();
                });
            }}});
})();