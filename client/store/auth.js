import axios from 'axios';

const auth = (state = {}, action) => {
    return state;
};

//login first

export const login = (credentials) => {
    return async (dispatch) => {
        let response = await axios.post('/api/sessions', credentials);
        const { token } = response.data;

        console.log(token)
    }
}



export default auth;