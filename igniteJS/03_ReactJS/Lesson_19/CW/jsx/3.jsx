var React = require('react');
var ReactDOM = require('react-dom');

var Sum = React.createClass({

	propTypes: {
        num1: React.PropTypes.number, 
        num2: React.PropTypes.number
    }, 
            
    render: function() {
        return (<h1>Сумма чисел {this.props.num1} и {this.props.num2} равна {this.props.num1 + this.props.num2} </h1>);
    }
});

var container = document.getElementById('task');

ReactDOM.render(<Sum num1={23} num2={38} />, container); 