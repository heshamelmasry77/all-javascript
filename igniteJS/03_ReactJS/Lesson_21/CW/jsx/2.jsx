var React = require('react');
var ReactDOM = require('react-dom');



var ShowResult = React.createClass({

    getInitialState: function() {
        return {
            timeValue: 0  
        };
    },

    tick: function() {
        this.setState({timeValue: this.state.timeValue + 1});
    },

    componentDidMount: function() {
        this.timer = setInterval(this.tick, 1000);
    },

    render: function () {
        return (
            <h3>С момента открытия прошло {this.state.timeValue} с</h3>
        );
    }
});



var container = document.getElementById('task');

ReactDOM.render(<ShowResult />, container); 