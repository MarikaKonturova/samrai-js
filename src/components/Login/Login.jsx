import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormControls/FormsControls";
import { required } from "./../../utils/validators/validators";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import {login} from '../../redux/auth-reducer'
import s from './Login.module.css'
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Email"}
          name={"email"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          component={Input}
          validate={[required]}
          type="password"
        />
      </div>
      <div>
        <Field
          name={"rememberMe"}
          component={Input}
          type={"checkbox"}
        />
        remember me
      </div>
      {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);


const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  };
  if (props.isAuth) {
    return <Navigate to="/profile" />;
  }
  return (
    <>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
  });
  
export default connect(mapStateToProps, { login })(Login);
