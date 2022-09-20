var React = require('react'); 

// импорт хранилища данных (store)
var TodoStore = require('../stores/toDoStore'); 

// импорт действий toDoActions 
var TodoActions = require('../actions/toDoActions');


class Filter extends React.Component {
    constructor() {
        super();

        this.filterValue = '';

        this.inputHandler = this.inputHandler.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
    }

    inputHandler(event) {
        this.filterValue = event.target.value.toLowerCase();
    }

    searchHandler() {
        TodoActions.filterTasks(this.filterValue);
    }

    render() {
        return(<div className="filter">
              <input type="text" className="filter-input" onChange={this.inputHandler} />
              <input type="button" className="btn btn-primary" onClick={this.searchHandler} value="Filter" />
        </div>  
    )}
} 

module.exports = Filter; 