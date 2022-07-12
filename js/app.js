var app = angular.module('plunker', ['ngTagsInput']);

app.controller('MainCtrl', function($scope, $http) {
    $scope.movies = [
        'SEO',
        'Продвижение',
        'Аналитика',
    ];

    $scope.loadMovies = function(query) {
        return $http.get('movies.json');
    };
});
