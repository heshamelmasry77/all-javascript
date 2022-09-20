var React = require('react'); 

var appStore = require('../Stores/appStore'); 
var appActions = require('../Actions/appActions'); 

// flux Controller Views / Представления — React-компоненты, которые собирают состояние хранилищ и передают его дочерним компонентам через свойства

class App extends React.Component{
    constructor() {
        super() 
        
        this.state = {
            num1: '',
            num2: '',
            result: ''
        }

        this.inputHandler = this.inputHandler.bind(this)
        this.sumHandler = this.sumHandler.bind(this)
        this.substractHandler = this.substractHandler.bind(this)
        this.multiplyHandler = this.multiplyHandler.bind(this)
        this.divideHandler = this.divideHandler.bind(this)
    } 

    componentWillMount() {
        // создание обработчика flux actions / Действий
        appStore.on('sumEmitter', () => {
            this.setState({ result: appStore.sum()});
        })

        appStore.on('substactEmitter', () => {
            this.setState({ result: appStore.substact() });
        })

        appStore.on('multyplyEmitter', () => {
            this.setState({ result: appStore.multyply() });
        })

        appStore.on('devideEmitter', () => {
            this.setState({ result: appStore.devide() });
        })

        appStore.on('valueEmitter', () => {
           
        })
    }


    inputHandler(e, destNum) {
        appActions.setValue(e.target.value, destNum);
        e.target.value = appStore.getInputValue(destNum);
    }

    sumHandler() {
        appActions.sum();
    }

    substractHandler() {
        appActions.substract();
    }

    multiplyHandler() {
        appActions.multiply();
    }

    divideHandler() {
        appActions.divide();
    }


    render() {
        return (
            <div className="panel well">
                <h2>Калькулятор</h2>

                <div>
                    <input type="text" className="text-right" onChange={(event) => this.inputHandler(event, 'num1')} />
                    <input type="text" className="text-right" onChange={(event) => this.inputHandler(event, 'num2')} /><br /><br />

                    <input type="button" value="+" className="btn btn-default" onClick={this.sumHandler} />
                    <input type="button" value="-" className="btn btn-default" onClick={this.substractHandler} />
                    <input type="button" value="*" className="btn btn-default" onClick={this.multiplyHandler} />
                    <input type="button" value="/" className="btn btn-default" onClick={this.divideHandler} /> <br /><br />

                    <h4>Результат: {this.state.result}</h4><br />
                </div>
            </div>
    )}
}

module.exports = App; 