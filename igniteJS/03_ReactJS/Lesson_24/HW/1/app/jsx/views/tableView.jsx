var React = require('react'); 


class TableView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return( 
            <div>
                <h3>TableView</h3>
                <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.route.users.map(function(user, item) {
                                return <tr key={item}><td>{user.first_name}</td><td>{user.last_name}</td></tr>;
                            })}
                        </tbody>
                </table>
            </div>
        )}
}

TableView.propTypes = {
    users : React.PropTypes.array
}



module.exports = TableView;