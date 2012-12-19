var myModule = angular.module('myModule', []);

myModule.directive('animateDown', function(){
    var linker = function(scope,element,attrs) {
        var down = function() {
            $(this).animate({
                top: '+=150'
            })
        }

        element.on('click', down);
    };

    return {
        restrict:'A',
        link: linker
    }
})

myModule.directive('animateRight', function(){
    var linker = function(scope,element,attrs) {
        var right = function() {
            $(this).animate({
                left: '+=150'
            })
        }

        element.on('click', right);
    };

    return {
        restrict:'A',
        link: linker
    }
})

myModule.directive('animateRightClass', function(){
    var linker = function(scope,element,attrs) {
        var right = function() {
            $(this).animate({
                left: '+=150'
            })
        }

        element.on('click', right);
    };

    return {
        restrict:'C',
        link: linker
    }
})

myModule.directive('animate', function(){
    var linker = function(scope,element,attrs) {
        scope.up = function() {
            $(this).animate({
                top: '-=150'
            })
        }

        scope.down = function() {
            $(this).animate({
                top: '+=150'
            })
        }

        scope.left = function() {
            $(this).animate({
                left: '-=150'
            })
        }

        scope.right = function() {
            $(this).animate({
                left: '+=150'
            })
        }

        var direction = attrs['animate'];

        element.on('click', scope[direction]);
    };

    return {
        restrict:'A',
        link: linker
    }
})