import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import Buy from './pages/Buy';
import Rent from './pages/Rent';
import PropertyDetail from './pages/PropertyDetail';


class Routes extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Route path='/' component={Home} />
                <Route path='/login' component={Login} />
                {/* <Route path='/signup' component={SignUp} /> */}
                <Route path='/buy' component={Buy} />
                <Route path='/rent' component={Rent}/>
                <Route path='/property/:id' component={PropertyDetail} />
            </div>
        )
    }
}

export default Routes;