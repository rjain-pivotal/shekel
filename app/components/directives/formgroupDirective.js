shekelApp.directive('shklFormGroup', function () {
    return {
        scope: {
            label: '@label',
            value: '@value',
            type: '@type',
            id: "@",
            ngModel: '='
        },
        restrict: 'E',
        templateUrl: '/app/components/directives/formgroup.html'
    };
});

shekelApp.directive('shklNumInputFormGroup', function () {
    return {
        scope: {
            label: '@label',
            value: '@value',
            ngModel: '=',
            //id: "@generated_value" TODO Need to come up with a way to generate ID's so we don't break screen readers
        },
        restrict: 'E',
        templateUrl: '/app/components/directives/num-input-form-group.html'
    };
});

shekelApp.directive('shklInputFormGroup1', function () {
    return {
        scope: {
            label: '@label',
            ngModel: '=',
            width: '=',
            type: '@',
            id: '@'
            //id: "@generated_value" TODO Need to come up with a way to generate ID's so we don't break screen readers
        },
        restrict: 'E',
        templateUrl: '/app/components/directives/input-form-group-1.html'
    };
});

shekelApp.directive('shklMonthlyCostingInput', function () {
    return {
        scope: {
            label: '@label',
            inputModel: '=',
            selectModel: '='
        },
        restrict: 'E',
        templateUrl: '/app/components/directives/monthly-costing-input.html'
    };
});