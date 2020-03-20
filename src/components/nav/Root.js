import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../home/Home';
import Portfolio from '../portfolio/Portfolio';
import Blog from '../blog/Blog';
import App from '../../App';

const Root = props => {
    return(
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact path="/" component ={Home}/>
                    <Route exact path="/blog" component ={Blog}/>
                    <Route exact path="/portfolio" component ={Portfolio}/>
                    <Route path="*" component={Home} />
                </Switch>
            </App>
        </BrowserRouter>
    )
}
export default Root;