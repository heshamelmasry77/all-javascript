import React from 'react' 
import ReactDOM from 'react-dom'  


var router = require('react-router'); 

var Router = router.Router; 
var Route = router.Route; 
var Link = router.Link; 
var IndexRoute = router.IndexRoute; 
var hashHistory = router.hashHistory; 
var browserHistory = router.browserHistory;


var View1 = require('./views/view1.jsx'); 
var View2 = require('./views/view2.jsx');  


class App extends React.Component {
    render() {
        return (
            <div>
                <div id="container" className="panel well">
                    <h1>React Routing</h1>
                         <ul>
                              <li><Link to="/view1"><button className="btn btn-lg btn-success">View 1</button></Link></li>
                              <li><Link to="/view2"><button className="btn btn-lg btn-success">View 2</button></Link></li>
                        </ul>
                </div>  
                <div className="panel">{this.props.children}</div>
            </div>
   )}
} 

const routes = {
    path: '/', 
    component: App, 
    childRoutes: [
        { path: 'view1', component: View1 }, 
        { path: 'view2', component: View2 }
    ]
} 



ReactDOM.render(<Router routes={routes} history={browserHistory} />, document.getElementById('task'));