import dispatcher from '../dispatcher' 

// flux Actions / Действия — хелперы, упрощающие передачу данных Диспетчеру 

function sum() {
    dispatcher.dispatch({ type: 'SUM'})
}

function substract() {
    dispatcher.dispatch({ type: 'SUBSTRACT'})
}

function multiply() {
    dispatcher.dispatch({ type: 'MULTIPLY'})
}

function divide() {
    dispatcher.dispatch({ type: 'DIVIDE'})
}

function setValue(value, destNum) {
    dispatcher.dispatch({ type: 'VALUE', value, destNum})
}


export {sum, substract, multiply, divide, setValue}