var React = require('react');
var ReactDOM = require('react-dom');


var users = [
    {name:"Anne Montgomery",gender:"Female"},
    {name:"Annie George",gender:"Female"},
    {name:"Gary Butler",gender:"Male"},
    {name:"Lisa Mendoza",gender:"Female"},
    {name:"Marilyn Henry",gender:"Female"},
    {name:"Johnny Tucker",gender:"Male"},
    {name:"Chris Jacobs",gender:"Male"},
    {name:"Benjamin James",gender:"Male"}];

var cols = ['name', 'gender'];

var Table = React.createClass({

    render: function() {
        var rowComponents = this.generateRows();

        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>{rowComponents}</tbody>
            </table>
        );
    },

    generateRows: function() {
        var cols = this.props.cols,
            data = this.props.data;

        return data.map(function(item, index) {
            var cells = cols.map(function(colData, colInd) {
                return <td key={colInd}>{item[colData]}</td>;
            });

            return <tr key={index}>{cells}</tr>;
        });
    }
});



var container = document.getElementById('task');

ReactDOM.render(<Table cols={cols} data={users} />, container);
