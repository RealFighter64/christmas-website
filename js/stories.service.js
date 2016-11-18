app.service('StoriesService', function ($http) {
    var observerCallback;

    //register an observer
    this.registerObserverCallback = function (callback) {
        observerCallback = callback;
        notifyObservers(getStories());
    };

    this.requestUpdate = function () {
        notifyObservers(getStories());
    }

    var notifyObservers = function (value) {
            observerCallback(value);
            console.log('NOTIFYING OBSERVERS; VALUE = '+ value);
    };

    var setStories = function (value) {
        this.stories = value;
    }

    var getStories = function () {
        return this.stories;
    }

    $http.get('stories.json')
        .then(function (response) {
            setStories(response.data.stories);
            notifyObservers(getStories());
        }, function (error) {})
})