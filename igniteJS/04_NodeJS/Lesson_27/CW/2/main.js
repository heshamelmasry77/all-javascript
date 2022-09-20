'use strict'

// импорт модуля events module
var events = require('events');

// создание объекта eventEmitter
var eventEmitter = new events.EventEmitter();


// listener
var listener = function () {
    console.log('Listener executed.');
}

// Привязка функции listener к событию connection
eventEmitter.addListener('connection', listener);

// Запуск события connection 
eventEmitter.emit('connection');

// Удаление привязки функции к событию
eventEmitter.removeListener('connection', listener);
console.log("Listener will not listen now.");