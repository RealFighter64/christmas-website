app.controller('HomeController', function ($scope, StoriesService, $rootScope) {
    var updateStories = function (value) {
        if (value) {
            $scope.stories = value;
        }
    };

    StoriesService.registerObserverCallback(updateStories);
    StoriesService.requestUpdate();

    $rootScope.$on('$routeChangeSuccess', function() { StoriesService.requestUpdate(); console.log('route changed') })
})