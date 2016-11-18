app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
        templateUrl: 'partials/home.html',
        controller: "HomeController"
    })
        .when('/story/:story', {
        templateUrl: 'partials/story.html',
        controller: "StoryController"
    })
        .otherwise('/home')
})