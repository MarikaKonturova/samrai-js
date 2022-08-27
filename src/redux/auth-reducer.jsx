const SET_USER_DARE = 'SET_USER_DARE'


let initialState = {
    id: '',
    email: '',
    login: '',
    isAuth: false
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DARE:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserDate = (userId, email, login) => ({
    type: SET_USER_DARE,
    data: {userId, email, login}
})
