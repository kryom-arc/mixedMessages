let theme = 'Bathroom Divination';
console.log(`Theme: ${theme}.`);

let line = 'You like to pee with the door open';

let message = {
    _person: ['Someone', 'You'],
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
}