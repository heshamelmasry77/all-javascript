import React from 'react'
import ReactDOM from 'react-dom'


var router = require('react-router');

var Router = router.Router;
var Route = router.Route;
var Link = router.Link;
var IndexRoute = router.IndexRoute;
var hashHistory = router.hashHistory;
var browserHistory = router.browserHistory;
var Redirect = router.Redirect;

var ListView = require('./views/listView.jsx');
var TableView = require('./views/tableView.jsx');
var Item = require('./views/item.jsx');

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var users = [{first_name:"Matthew",last_name:"Phillips",email:"mphillips0@myspace.com",gender:"Male",ip_address:"14.241.172.154", id:23468},
            {first_name:"Larry",last_name:"Weaver",email:"lweaver1@slideshare.net",gender:"Male",ip_address:"126.139.9.128", id:89078},
            {first_name:"Barbara",last_name:"Tucker",email:"btucker2@cbc.ca",gender:"Female",ip_address:"92.195.229.16", id: 56435},
            {first_name:"Jonathan",last_name:"Cook",email:"jcook3@fc2.com",gender:"Male",ip_address:"187.79.225.71", id:78908},
            {first_name:"Jean",last_name:"Flores",email:"jflores4@last.fm",gender:"Female",ip_address:"222.197.158.249", id:67653},
            {first_name:"Kimberly",last_name:"Nelson",email:"knelson5@nifty.com",gender:"Female",ip_address:"111.174.89.57", id:83425},
            {first_name:"Willie",last_name:"Banks",email:"wbanks6@abc.net.au",gender:"Male",ip_address:"97.0.19.154", id:99873},
            {first_name:"Michael",last_name:"King",email:"mking7@w3.org",gender:"Male",ip_address:"149.114.62.6", id: 34239}]


class App extends React.Component {
    render() {

        const animProps = {
            transitionName:"example", 
            transitionEnterTimeout: 500, 
            transitionLeaveTimeout: 300, 
            component: 'div', 
            transitionAppear: true,
            transitionAppearTimeout: 300
        } 

        return (
            <div>
                <div id="container" className="panel well">
                    <h1>React Routing</h1>
                         <ul className="links-list">
                              <li><Link to="/listView"><button className="btn btn-lg btn-success">ListView</button></Link></li>
                              <li><Link to="/tableView"><button className="btn btn-lg btn-success">TableView</button></Link></li>
                        </ul>
                </div>  
                
                <div className="panel">     
                    <ReactCSSTransitionGroup {...animProps}>
                                {React.cloneElement(this.props.children, { key: Math.random() })}
                    </ReactCSSTransitionGroup>
                </div>
            </div>
   )}
}


//history={browserHistory}

ReactDOM.render(<Router history={hashHistory} >
    <Route path='/' component={App}> 
        <IndexRoute component={ListView} users={users} />

        <Route key="1" path="listView" component={ListView} users={users} />
        <Route key="2" path="tableView" component={TableView} users={users} />

        <Route path="listView/:id" component={Item} users={users} />
        <Route path="tableView/:id" component={Item} users={users} />
    </Route>
    </Router>, document.getElementById('task')); 
