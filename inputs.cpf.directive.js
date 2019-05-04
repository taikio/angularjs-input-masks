(function(){
    'use strict';

    angular
    .module('myApp')
    .directive('inputsCpf', inputsCpf);

    function inputsCpf() {
        var directive = {
            restrict: 'EA',
            require: 'ngModel',
            link: function(scope, element, attrs, ngModel) {

              var formatViewValue = function(value) {
                if (typeof(value) == typeof(undefined))
                  return value;

                var parsedValue = value.toString()
                  .replace(/[a-zA-Z,;/]/g, '');
      
                  if (parsedValue.length === 3 || parsedValue.length === 7){
                    parsedValue += '.';
                  }                    
      
                  if (parsedValue.length === 11)
                    parsedValue += '-';
      
                  if (parsedValue.length > 14)
                    parsedValue = parsedValue.substring(0, 14);  
                  
                return parsedValue;
              }
      
              var formatModelValue = function(value) {
                if (typeof(value) == typeof(undefined))
                  return value;
                var parsedValue = value.toString().replace(/[.-]/g, '');
      
                return parsedValue;
              }
      
              var parseViewValue = function(value) {
                var viewValue = formatViewValue(value);
                ngModel.$viewValue = viewValue;
                ngModel.$render();
      
                // Return what we want the model value to be
                return formatModelValue(viewValue);
              }
      
              var parseModelValue = function(value) {
                var modelValue = formatModelValue(value);
                ngModel.$modelValue = modelValue;
                return formatViewValue(modelValue);
              }
      
              ngModel.$parsers.push(parseViewValue);
              ngModel.$formatters.push(parseModelValue);
            }
          };
          return directive;
    }
})();