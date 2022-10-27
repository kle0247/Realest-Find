import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { Route, HashRouter as Router } from 'react-router-dom'
import Routes from './Routes';
// import store from './store';


const App = () => {
    <div>
        <Routes />
    </div>
}

const root = createRoot(document.querySelector('#app')
)
root.render(
    // <Provider store={store}>
        <Router>
            <App />
        </Router>    
    // </Provider>
)
