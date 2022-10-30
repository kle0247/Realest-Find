import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from '../client/components/Login'


class Routes extends Component{
    render(){
        return(
            <div>
                {/* <NavBar /> */}
                <Route path='/login' component={Login} />
            </div>
        )
    }
}

export default Routes;