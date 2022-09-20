var React = require('react');
var ReactDOM = require('react-dom');


var ShowResult = React.createClass({
    getDefaultProps: function () {
        return {
            num1: 7,
            num2: 4,
            mode : true
        };
    },
    render: function () {
        if (this.props.mode) {
            return (
                <h1>{this.props.num1 + this.props.num2}</h1>
            );
        } else {
            return (
                <h1>{this.props.num1.toString() + this.props.num2.toString()}</h1>
            );
        }
    }
});



var container = document.getElementById('task');

ReactDOM.render(<ShowResult mode={true} />, container); 