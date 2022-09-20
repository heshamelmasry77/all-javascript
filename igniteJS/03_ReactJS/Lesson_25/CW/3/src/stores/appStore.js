import { EventEmitter } from 'events' 
import dispatcher from '../dispatcher'

// flux Stores / Хранилища — контейнеры для состояния приложения и логики в обработчиках, зарегистрированных в Диспетчере

class AppStore extends EventEmitter {
    constructor() {
        super() 

        this.num1 = '';
        this.num2 = ''
        this.result = '';
    }

    sum() {
        this.result = +this.num1 + +this.num2;
        return this.result;
    }

    substact() {
        this.result = +this.num1 - +this.num2;
        return this.result;
    }

    multyply() {
        this.result = +this.num1 * +this.num2;
        return this.result;
    }

    devide() {
        if (+this.num2 !== 0) {
            this.result = (+this.num1 / +this.num2).toFixed(3);
        } else {
            this.result = "деление на 0";
        }

        return this.result;
    }

    setValue(value, destNum) {
        var previousValue = this[destNum];
        var currentValue = value;
        var testVal = /^[0-9]*$/;

        if (currentValue.search(testVal) == -1) {
            value = previousValue;
            return;
        }

        this[destNum] = value;
    }

    getInputValue(destNum) {
        return this[destNum];
    }


    // обработчик actions 
    handleActions(action) {
        switch (action.type) {
            case "SUM": {
                this.emit('sumEmitter');
                break; 
            }

            case "SUBSTRACT": {
                this.emit('substactEmitter');
                break; 
            }

            case "MULTIPLY": {
                this.emit('multyplyEmitter');
                break; 
            }

            case "DIVIDE": {
                this.emit('devideEmitter');
                break; 
            }

            case "VALUE": {
                this.setValue(action.value, action.destNum);    
                this.emit('valueEmitter');
                break; 
            }
        }
    } 
} 

const appStore = new AppStore; 
// привязка handleActions к классу appStore позволяет ссылаться на него с помощью this  
dispatcher.register(appStore.handleActions.bind(appStore)); 

module.exports = appStore; 