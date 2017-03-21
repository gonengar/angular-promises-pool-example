angular.module('myApp').directive('wordsCounter', function (WordsCounterService, HighlightWordService) {
    return {
        restrict: 'E',
        templateUrl: 'components/words-counter/words-counter.html',
        link: function (scope) {
            scope.wordsCounter = WordsCounterService.getWordsCount();
            scope.toggleHighlightWord = (word) => {
                HighlightWordService.toggleHighlightWord(word);
            };
            scope.isHighlighted = (word) => HighlightWordService.isHighlighted(word);
        }
    }
});