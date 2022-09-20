var React = require('react');
var ReactDOM = require('react-dom');


var Text = React.createClass({
    render: function() {
        //использование выражения в качестве атрибута 
        return (
        	<div className='panel well'>
            	<p style={{ "color": this.props.color, fontSize: this.props.fontSize + 'px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet adipisci, magnam perferendis, nostrum expedita quia hic eveniet itaque! Eum reprehenderit incidunt, culpa vitae iusto aperiam suscipit fugiat et veritatis excepturi.
                </p>
	        </div>
        );
    }
}); 



var container = document.getElementById('task');

ReactDOM.render(<Text color="green" fontSize='20' />, container); 