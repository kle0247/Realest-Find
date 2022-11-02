import axios from 'axios';

const auth = (state = {}, action) => {
    if(action.type === 'SET_AUTH'){
        return state = action.auth
    }
    return state;
};

//login first

export const exchangeToken = () => {
    return async(dispatch) => {
        const token = window.localStorage.getItem('token');
        if(token){
            const response = await axios.get('/api/sessions', {
                headers: {
                    authorization: token
                }
            })
            const auth = response.data;
            dispatch({ auth, type: 'SET_AUTH'});
        }
    }
}

export const login = (credentials, history) => {
    return async (dispatch) => {
        let response = await axios.post('/api/sessions', credentials);
        const { token } = response.data;
        window.localStorage.setItem('token', token);

        response = await axios.get('/api/sessions', {
            headers: {
                authorization: token
            }
        });
        const auth = response.data;
        dispatch({ auth, type: 'SET_AUTH' })

        history.goBack();
    }
};


export default auth;