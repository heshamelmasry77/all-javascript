var React = require('react');
var ReactDOM = require('react-dom');


class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showProps: false}; 
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState({showProps: true});    
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler} className="btn btn-default">Show properties</button>

                {this.state.showProps ?
                    <ul>
                        {Object.keys(this.props).map(key =>
                           <li key={key}><span>{key}</span>: <span>{this.props[key]}</span></li>
                        )}
                    </ul>
                : ''}
            </div>
        );
    }
}



var container = document.getElementById('task');

ReactDOM.render(<Button name="Button" prop1="Property 1" prop2="Property 2" />, container); 