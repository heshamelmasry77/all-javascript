var React = require('react'); 

class ListView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return( 
            <div>
                <h3>ListView</h3>
                <ul>
                    {this.props.route.users.map(function(user, item) {
                        return <li key={item}><span>{user.first_name}</span> <span>{user.last_name};</span></li>;
                    })}
                </ul>
            </div>
        )}
}

ListView.propTypes = {
    users : React.PropTypes.array
}



module.exports = ListView;