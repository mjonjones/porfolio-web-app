import React from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends React.Component {

    render(){
        return(
            <div>
                <nav>
                    <div>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/portfolio">Portfolio</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}