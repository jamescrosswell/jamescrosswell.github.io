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
             var innerText = element.text();
             // If the first character is a new line then remove this
             innerText = innerText.replace(/^(\n)/g, '');
             // Now get the highlighted code
             Rainbow.color(innerText, scope.lang, function(highlighted_code) {
                 element.html('<pre><code>' + highlighted_code + '</code></pre>');
             });
         }
     };
 });