var React = require('react');
var ReactDOM = require('react-dom');



var ShowResult = React.createClass({

    getInitialState: function() {
        return {
            timeValue: 0,
            enabled: true
        };
    },

    tick: function() {
        this.setState({timeValue: this.state.timeValue + 1});
    },

    componentDidMount: function() {
        this.timer = setInterval(this.tick, 1000);
    },

    startHandler: function() {
        if (this.state.enabled) return;

        this.timer = setInterval(this.tick, 1000);
        this.setState({enabled: true});
    },

    stopHandler: function() {
        clearInterval(this.timer);
        this.setState({enabled: false});
    },

    resetHandler: function() {
        clearInterval(this.timer);
        this.setState({enabled: false});
        this.setState({timeValue: 0});
    },

    render: function () {
        return (
            <div>
                <h3>С момента открытия прошло {this.state.timeValue} с</h3>

                <button className="btn btn-success" onClick={this.startHandler}>Start</button>
                <button className="btn btn-danger" onClick={this.stopHandler}>Stop</button>
                <button className="btn btn-default" onClick={this.resetHandler}>Reset</button>
            </div>
        );
    }
});



var container = document.getElementById('task');

ReactDOM.render(<ShowResult />, container); 