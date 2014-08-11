/**
 * Created by James on 8/08/2014.
 */
var app = angular.module('tut',[]);

app.controller('IndexCtrl', function($scope){
});

app.directive('codeBlock', function(){
     return {
         restrict: 'E',
         scope: {
             lang: '@'
         },
         transclude:true,
         template: '<div ng-transclude></div>',
         link:function(scope, element){
             // If the first character is a new line then remove this
             var innerText = element.text();
             innerText = innerText.replace(/^(\n)/g, '');
             element.text(innerText);

             // Now highlight the code
             element.each(function(i, block) {
                 hljs.highlightBlock(block);
             });
         }
     };
 });