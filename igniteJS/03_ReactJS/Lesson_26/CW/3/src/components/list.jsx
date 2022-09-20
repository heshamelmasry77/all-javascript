import React from 'react';


class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.show ?
                    <div>
                         <h3>List: </h3>
                         <ul className="list-group">
                              {this.props.data.map((item, index) => {
                                  return (
                                      <li className="list-group-item" key={index}>
                                          {item.id}. {item.first_name} {item.last_name}, {item.email}, {item.gender};
                                      </li>);
                               })}
                        </ul>
                    </div>
                 : ''}
            </div>
        )
    }
}

export default List;