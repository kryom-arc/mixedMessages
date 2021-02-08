let theme = 'Bathroom Divination';
console.log(`Theme: ${theme}.`);

let length = 1;
let messageParts = {
    _person: ['Someone you know', 'You'],
    get person(){
        return this._person;
    },
    _firstVerb: ['like', 'tend', 'hate'],
    get firstVerb(){
        return this._firstVerb;
    },
    _connection: ['to'],
    get connection(){
        return this._connection;
    },
    _secondVerb: ['pee', 'shit', 'shower'],
    get secondVerb(){
        return this._secondVerb;
    },
    _peculiarity: ['with the door open', 'with people watching', 'in the dark', 'naked'],
    get peculiarity(){
        return this._peculiarity;
    },
    randomNumber(array) {
        let len = array.length;
        return Math.floor(Math.random() * len);
    }
}
