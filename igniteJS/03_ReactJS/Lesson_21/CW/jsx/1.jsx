var React = require('react');
var ReactDOM = require('react-dom');


var Div = React.createClass({

    getInitialState: function() {
        return {
            styleClass: 'black'  
        };
    },

    clickHandler: function(e) {
        this.setState({styleClass: (this.state.styleClass == 'black') ? 'red' : 'black' });
    },

    render: function() {
        return (
            <div className="parent">
                <div className={this.state.styleClass}></div>
                <button className="btn btn-primary" onClick={this.clickHandler}>Change class</button>
            </div>
        );
    }
});



var container = document.getElementById('task');

ReactDOM.render(<Div />, container); 