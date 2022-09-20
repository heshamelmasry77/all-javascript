var React = require('react');
var ReactDOM = require('react-dom');


var ResultList = React.createClass({
            
    getDefaultProps: function() {
        return {
            users: [
                {name:"Anne Montgomery",gender:"Female"},
                {name:"Annie George",gender:"Female"},
                {name:"Gary Butler",gender:"Male"},
                {name:"Lisa Mendoza",gender:"Female"},
                {name:"Marilyn Henry",gender:"Female"},
                {name:"Johnny Tucker",gender:"Male"},
                {name:"Chris Jacobs",gender:"Male"},
                {name:"Benjamin James",gender:"Male"}]
        };
    },

    getInitialState: function() {
        return {
            inputVal: +'8',
            checked: false
        };
    },  

    handleInputValChange: function(e) {
        var value = +e.target.value;

        if (value >= 1 && !isNaN(value)) {
            this.setState({inputVal: value});
        } else {
            this.setState({inputVal: this.props.users.length});
        }
    },

    handler: function () {
        this.setState({checked: !this.state.checked});
    },

    render: function() {
        return (
            <div>
                <div className="form-group">
                    <input type="text" name='numbers' onChange={this.handleInputValChange} className="input-lg form-control" placeholder="Введите количество элементов" />
                </div>

                <label><input type="checkbox" onChange={this.handler} /> Вид "Таблица"</label>

                <ResultItem users={this.props.users} value={this.state.inputVal} checked={this.state.checked} />
            </div>
        );
    }
});

var ResultItem = React.createClass({

    getInitialState: function() {
        return {
            color: '#000'       
        };
    },  

    componentWillReceiveProps: function() {

        function getRandomColor() {
            var h = Math.floor(Math.random() * (255 - 1) + 1); 
            var s = Math.floor(Math.random() * (100 - 1) + 1) + '%'; 
            var l = '50%'; 
            var randomColor = 'hsl(' + h + ',' + s + ',' + l + ')';
            return randomColor;
        };

        this.setState({color: getRandomColor()});
    }, 

    render: function() {

        var tempArr =  this.props.users.slice(0, this.props.value);

        return (
            <div>
                {this.props.checked ?
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody style={{"color": this.state.color}}>
                            {tempArr.map(function(user, item) {
                                return <tr key={item}><td>{user.name}</td><td>{user.gender}</td></tr>;
                            })}
                        </tbody>
                    </table>
                :   <ul style={{"color": this.state.color}}>
                        {tempArr.map(function(user, item) {
                            return <li key={item}><span>{user.name}</span> <span>{user.gender};</span></li>;
                        })}
                    </ul>
                }
            </div>
        );
    }
});



var container = document.getElementById('task'); 

ReactDOM.render(<ResultList><ResultItem /></ResultList>, container); 
