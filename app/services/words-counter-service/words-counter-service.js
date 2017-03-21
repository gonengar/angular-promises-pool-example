angular.module('myApp').service('WordsCounterService', function (ItemsCollection) {
    class WordsCounter {

        constructor() {
            this._items = ItemsCollection.getCollection();
            this._wordsCount = [];
            this._calculateWordsCount();
            ItemsCollection.onUpdate((newItems)=>{
                this._items = newItems;
                this._calculateWordsCount()
            })
        }

        _calculateWordsCount(){
            let newWordsCount = new Map();
            this._wordsCount.splice(0, this._wordsCount.length);
            this._items.forEach((item)=>{
                const itemName = item.name;
                const arrayWords = itemName.split(' ');
                arrayWords.forEach((word)=>{
                    let wordCounter = newWordsCount.get(word);
                    angular.isDefined(wordCounter) ? newWordsCount.set(word, wordCounter+1) : newWordsCount.set(word, 1);
                })
            });

            this._wordsCount.push(...Array.from(newWordsCount));
        }

        getWordsCount(){
            return this._wordsCount;
        }
    }

    return new WordsCounter();
});