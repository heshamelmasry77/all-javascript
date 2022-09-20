var React = require('react');
var ReactDOM = require('react-dom');


var Form = React.createClass({
    render: function() {
        //использование выражения в качестве атрибута 
        return (
        	<div className='panel well'>
        		<form>
		            <Form.Input1 />
		            <Form.Input2 />
		            <Form.Submit />
		        </form>
	        </div>
        );
    }
}); 

Form.Input1 = React.createClass({
    render() {
        return (
        	<div className="form-group">
            	<input type="text" name='username' className="input-lg form-control" placeholder="Имя пользователя" />
            </div>
        );
    }
}); 

Form.Input2 = React.createClass({
    render() {
        return (
        	<div className="form-group">
        		<input type="email" name='mail' className="input-lg form-control" placeholder="E-mail" />
        	</div>
        );
    }
});

Form.Submit = React.createClass({
    render() {
        return (
        	<input type="submit" className="btn btn-primary btn-lg" value="Submit" />
        );
    }
});



var container = document.getElementById('task');

ReactDOM.render(<Form />, container); 