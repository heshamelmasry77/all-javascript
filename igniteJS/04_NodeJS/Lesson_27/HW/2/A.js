'use strict'

function Counter(count) {
    this.count = count;
}

// экспорт экземпляра функции-конструктора 
module.exports = function (x) {
        return new Counter(x);
};