var React = require('react');
var ReactDOM = require('react-dom');

import {users} from '../jsx/users';


class UserTable extends React.Component { 
        
    constructor(props) {
        super();
        this.state = {};

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(user) { 
        user.sayHi();
    }

    render() {
        let tempArr = users;

        return (
            <div>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Signup Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tempArr.map((user, item) => {
                            return <tr key={item}>
                                        <td>{user.id}</td>
                                        <td onClick={() => this.clickHandler(user)} className="clickable">{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.age}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.signUpDate}</td>
                                    </tr>;
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}



var container = document.getElementById('task'); 

ReactDOM.render(<UserTable />, container); 