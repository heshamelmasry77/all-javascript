var React = require('react');   

// импорт действий toDoActions
var TodoActions = require('../actions/toDoActions'); 

class List extends React.Component {
    constructor(props) {
        super(props) 
    }

    render() {
        // создание списка заданий на основе props 
        return(
            <ul>
                {this.props.items.map((item, idx) => {
                    return <li key={item.id}>{idx+1}. {item.name} &nbsp; {item.complete ? <span className="glyphicon glyphicon-ok"></span> : <span className="glyphicon glyphicon-minus"></span>}                    
                        <div className={this.props.showDetails ? 'show' : 'hide'}>
                            <span className="glyphicon glyphicon-pencil" data-id={item.id} onClick={this.props.clickHandler}></span>
                            <span className="glyphicon glyphicon-remove" data-id={item.id} onClick={this.props.removeHandler}></span>
                       </div>
                    </li>
                })}
           </ul>        
    )}
}

module.exports = List; 