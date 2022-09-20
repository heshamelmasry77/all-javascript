var React = require('react');
var ReactDOM = require('react-dom');


var Calculator = React.createClass({

    getInitialState: function() {
        return {
            num1: '',
            num2: '',
            result: ''
        };
    },

    num1Handler: function (e) {
        var previousValue = this.state.num1;
        var currentValue = e.target.value;
        var testVal = /^[0-9]*$/;

        if (currentValue.search(testVal) == -1) {
        	e.target.value = previousValue;
        	return;
        } 

        this.setState({num1: e.target.value});
    },

    num2Handler: function (e) {
        var previousValue = this.state.num2;
        var currentValue = e.target.value;
        var testVal = /^[0-9]*$/;

        if (currentValue.search(testVal) == -1) {
        	e.target.value = previousValue;
        	return;
        }

        this.setState({num2: e.target.value});
    },

    sumHandler: function () {
        this.setState({result: +this.state.num1 + +this.state.num2});
    },

    substractHandler: function () {
        this.setState({result: +this.state.num1 - +this.state.num2});
    },

    multiplyHandler: function () {
        this.setState({result: +this.state.num1 * +this.state.num2});
    },

    divideHandler: function () {
        if (+this.state.num2 !== 0) {
            this.setState({result: (+this.state.num1 / +this.state.num2).toFixed(3)});
        } else {
            this.setState({result: "деление на 0"});
        }
    },

    render: function () {
        return (
            <div>
                <h2>Калькулятор</h2> 

                <div>
                    <input type="text" className="text-right" onChange={this.num1Handler} />
                    <input type="text" className="text-right" onChange={this.num2Handler} /><br/><br/>

                    <input type="button" value="+" className="btn btn-default" onClick={this.sumHandler} /> 
                    <input type="button" value="-" className="btn btn-default" onClick={this.substractHandler} />
                    <input type="button" value="*" className="btn btn-default" onClick={this.multiplyHandler} /> 
                    <input type="button" value="/" className="btn btn-default" onClick={this.divideHandler} /> <br/><br/>

                    <h4>Результат: {this.state.result}</h4><br/>
                </div>
            </div>
        );
    }
});



var container = document.getElementById('task');

ReactDOM.render(<Calculator />, container); 