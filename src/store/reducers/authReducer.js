const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('Login Success')
            break;
        case 'LOGIN_ERR':
            return {
                ...state,
                authError: 'Login Failed'
            }
            break;
        default:
            return state;
            break;
    }
}

export default authReducer;