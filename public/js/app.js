/**
 * Created by James on 8/08/2014.
 */
var app = angular.module('tut',[]);

app.controller('IndexCtrl', function($scope){

    // Set default section in TOC
    $scope.section = 'Basics';

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

             // split the content of the PRE element into an array of lines
             var lines = innerText.split( '\n' );

             // the last line is expected to be an empty line - remove it
             if ( lines.length > 1 && lines[ lines.length - 1 ].trim() === '' ) {
                 lines.pop();
             }

             // how much white-space do we need to remove form each line?
             var offset = lines[ 0 ].match( /^\s*/ )[ 0 ].length;

             // remove the exess white-space from the beginning of each line
             lines = lines.map( function ( line ) {
                 return line.slice( offset );
             });

             // set this new content for the code-block element
             element.text( lines.join( '\n' ) );

             // Now highlight the code
             element.each(function(i, block) {
                 hljs.highlightBlock(block);
             });
         }
     };
 });