var React = require('react');
var ReactDOM = require('react-dom');


var Component = React.createClass({
    getInitialState: function () {
        return {
            checked: false
        }
    },
    handler: function () {
        this.setState({checked: !this.state.checked});
    },
    render: function () {
        var style = '';
        
        if (this.state.checked) {
            styleClass = "bg-primary";
        } else {
            styleClass = "bg-success";
        }

        return (
            <div>
                <p className={styleClass}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae autem ipsam saepe 
                	praesentium porro ea officiis commodi odio neque molestias!</p>

                <label><input type="checkbox" onChange={this.handler} /> Change class</label>
            </div>
        );
    }
});



var container = document.getElementById('task');

ReactDOM.render(<Component />, container); 