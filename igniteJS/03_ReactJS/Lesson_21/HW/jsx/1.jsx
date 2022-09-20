var React = require('react');
var ReactDOM = require('react-dom');



var Counter = React.createClass({

    getInitialState: function() {
        return {
            count: 3
        };
    },

    plusHandler: function() {
        this.setState({count: this.state.count + 1});
    },

    minusHandler: function() {
        if (this.state.count == 0) return;

        this.setState({count: this.state.count - 1});
    },

    render: function () {
        return (
            <div>
                <h3>Счет: {this.state.count}</h3>

                <button className="btn btn-default" onClick={this.minusHandler}>-</button>
                <button className="btn btn-success" onClick={this.plusHandler}>+</button>
            </div>
        );
    }
});



var container = document.getElementById('task');

ReactDOM.render(<Counter />, container); 