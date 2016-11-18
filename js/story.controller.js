app.controller("StoryController", function ($scope, $routeParams, StoriesService, $sanitize) {

    var updateStories = function (value) {
        if (value) {
            $scope.stories = value;
            $scope.story = $scope.stories[$routeParams.story]
            $scope.story.body = $sanitize($scope.story.body);
            console.log($scope.story);
        }
    }

    StoriesService.registerObserverCallback(updateStories);
    StoriesService.requestUpdate();

    console.log($scope.story);
})