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
                <Route exact path='/' component={Home} />
                <Route exact path='/login'  component={Login} />
                {/* <Route path='/signup' component={SignUp} /> */}
                <Route exact  path='/buy'  component={Buy} />
                <Route exact path='/rent'  component={Rent}/>
                <Route exact path='/property/:id' exact component={PropertyDetail} />
            </div>
        )
    }
}

export default Routes;