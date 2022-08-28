
import {Navigate} from 'react-router-dom'
import React from 'react'
import {connect} from 'react-redux'

const mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})
//withAuthRedirect<T>(Component: ComponentType<T>)
export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to="/login"/>
            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)

} 