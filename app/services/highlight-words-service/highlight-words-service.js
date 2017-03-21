angular.module('myApp').service('HighlightWordService', function () {
    class HighlightWord {
        constructor() {
            this._highlightedWords = [];
        }

        toggleHighlightWord(word) {
            if (!this.isHighlighted(word)) {
                this._highlightedWords.push(word);
            }
            else {
               const indexOfWord = this._highlightedWords.indexOf(word);
               this._highlightedWords.splice(indexOfWord, 1);
            }

        }

        isHighlighted(word) {
            return this._highlightedWords.includes(word);
        }
    }

    return new HighlightWord();
});