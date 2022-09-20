var React = require('react');
var ReactDOM = require('react-dom');


var Parent = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                <div>{this.props.children}</div>
            </div>
        )
    }
});
 
var Child = React.createClass({
    render: function() {
        return (
            <h3>Fugiat cum atque corporis dignissimos animi, temporibus deserunt ipsum optio nesciunt.</h3>
        )
    }
});



var container = document.getElementById('task');

ReactDOM.render(<Parent><Child /></Parent>, container); 