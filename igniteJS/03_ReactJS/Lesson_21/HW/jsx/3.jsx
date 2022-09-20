var React = require('react');
var ReactDOM = require('react-dom');


var Form = React.createClass({

    getInitialState: function() {
        return {
            formValid: false,
            nameValid: false,
            mailValid: false,
            phoneValid: true,
            messageValid: false
        };
    },

    errorMessage: {
        name: 'Allowed english alphabet characters only',
        mail: 'Allowed english alphabet characters, digits, symbols _ and @',
        phone: 'Phone format: +xxxxxxxxxx',
        message: 'Message must be at least 10 characters'
    },

    regExp: {
        name: /^[a-zA-Z_]{3,20}$/,
        mail:  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]+$/,
        phone: /^\+?[0-9]{12}$/,
        message: /^.{10,100}$/
    },

    inputHandler: function (e) {
        var testVal = this.regExp[e.target.dataset.pattern];
        var currentValue = e.target.value;
        var classes = e.target.classList;

        if (currentValue.search(testVal) == -1) {
            classes.remove('valid');
            classes.add('invalid');
            this.setState({[e.target.dataset.pattern + 'Valid']: false});
        } else {
            classes.remove('invalid');
            classes.add('valid');
            this.setState({[e.target.dataset.pattern + 'Valid']: true});
        }

        setTimeout(this.formChecker, 0);
    },

    formChecker: function () {
        if (this.state.nameValid && this.state.mailValid && this.state.phoneValid && this.state.messageValid) {
            this.setState({formValid: true});
        } else {
            this.setState({formValid: false});
        }
    },

    submitHandler: function (e) {
        alert('Form submited');
    },

    render: function () {
        return (
            <form name="form" action="#" onSubmit={this.submitHandler}>
                <Input type="text" placeholder="Имя" label="Name*" handler={this.inputHandler} pattern="name" valid={this.state.nameValid} errorMessage={this.errorMessage.name} required  />
                
                <Input type="email" placeholder="E-mail" label="E-mail*" handler={this.inputHandler} pattern="mail" valid={this.state.mailValid} errorMessage={this.errorMessage.mail} required />
                
                <Input type="tel" placeholder="Телефон" label="Phone number" handler={this.inputHandler} pattern="phone" valid={this.state.phoneValid} errorMessage={this.errorMessage.phone} />

                <Message placeholder="Сообщение" label="Message*" handler={this.inputHandler} pattern="message" valid={this.state.messageValid} errorMessage={this.errorMessage.message} required />

                <p>* - <b>required fields</b></p>

                <input type="submit" className="btn btn-primary btn-lg" value="Submit" disabled={!this.state.formValid} />
            </form>
        );
    }
});

var Input = React.createClass({
    render: function () {
        return (
            <div className="form-group">
                <label>{this.props.label}</label>
                <input type={this.props.type} placeholder={this.props.placeholder} onInput={this.props.handler} name={this.props.pattern} data-pattern={this.props.pattern} required={this.props.required} className="input-lg form-control" />

                {!this.props.valid ? <span className="warning-text">{this.props.errorMessage}</span> : ''}
            </div>
        );
    }
});

var Message = React.createClass({
    render: function () {
        return (
            <div className="form-group">
                <label>{this.props.label}</label>
                <textarea placeholder={this.props.placeholder} onInput={this.props.handler} name={this.props.pattern} data-pattern={this.props.pattern} required={this.props.required} className="input-lg form-control"></textarea>

                {!this.props.valid ? <span className="warning-text">{this.props.errorMessage}</span> : ''}
            </div>
        );
    }
});



var container = document.getElementById('task');

ReactDOM.render(<Form />, container); 