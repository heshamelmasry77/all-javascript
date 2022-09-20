var React = require('react'); 
var router = require('react-router');

var Link = router.Link;
var browserHistory = router.browserHistory;


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
                            {this.props.route.users.map((user, item) => {
                                return <tr key={item}>
                                    <td>
                                        <Link to={{ pathname: `listView/${user.id}`, query:
                                            {first_name: user.first_name, last_name: user.last_name, email: user.email,  gender: user.gender,  ip_address: user.ip_address} }}>{user.first_name}</Link>
                                    </td>
                                    <td>{user.last_name}</td>
                                </tr>;
                            })}
                        </tbody>
                </table>
            </div>
        )}
}



module.exports = TableView;